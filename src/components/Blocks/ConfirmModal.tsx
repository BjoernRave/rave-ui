import { Dialog, DialogTitle } from '@mui/material'
import { FC, ReactNode, useState } from 'react'
import Button from './Button'

const ConfirmModal: FC<Props> = ({ onClose, message, title }) => {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <Dialog open onClose={() => onClose(false)}>
      <DialogTitle>{title ? title : 'Eingabe bestätigen'}</DialogTitle>
      <div className='p-4'>
        <p className='mb-4 text-lg'>{message}</p>
        <div className='flex justify-around w-full'>
          <Button
            className='mr-2'
            isLoading={isLoading}
            onClick={async () => {
              setIsLoading(true)
              await onClose(true)
              setIsLoading(false)
            }}>
            Bestätigen
          </Button>
          <Button
            className='ml-2'
            onClick={() => onClose(false)}
            variant='secondary'>
            Abbrechen
          </Button>
        </div>
      </div>
    </Dialog>
  )
}

export default ConfirmModal

interface Props {
  onClose: (confirm: boolean) => void | Promise<void>
  message: ReactNode
  title?: string
}
