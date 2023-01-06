import styled from "@emotion/styled"
import { zodResolver } from "@hookform/resolvers/zod"
import dynamic from "next/dynamic"
import { FC } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { ZodSchema } from "zod"
import SubmitButton from "./SubmitButton"

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

const DevTool = dynamic(() => import("./DevTools"), { ssr: false })

const Form: FC<Props> = ({
  initialValues,
  children,
  onSubmit,
  validationSchema,
  className,
  submitButton = false,
  submitText = "Absenden",
  validate,
}) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  })

  return (
    <FormProvider {...methods}>
      <StyledForm
        className={className}
        onSubmit={(e) => {
          if (!validate) {
            return methods.handleSubmit(onSubmit)(e)
          }

          const validation = validate(methods.getValues())
          console.log(validation)
          if (typeof validation === "boolean") {
            return methods.handleSubmit(onSubmit)(e)
          }

          e.preventDefault()

          Object.keys(validation).forEach((key) => {
            methods.setError(key, { message: validation[key], type: "custom" })
          })
        }}
      >
        <DevTool control={methods.control} />
        {children}
        {submitButton && <SubmitButton>{submitText}</SubmitButton>}
      </StyledForm>
    </FormProvider>
  )
}

export default Form

interface Props {
  validationSchema?: ZodSchema
  initialValues: Record<string, any>
  onSubmit: (data: Record<string, any>) => void
  children: any
  className?: string
  submitButton?: boolean
  submitText?: string
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
}
