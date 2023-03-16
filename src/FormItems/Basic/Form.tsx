import styled from '@emotion/styled'
import { zodResolver } from '@hookform/resolvers/zod'
import { FC, PropsWithChildren, useEffect } from 'react'
import {
  FieldErrorsImpl,
  FormProvider,
  useForm,
  UseFormSetError,
} from 'react-hook-form'
import { ZodSchema } from 'zod'
import SubmitButton from './SubmitButton'

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
  submitText = 'Absenden',
  validate,
  onError,
}) => {
  const methods = useForm({
    defaultValues: initialValues,
    resolver: zodResolver(validationSchema),
  })

  useEffect(() => {
    if (methods.formState.isSubmitted && !methods.formState.isValid) {
      console.log(methods.formState.errors, 'from Form component rave-ui')

      onError && onError(methods.formState.errors)
    }
  }, [methods.formState.submitCount])

  return (
    <FormProvider {...methods}>
      <StyledForm
        className={className}
        onSubmit={(e) => {
          if (!validate) {
            return methods.handleSubmit((values) =>
              onSubmit(values, methods.setError)
            )(e)
          }

          const validation = validate(methods.getValues())

          if (typeof validation === 'boolean') {
            return methods.handleSubmit((values) =>
              onSubmit(values, methods.setError)
            )(e)
          }

          e.preventDefault()

          console.log(validation, 'validation')

          onError && onError(validation as any)

          Object.keys(validation).forEach((key) => {
            methods.setError(key, { message: validation[key], type: 'custom' })
          })
        }}
      >
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
  onSubmit: (
    data: Record<string, any>,
    setError: UseFormSetError<Record<string, any>>
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
    >
  ) => void
}
