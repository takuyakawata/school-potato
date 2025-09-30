'use client'

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Label,
  Separator,
  TabsContent,
} from '@school-potato/ui'
import { useState } from 'react'
import { Student } from '../_types/seat-shuffle'


export const StudentsManagement = (
) => {

  // hooksで定義？
  const [students, setStudents] = useState<Student[]>([])
  const [newStudentName, setNewStudentName] = useState("")

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

  return (
  <>
    {/*todo value を定数　or 渡す*/}
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

</>) }