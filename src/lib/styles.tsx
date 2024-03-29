import styled from "@emotion/styled"
import { Button, CircularProgress, Container, Paper } from "@mui/material"
import { FC, PropsWithChildren, ReactNode } from "react"

export const Loader = styled(CircularProgress)`
  position: fixed;
  bottom: 10px;
  left: 10px;
  z-index: 9999;

  @media (max-width: 767px) {
    bottom: initial;
    top: 5px;
    left: 80px;
  }
`

export const Title = styled.h1`
  margin: 0;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`

export const SameLine = styled.div`
  display: inline-flex;
  width: 100%;
  align-items: center;
  .MuiTextField-root {
    :not(:last-child) {
      margin-right: 20px;
    }
    width: 100%;
  }

  @media (max-width: 767px) {
    flex-direction: column;

    .MuiTextField-root {
      :not(:last-child) {
        margin-right: initial;
        margin-bottom: 20px;
      }
    }
  }
`

export const BoldText = styled.span`
  font-weight: bold;
  margin-right: 5px;
`

const InfoWrapper = styled.li`
  list-style: none;
  font-size: 16px;
  line-height: 2;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`

export const Info: FC<{
  name: string
  value: string | ReactNode
  Icon?: any
}> = ({ name, value, Icon }) => {
  if (!value) return null

  return (
    <InfoWrapper>
      {Icon && <Icon />}
      {name}: <BoldText>{" " + value}</BoldText>
    </InfoWrapper>
  )
}

export const PageWrapper: FC<
  PropsWithChildren<{
    title: string
    maxWidth?: string
    actionLabel?: ReactNode
    onClick?: () => void
  }>
> = ({ children, title, maxWidth = "md", actionLabel, onClick }) => {
  return (
    <Container maxWidth={maxWidth as any}>
      <Paper sx={{ padding: 4 }}>
        {actionLabel && onClick ? (
          <Header>
            <Title>{title}</Title>
            <Button variant="contained" color="secondary" onClick={onClick}>
              {actionLabel}
            </Button>
          </Header>
        ) : (
          <Title>{title}</Title>
        )}
        {children}
      </Paper>
    </Container>
  )
}
