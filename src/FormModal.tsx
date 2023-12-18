import CloseIcon from "@mui/icons-material/Close"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from "@mui/material"
import { Breakpoint, styled } from "@mui/material/styles"
import { FC, PropsWithChildren, ReactNode, useId } from "react"
import { FieldErrorsImpl, UseFormSetError } from "react-hook-form"
import Form from "./FormItems/Basic/Form"
import SubmitButton from "./FormItems/Basic/SubmitButton"
import { useLocale } from "./lib/theme"

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}))

const StyledButton = styled(Button)`
  width: 100%;

  @media (max-width: 767px) {
    width: 50%;
  }
`

const StyledSubmit = styled(SubmitButton)`
  @media (max-width: 767px) {
    width: 50%;
  }
`

export interface DialogTitleProps {
  id: string
  children?: React.ReactNode
  onClose: () => void
}

const FormModal: FC<PropsWithChildren<Props>> = ({
  isOpen = true,
  onClose,
  title,
  description,
  initialValues,
  validationSchema,
  onSubmit,
  disabled,
  children,
  onError,
  submitText,
  validate,
  maxWidth = "lg",
  hideActions,
}) => {
  const id = useId()

  const { locales } = useLocale()
  return (
    <BootstrapDialog
      scroll="paper"
      disableEnforceFocus
      maxWidth={maxWidth}
      fullWidth
      open={isOpen}
      onClose={onClose ? () => onClose() : undefined}
      aria-labelledby={id}
    >
      <DialogTitle
        id={id}
        className={`flex !px-3 font-bold justify-between w-full `}
      >
        {title}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 16,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
      <Form
        validate={validate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        onError={onError}
      >
        <DialogContent className="w-full" id={`${id}-content`}>
          {description && <DialogContentText>{description}</DialogContentText>}
          {children}
        </DialogContent>
        {!hideActions && (
          <DialogActions>
            {onClose && (
              <StyledButton
                variant="text"
                size="large"
                type="button"
                onClick={() => onClose()}
                color="primary"
              >
                {locales.cancel}
              </StyledButton>
            )}
            <StyledSubmit size="large" disabled={disabled}>
              {submitText ?? locales.save}
            </StyledSubmit>
          </DialogActions>
        )}
      </Form>
    </BootstrapDialog>
  )
}

export default FormModal

interface Props {
  isOpen?: boolean
  onClose?: () => void
  title: string
  description?: string
  initialValues: object
  validationSchema: any
  onSubmit: (
    data: Record<string, any>,
    setError: UseFormSetError<Record<string, any>>,
  ) => void
  onError?: (
    errors: Partial<
      FieldErrorsImpl<{
        [x: string]: any
      }>
    >,
  ) => void
  disabled?: boolean
  submitText?: ReactNode
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
  maxWidth?: Breakpoint | false
  hideActions?: boolean
}
