import styled from '@emotion/styled'
import { Button, Paper } from '@mui/material'
import Link from 'next/link'
import { FC, PropsWithChildren, ReactNode } from 'react'
import { FieldErrorsImpl, UseFormSetError } from 'react-hook-form'
import Form from './FormItems/Basic/Form'
import SubmitButton from './FormItems/Basic/SubmitButton'
import { useLocale } from './lib/theme'

const StyledPaper = styled(Paper)`
  padding: 10px 20px;
  margin: 10px;
  max-width: 960px;
  width: 100%;
`

const PageWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`

const StyledSubmit = styled(SubmitButton)`
  @media (max-width: 767px) {
    padding: 20px 0;
    width: 100%;
  }
`

const FormPage: FC<PropsWithChildren<Props>> = ({
  initialValues,
  validationSchema,
  validate,
  children,
  onSubmit,
  onError,
  edit,
  title,
  style,
  hideSubmit,
  submitText,
  withCancel,
}) => {
  const { locales } = useLocale()

  return (
    <PageWrapper style={style}>
      <StyledPaper elevation={2}>
        {title && <h1>{title}</h1>}
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          onError={onError}
          validate={validate}
        >
          <>
            {children}
            {!hideSubmit && (
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  justifyContent: 'center',
                }}
              >
                <StyledSubmit type="submit" size="large">
                  {submitText ?? locales.save}
                </StyledSubmit>
                {withCancel && (
                  <Link href={withCancel}>
                    <Button sx={{ ml: 5 }}>{locales.cancel}</Button>
                  </Link>
                )}
              </div>
            )}
          </>
        </Form>
      </StyledPaper>
    </PageWrapper>
  )
}

export default FormPage

interface Props {
  description?: string
  initialValues: object
  validationSchema: any
  onSubmit: (
    data: Record<string, any>,
    setError: UseFormSetError<Record<string, any>>
  ) => void
  onError?: (
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >
  ) => void
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
  edit?: boolean
  children: any
  style?: any
  enableReinitialize?: boolean
  hideSubmit?: boolean
  submitText?: ReactNode
  withRequiredNotice?: boolean
  withCancel?: string
  title?: string
}
