import { IconButton, Tooltip } from '@mui/material'
import Link from 'next/link'
import React, { FC } from 'react'
import { ABlank } from './lib/styles'

const IconButtonLink: FC<Props> = ({ href, as, title, children, onClick }) => {
  return (
    <Link passHref href={href} as={as}>
      <ABlank>
        <Tooltip title={title}>
          <IconButton onClick={onClick} size="large">{children}</IconButton>
        </Tooltip>
      </ABlank>
    </Link>
  );
}

export default IconButtonLink

interface Props {
  href: string
  as?: string
  title: string
  onClick?: (e?: any) => void
}
