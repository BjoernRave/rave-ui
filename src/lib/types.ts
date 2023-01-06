import { AlertColor } from "@mui/lab"
import { Dispatch, ReactNode, SetStateAction } from "react"

export type Language = "es" | "en" | "de" | "pt"

export interface Option {
  value: any
  label: string
  helperText?: string
}

export type DateFormat = "daytime" | "day" | "time"

export interface Amount {
  id: string
  amount: string
  baseAmount: number
  name: string
}

export interface NotificationType {
  message: string
  state: AlertColor
  duration?: number
}

export interface ResponseHandle {
  setNotification: SetStateAction<Dispatch<NotificationType>>
  response: any
  success?: string
  error: string
  errors?: { message: string; trigger: string; callback?: any }[]
  t: any
}

export interface InputProps {
  name: string
  index?: number
  subName?: string
  label: string
  helperText?: string | ReactNode
  required?: boolean
  onChange?: (value: any) => void
}
