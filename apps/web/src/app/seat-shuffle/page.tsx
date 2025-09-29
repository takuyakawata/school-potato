"use client"

import { useState, useEffect } from "react"
import { Button } from "@school-potato/ui"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@school-potato/ui"
import { Input } from "@school-potato/ui"
import { Label } from "@school-potato/ui"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@school-potato/ui"
import { Badge } from "@school-potato/ui"
import { Separator } from "@school-potato/ui"
import { Shuffle, Users, Settings, FileText, Save, History, Trash2 } from "lucide-react"

interface Student {
  id: string
  name: string
  seat?: number
}

interface SeatLayout {
  rows: number
  cols: number
}

interface SeatHistory {
  id: string
  date: string
  students: Student[]
  layout: SeatLayout
  assignments: Student[]
}

export default function SeatShufflePage() {
  const [students, setStudents] = useState<Student[]>([])
  const [newStudentName, setNewStudentName] = useState("")
  const [seatLayout, setSeatLayout] = useState<SeatLayout>({ rows: 6, cols: 5 })
  const [seatAssignments, setSeatAssignments] = useState<Student[]>([])
  const [history, setHistory] = useState<SeatHistory[]>([])

  // LocalStorageから履歴を読み込み
  useEffect(() => {
    const savedHistory = localStorage.getItem('seat-shuffle-history')
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory))
    }
  }, [])

  const addStudent = () => {
    if (newStudentName.trim()) {
      const newStudent: Student = {
        id: Date.now().toString(),
        name: newStudentName.trim()
      }
      setStudents([...students, newStudent])
      setNewStudentName("")
    }
  }

  const removeStudent = (id: string) => {
    setStudents(students.filter(student => student.id !== id))
  }

  const shuffleSeats = () => {
    const shuffledStudents = [...students].sort(() => Math.random() - 0.5)
    const totalSeats = seatLayout.rows * seatLayout.cols
    
    const assignedStudents = shuffledStudents.map((student, index) => ({
      ...student,
      seat: index < totalSeats ? index + 1 : undefined
    }))
    
    setSeatAssignments(assignedStudents)
  }

  const saveToHistory = () => {
    if (seatAssignments.length === 0) return

    const newHistoryItem: SeatHistory = {
      id: Date.now().toString(),
      date: new Date().toLocaleString('ja-JP'),
      students: [...students],
      layout: { ...seatLayout },
      assignments: [...seatAssignments]
    }

    const updatedHistory = [newHistoryItem, ...history].slice(0, 10) // 最新10件まで保持
    setHistory(updatedHistory)
    localStorage.setItem('seat-shuffle-history', JSON.stringify(updatedHistory))
  }

  const loadFromHistory = (historyItem: SeatHistory) => {
    setStudents([...historyItem.students])
    setSeatLayout({ ...historyItem.layout })
    setSeatAssignments([...historyItem.assignments])
  }

  const deleteHistoryItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id)
    setHistory(updatedHistory)
    localStorage.setItem('seat-shuffle-history', JSON.stringify(updatedHistory))
  }

  const renderSeatGrid = () => {
    const grid = []
    for (let row = 0; row < seatLayout.rows; row++) {
      const rowStudents = []
      for (let col = 0; col < seatLayout.cols; col++) {
        const seatNumber = row * seatLayout.cols + col + 1
        const student = seatAssignments.find(s => s.seat === seatNumber)
        
        rowStudents.push(
          <div
            key={seatNumber}
            className="w-20 h-16 border border-gray-300 rounded-lg p-2 text-center text-xs bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="font-semibold text-gray-500 mb-1">{seatNumber}</div>
            <div className="text-gray-800 truncate">
              {student ? student.name : ""}
            </div>
          </div>
        )
      }
      grid.push(
        <div key={row} className="flex gap-2 mb-2">
          {rowStudents}
        </div>
      )
    }
    return grid
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <Shuffle className="h-10 w-10 text-blue-600" />
            席替えシステム
          </h1>
          <p className="text-xl text-gray-600">
            簡単に席替えを管理できます
          </p>
        </div>

        <Tabs defaultValue="students" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="students" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              生徒管理
            </TabsTrigger>
            <TabsTrigger value="layout" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              レイアウト設定
            </TabsTrigger>
            <TabsTrigger value="shuffle" className="flex items-center gap-2">
              <Shuffle className="h-4 w-4" />
              席替え実行
            </TabsTrigger>
            <TabsTrigger value="result" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              結果表示
            </TabsTrigger>
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              履歴
            </TabsTrigger>
          </TabsList>

          <TabsContent value="students" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>生徒名の管理</CardTitle>
                <CardDescription>
                  席替えに参加する生徒の名前を追加・削除できます
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="生徒名を入力"
                    value={newStudentName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStudentName(e.target.value)}
                    onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addStudent()}
                  />
                  <Button onClick={addStudent} disabled={!newStudentName.trim()}>
                    追加
                  </Button>
                </div>
                
                <Separator />
                
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    登録済み生徒 ({students.length}名)
                  </Label>
                  <div className="flex flex-wrap gap-2">
                    {students.map((student) => (
                      <Badge
                        key={student.id}
                        variant="secondary"
                        className="flex items-center gap-2 px-3 py-1"
                      >
                        {student.name}
                        <button
                          onClick={() => removeStudent(student.id)}
                          className="ml-1 text-red-500 hover:text-red-700"
                        >
                          ×
                        </button>
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="layout" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>教室レイアウト設定</CardTitle>
                <CardDescription>
                  教室の座席配置を設定します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="rows">行数</Label>
                    <Input
                      id="rows"
                      type="number"
                      min="1"
                      max="10"
                      value={seatLayout.rows}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeatLayout(prev => ({ ...prev, rows: parseInt(e.target.value) || 1 }))}
                    />
                  </div>
                  <div>
                    <Label htmlFor="cols">列数</Label>
                    <Input
                      id="cols"
                      type="number"
                      min="1"
                      max="10"
                      value={seatLayout.cols}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeatLayout(prev => ({ ...prev, cols: parseInt(e.target.value) || 1 }))}
                    />
                  </div>
                </div>
                
                <div className="text-sm text-gray-600">
                  総座席数: {seatLayout.rows * seatLayout.cols}席
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shuffle" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>席替え実行</CardTitle>
                <CardDescription>
                  ランダムに席替えを実行します
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <Button
                    size="lg"
                    onClick={shuffleSeats}
                    disabled={students.length === 0}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <Shuffle className="h-5 w-5 mr-2" />
                    席替えを実行
                  </Button>
                </div>
                
                {students.length === 0 && (
                  <div className="text-center text-gray-500">
                    まず生徒を追加してください
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="result" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>席替え結果</CardTitle>
                <CardDescription>
                  席替えの結果を確認できます
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {seatAssignments.length > 0 ? (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        {seatAssignments.filter(s => s.seat).length}名の生徒が座席に割り当てられました
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={saveToHistory}
                        disabled={seatAssignments.length === 0}
                      >
                        <Save className="h-4 w-4 mr-2" />
                        結果を保存
                      </Button>
                    </div>
                    
                    <div className="border rounded-lg p-4 bg-gray-50">
                      <div className="space-y-2">
                        {renderSeatGrid()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    まだ席替えが実行されていません
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>席替え履歴</CardTitle>
                <CardDescription>
                  過去の席替え結果を確認・復元できます（最新10件まで保存）
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {history.length > 0 ? (
                  <div className="space-y-3">
                    {history.map((item) => (
                      <div
                        key={item.id}
                        className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <div className="space-y-2">
                            <div className="font-medium text-gray-900">
                              {item.date}
                            </div>
                            <div className="text-sm text-gray-600">
                              生徒数: {item.students.length}名 | 
                              レイアウト: {item.layout.rows}行 × {item.layout.cols}列 | 
                              座席数: {item.layout.rows * item.layout.cols}席
                            </div>
                            <div className="text-xs text-gray-500">
                              座席割り当て: {item.assignments.filter(s => s.seat).length}名
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => loadFromHistory(item)}
                            >
                              復元
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => deleteHistoryItem(item.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center text-gray-500 py-8">
                    まだ履歴がありません
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
