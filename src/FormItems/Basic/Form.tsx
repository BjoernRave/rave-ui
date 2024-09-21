import styled from "@emotion/styled"
import { zodResolver } from "@hookform/resolvers/zod"
import type { FC, PropsWithChildren } from "react"
import {
  type FieldErrorsImpl,
  FormProvider,
  type UseFormSetError,
  useForm,
} from "react-hook-form"
import { SchemaContext } from "./SchemaContext"
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

const Form: FC<PropsWithChildren<Props>> = ({
  initialValues,
  children,
  onSubmit,
  validationSchema,
  className,
  submitButton = false,
  submitText = "Absenden",
  validate,
  onError,
}) => {
  const methods = useForm({
    resolver: zodResolver(validationSchema),
    defaultValues: initialValues,
    context: {
      schema: validationSchema,
    },
    reValidateMode: "onChange",
  })

  const handleError = (errors: any) => {
    console.log(errors, "from Form component rave-ui")

    onError?.(errors)
  }

  return (
    <FormProvider {...methods}>
      <SchemaContext.Provider value={validationSchema}>
        <StyledForm
          noValidate
          className={className}
          onSubmit={(e) => {
            if (!validate) {
              return methods.handleSubmit(
                (values) => onSubmit(values, methods.setError),
                handleError,
              )(e)
            }

            const validation = validate(methods.getValues())

            if (typeof validation === "boolean") {
              return methods.handleSubmit(
                (values) => onSubmit(values, methods.setError),
                handleError,
              )(e)
            }

            e.preventDefault()

            handleError(validation as any)

            methods.clearErrors()

            Object.keys(validation).forEach((key) => {
              methods.setError(key, {
                message: validation[key],
                type: "custom",
              })
            })
          }}
        >
          <div className="space-y-4 w-full">{children}</div>
          {submitButton && <SubmitButton>{submitText}</SubmitButton>}
        </StyledForm>
      </SchemaContext.Provider>
    </FormProvider>
  )
}

export default Form

interface Props {
  validationSchema: any
  initialValues: Record<string, any>
  onSubmit: (
    data: Record<string, any>,
    setError: UseFormSetError<Record<string, any>>,
  ) => void
  children: any
  className?: string
  submitButton?: boolean
  submitText?: string
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
  onError?: (
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >,
  ) => void
}
