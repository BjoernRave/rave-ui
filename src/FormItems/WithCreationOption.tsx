import styled from '@emotion/styled'
import AddIcon from '@mui/icons-material/Add'
import { Button, Tooltip } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;

  > div:first-of-type {
    width: 100%;
  }
`

const WithCreationOption: FC<PropsWithChildren<Props>> = ({
  children,
  canCreate = true,
  onCreate,
  title,
}) => {
  return (
    <Wrapper>
      {children}
      {canCreate && (
        <Tooltip placement="right" title={title}>
          <Button
            aria-label={title}
            style={{ height: '56px', marginLeft: 10 }}
            variant="contained"
            color="secondary"
            size="large"
            onClick={onCreate}
          >
            <AddIcon />
          </Button>
        </Tooltip>
      )}
    </Wrapper>
  )
}

export default WithCreationOption

interface Props {
  canCreate?: boolean
  onCreate: () => void
  title: string
}
