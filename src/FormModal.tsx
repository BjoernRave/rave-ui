import CloseIcon from '@mui/icons-material/Close'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { FC, PropsWithChildren, ReactNode, useId } from 'react'
import { FieldErrorsImpl, UseFormSetError } from 'react-hook-form'
import Form from './FormItems/Basic/Form'
import SubmitButton from './FormItems/Basic/SubmitButton'
import { useLocale } from './lib/theme'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}))

const StyledDialogContent = styled(DialogContent)`
  width: 100%;

  @media (min-width: 767px) {
    min-width: 767px;
  }
`

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

function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props

  return (
    <DialogTitle {...other} className={`flex justify-between w-full `}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  )
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
  edit,
  onError,
  submitText,
  validate,
}) => {
  const id = useId()

  const { locales } = useLocale()
  return (
    <BootstrapDialog
      scroll="paper"
      disableEnforceFocus
      maxWidth="lg"
      fullWidth
      open={isOpen}
      onClose={() => onClose()}
      aria-labelledby={id}
    >
      <BootstrapDialogTitle onClose={onClose} id={id}>
        {title}
      </BootstrapDialogTitle>
      <Form
        validate={validate}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        onError={onError}
      >
        <StyledDialogContent dividers id={`${id}-content`}>
          {description && <DialogContentText>{description}</DialogContentText>}
          {children}
        </StyledDialogContent>
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
      </Form>
    </BootstrapDialog>
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
  disabled?: boolean
  edit?: boolean
  submitText?: ReactNode
  validate?: (data: Record<string, any>) => true | { [key: string]: string }
}
