import styled from "@emotion/styled"
import { Button, Paper } from "@mui/material"
import Link from "next/link"
import { FC, ReactNode } from "react"
import Form from "./FormItems/Basic/Form"
import SubmitButton from "./FormItems/Basic/SubmitButton"
import { useLocale } from "./LocaleContext"

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

const FormPage: FC<Props> = ({
  initialValues,
  validationSchema,
  validate,
  children,
  onSubmit,
  edit,
  style,
  hideSubmit,
  submitText,
  withCancel,
}) => {
  const { locales } = useLocale()

  return (
    <PageWrapper style={style}>
      <StyledPaper elevation={2}>
        <Form
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <>
            {children}
            {!hideSubmit && (
              <div
                style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
              >
                <StyledSubmit type="submit" size="large">
                  Speichern
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
  onSubmit: (values: any) => void
  validate?: (values: any) => void
  edit?: boolean
  children: any
  style?: any
  enableReinitialize?: boolean
  hideSubmit?: boolean
  submitText?: ReactNode
  withRequiredNotice?: boolean
  withCancel?: string
}
