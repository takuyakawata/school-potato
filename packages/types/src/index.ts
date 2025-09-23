// Common types for the school-potato project
export interface User {
  id: string
  name: string
  email: string
  createdAt: Date
  updatedAt: Date
}

export interface School {
  id: string
  name: string
  address: string
  createdAt: Date
  updatedAt: Date
}

export interface Potato {
  id: string
  name: string
  description?: string
  schoolId: string
  userId: string
  createdAt: Date
  updatedAt: Date
}

// Add more types as needed
