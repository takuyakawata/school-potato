import { Tabs, TabsList, TabsTrigger } from "@school-potato/ui"
import { Shuffle, Users, Settings, History } from "lucide-react"
import { StudentsManagement } from './_componnents/students-management'
import { SeatResultHistory } from './_componnents/seat-result-history'
import { SeatShuffle } from './_componnents/seat-shuffle'

export default function SeatShufflePage() {
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
            <TabsTrigger value="history" className="flex items-center gap-2">
              <History className="h-4 w-4" />
              履歴
            </TabsTrigger>
          </TabsList>

          {/*生徒管理コンポーネント*/}
          < StudentsManagement />
          {/*<TabsContent value="students" className="space-y-6">*/}
          {/*  <Card>*/}
          {/*    <CardHeader>*/}
          {/*      <CardTitle>生徒名の管理</CardTitle>*/}
          {/*      <CardDescription>*/}
          {/*        席替えに参加する生徒の名前を追加・削除できます*/}
          {/*      </CardDescription>*/}
          {/*    </CardHeader>*/}
          {/*    <CardContent className="space-y-4">*/}
          {/*      <div className="flex gap-2">*/}
          {/*        <Input*/}
          {/*          placeholder="生徒名を入力"*/}
          {/*          value={newStudentName}*/}
          {/*          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNewStudentName(e.target.value)}*/}
          {/*          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && addStudent()}*/}
          {/*        />*/}
          {/*        <Button onClick={addStudent} disabled={!newStudentName.trim()}>*/}
          {/*          追加*/}
          {/*        </Button>*/}
          {/*      </div>*/}
          {/*      <Separator />*/}
          {/*      <div className="space-y-2">*/}
          {/*        <Label className="text-sm font-medium">*/}
          {/*          登録済み生徒 ({students.length}名)*/}
          {/*        </Label>*/}
          {/*        <div className="flex flex-wrap gap-2">*/}
          {/*          {students.map((student) => (*/}
          {/*            <Badge*/}
          {/*              key={student.id}*/}
          {/*              variant="secondary"*/}
          {/*              className="flex items-center gap-2 px-3 py-1"*/}
          {/*            >*/}
          {/*              {student.name}*/}
          {/*              <button*/}
          {/*                onClick={() => removeStudent(student.id)}*/}
          {/*                className="ml-1 text-red-500 hover:text-red-700"*/}
          {/*              >*/}
          {/*                ×*/}
          {/*              </button>*/}
          {/*            </Badge>*/}
          {/*          ))}*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*    </CardContent>*/}
          {/*  </Card>*/}
          {/*</TabsContent>*/}

          {/*正規替え実行コンポーネント*/}
          <SeatShuffle />
          {/*<TabsContent value="layout" className="space-y-6">*/}
          {/*  <Card>*/}
          {/*    <CardHeader>*/}
          {/*      <CardTitle>教室レイアウト設定</CardTitle>*/}
          {/*      <CardDescription>*/}
          {/*        教室の座席配置を設定します*/}
          {/*      </CardDescription>*/}
          {/*    </CardHeader>*/}
          {/*    <CardContent className="space-y-4">*/}
          {/*      <div className="grid grid-cols-2 gap-4">*/}
          {/*        <div>*/}
          {/*          <Label htmlFor="rows">行数</Label>*/}
          {/*          <Input*/}
          {/*            id="rows"*/}
          {/*            type="number"*/}
          {/*            min="1"*/}
          {/*            max="10"*/}
          {/*            value={seatLayout.rows}*/}
          {/*            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeatLayout(prev => ({ ...prev, rows: parseInt(e.target.value) || 1 }))}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*        <div>*/}
          {/*          <Label htmlFor="cols">列数</Label>*/}
          {/*          <Input*/}
          {/*            id="cols"*/}
          {/*            type="number"*/}
          {/*            min="1"*/}
          {/*            max="10"*/}
          {/*            value={seatLayout.cols}*/}
          {/*            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSeatLayout(prev => ({ ...prev, cols: parseInt(e.target.value) || 1 }))}*/}
          {/*          />*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="text-sm text-gray-600">*/}
          {/*        総座席数: {seatLayout.rows * seatLayout.cols}席*/}
          {/*      </div>*/}
          {/*      <Button*/}
          {/*        size="lg"*/}
          {/*        onClick={shuffleSeats}*/}
          {/*        disabled={students.length === 0}*/}
          {/*        className="bg-blue-600 hover:bg-blue-700"*/}
          {/*      >*/}
          {/*        <Shuffle className="h-5 w-5 mr-2" />*/}
          {/*      </Button>*/}

          {/*      {seatAssignments.length > 0 ? (*/}
          {/*        <div className="space-y-4">*/}
          {/*          <div className="flex justify-between items-center">*/}
          {/*            <div className="text-sm text-gray-600">*/}
          {/*              {seatAssignments.filter(s => s.seat).length}名の生徒が座席に割り当てられました*/}
          {/*            </div>*/}
          {/*            <Button*/}
          {/*              variant="outline"*/}
          {/*              size="sm"*/}
          {/*              onClick={saveToHistory}*/}
          {/*              disabled={seatAssignments.length === 0}*/}
          {/*            >*/}
          {/*              <Save className="h-4 w-4 mr-2" />*/}
          {/*              結果を保存*/}
          {/*            </Button>*/}
          {/*          </div>*/}

          {/*          <div className="border rounded-lg p-4 bg-gray-50">*/}
          {/*            <div className="space-y-2">*/}
          {/*              {renderSeatGrid()}*/}
          {/*            </div>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      ) : (*/}
          {/*        <div className="text-center text-gray-500 py-8">*/}
          {/*          まだ席替えが実行されていません*/}
          {/*        </div>*/}
          {/*      )}*/}

          {/*    </CardContent>*/}
          {/*  </Card>*/}
          {/*</TabsContent>*/}

          {/*//履歴コンポーネント*/}
          <SeatResultHistory />
          {/*<TabsContent value="history" className="space-y-6">*/}
          {/*  <Card>*/}
          {/*    <CardHeader>*/}
          {/*      <CardTitle>席替え履歴（有料）</CardTitle>*/}
          {/*      <CardDescription>*/}
          {/*        過去の席替え結果を確認・復元できます（最新10件まで保存）*/}
          {/*      </CardDescription>*/}
          {/*    </CardHeader>*/}
          {/*    <CardContent className="space-y-4">*/}
          {/*      {history.length > 0 ? (*/}
          {/*        <div className="space-y-3">*/}
          {/*          {history.map((item) => (*/}
          {/*            <div*/}
          {/*              key={item.id}*/}
          {/*              className="border rounded-lg p-4 bg-gray-50 hover:bg-gray-100 transition-colors"*/}
          {/*            >*/}
          {/*              <div className="flex justify-between items-start">*/}
          {/*                <div className="space-y-2">*/}
          {/*                  <div className="font-medium text-gray-900">*/}
          {/*                    {item.date}*/}
          {/*                  </div>*/}
          {/*                  <div className="text-sm text-gray-600">*/}
          {/*                    生徒数: {item.students.length}名 | */}
          {/*                    レイアウト: {item.layout.rows}行 × {item.layout.cols}列 | */}
          {/*                    座席数: {item.layout.rows * item.layout.cols}席*/}
          {/*                  </div>*/}
          {/*                  <div className="text-xs text-gray-500">*/}
          {/*                    座席割り当て: {item.assignments.filter(s => s.seat).length}名*/}
          {/*                  </div>*/}
          {/*                </div>*/}
          {/*                <div className="flex gap-2">*/}
          {/*                  <Button*/}
          {/*                    size="sm"*/}
          {/*                    variant="outline"*/}
          {/*                    onClick={() => loadFromHistory(item)}*/}
          {/*                  >*/}
          {/*                    復元*/}
          {/*                  </Button>*/}
          {/*                  <Button*/}
          {/*                    size="sm"*/}
          {/*                    variant="outline"*/}
          {/*                    onClick={() => deleteHistoryItem(item.id)}*/}
          {/*                    className="text-red-600 hover:text-red-700"*/}
          {/*                  >*/}
          {/*                    <Trash2 className="h-4 w-4" />*/}
          {/*                  </Button>*/}
          {/*                </div>*/}
          {/*              </div>*/}
          {/*            </div>*/}
          {/*          ))}*/}
          {/*        </div>*/}
          {/*      ) : (*/}
          {/*        <div className="text-center text-gray-500 py-8">*/}
          {/*          まだ履歴がありません*/}
          {/*        </div>*/}
          {/*      )}*/}
          {/*    </CardContent>*/}
          {/*  </Card>*/}
          {/*</TabsContent>*/}
        </Tabs>
      </div>
    </div>
  )
}
