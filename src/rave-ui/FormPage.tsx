import styled from "@emotion/styled"
import { Button, Paper } from "@mui/material"
import Link from "next/link"
import { FC, ReactNode } from "react"
import { useLocale } from "./AppWrapper"
import Form from "./FormItems/Basic/Form"
import SubmitButton from "./FormItems/Basic/SubmitButton"
import { Title } from "./lib/styles"

// const leftAlignedStyles = css`
//   width: calc(100% / 3 * 2);
//   margin-right: calc(100% / 3 * 1 + 40px);
// `

// const CenterStyles = css`
//   width: 100%;
//   display: block;
//   box-sizing: border-box;
//   margin-left: auto;
//   margin-right: auto;
//   padding-left: 16px;
//   padding-right: 16px;
//   padding-bottom: 10px;
// `

const StyledPaper = styled(Paper)`
  padding: 10px 20px;
  margin: 10px;
  max-width: 960px;
  width: 100%;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
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
  title,
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
        <Header>
          <Title>{title}</Title>
        </Header>
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
                  {Boolean(submitText)
                    ? submitText
                    : edit
                    ? locales.update
                    : locales.create}
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
  title: string
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
