import styled from "@emotion/styled"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import { createContext, FC, useContext } from "react"
import { useController, useForm, UseFormReturn } from "react-hook-form"
import { ZodSchema } from "zod"

const StyledForm = styled.form`
  > *:not(label) {
    margin: 8px 0;
  }

  > button {
    margin: 20px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`

const initialValues: UseFormReturn<Record<string, any>, any> = null

const FormContext = createContext(initialValues)

const DevTool = dynamic(() => import("./DevTools"), { ssr: false })

export const useField = (name: string) => {
  const { control } = useContext(FormContext)
  const controller = useController({ control, name })

  return controller
}

const Form: FC<Props> = ({
  initialValues,
  children,
  onSubmit,
  validationSchema,
  className,
}) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
    mode: "onChange",
  })

  return (
    <StyledForm className={className} onSubmit={methods.handleSubmit(onSubmit)}>
      <DevTool control={methods.control} />
      <FormContext.Provider value={methods}>{children}</FormContext.Provider>
    </StyledForm>
  )
}

export default Form

interface Props {
  validationSchema?: ZodSchema
  initialValues: Record<string, any>
  onSubmit: (data: Record<string, any>) => void
  children: any
  className?: string
}
