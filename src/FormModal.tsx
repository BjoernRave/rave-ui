import styled from "@emotion/styled"
import { generateSlug } from "@inventhora/utils"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material"

import { FC, ReactNode } from "react"
import Form from "./FormItems/Basic/Form"
import SubmitButton from "./FormItems/Basic/SubmitButton"
import { useLocale } from "./LocaleContext"

const StyledDialogContent = styled(DialogContent)`
  @media (min-width: 767px) {
    min-width: 767px;
  }
`

const StyledButton = styled(Button)`
  @media (max-width: 767px) {
    width: 50%;
  }
`

const StyledSubmit = styled(SubmitButton)`
  @media (max-width: 767px) {
    width: 50%;
  }
`

const FormModal: FC<Props> = ({
  isOpen = true,
  onClose,
  title,
  description,
  initialValues,
  validationSchema,
  onSubmit,
  disabled,
  children,
  edit,
  submitText,
  validate,
}) => {
  const { locales } = useLocale()
  return (
    <Dialog
      disableEnforceFocus
      maxWidth="xl"
      open={isOpen}
      onClose={() => onClose()}
      aria-labelledby={generateSlug(title)}
    >
      <DialogTitle id={generateSlug(title)}>{title}</DialogTitle>
      <Form
        validate={validate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <StyledDialogContent id={`${generateSlug(title)}-content`}>
          {description && <DialogContentText>{description}</DialogContentText>}
          {children}
          <DialogActions>
            <StyledButton
              variant="text"
              size="large"
              type="button"
              onClick={() => onClose()}
              color="primary"
            >
              {locales.cancel}
            </StyledButton>
            <StyledSubmit size="large" disabled={disabled}>
              {submitText ?? locales.save}
            </StyledSubmit>
          </DialogActions>
        </StyledDialogContent>
      </Form>
    </Dialog>
  )
}

export default FormModal

interface Props {
  isOpen?: boolean
  onClose: () => void
  title: string
  description?: string
  initialValues: object
  validationSchema: any
  onSubmit: (values: any) => void
  disabled?: boolean
  edit?: boolean
  submitText?: ReactNode
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
}
