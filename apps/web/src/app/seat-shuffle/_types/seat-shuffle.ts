export interface Student {
  id: string
  name: string
  number?: number
  group?: string
}

export interface Seat {
  id: string
  row: number
  col: number
  student?: Student
  isDisabled: boolean
  isFixed: boolean
}

export interface Constraint {
  id: string
  type: "adjacent" | "group" | "fixed"
  studentIds: string[]
  description: string
}

export interface ClassroomLayout {
  id: string
  name: string
  rows: number
  cols: number
  seats: Seat[]
  students: Student[]
  constraints: Constraint[]
  createdAt: Date
}

export interface SeatShuffleConfig {
  rows: number
  cols: number
  disabledSeats: string[]
  fixedSeats: { [seatId: string]: string } // seatId -> studentId
  adjacentConstraints: string[][] // pairs of student IDs that shouldn't be adjacent
  groupConstraints: { [groupName: string]: string[] } // group name -> student IDs
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
