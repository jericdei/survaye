export interface Question {
  // columns
  id: number
  type: QuestionType
  title: string
  options: string[]|null
  with_others: boolean
  created_at: string|null
  updated_at: string|null
}

export interface Survey {
  // columns
  id: number
  user_id: number
  title: string
  template: Record<string, unknown>
  created_at: string|null
  updated_at: string|null
  // overrides
  questions: Question[][]
}

export interface User {
  // columns
  id: number
  name: string|null
  email: string
  email_verified_at: string|null
  remember_token?: string|null
  created_at: string|null
  updated_at: string|null
  // relations
  surveys: Survey[]
  notifications: DatabaseNotification[]
}

const QuestionType = {
  SHORT_TEXT: 'SHORT_TEXT',
  LONG_TEXT: 'LONG_TEXT',
  SINGLE_CHOICE: 'SINGLE_CHOICE',
  MULTIPLE_CHOICE: 'MULTIPLE_CHOICE',
  DATE: 'DATE',
  TIME: 'TIME',
  DATETIME: 'DATETIME',
  BOOLEAN: 'BOOLEAN',
} as const;

export type QuestionType = typeof QuestionType[keyof typeof QuestionType]
