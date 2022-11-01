import { IconButton, Tooltip } from '@mui/material';
import Link from 'next/link';
import { FC } from 'react';

const IconButtonLink: FC<Props> = ({ href, as, title, children, onClick }) => {
  return (
    <Link passHref href={href} as={as}>
      <Tooltip title={title}>
        <IconButton onClick={onClick} size="large">
          {children}
        </IconButton>
      </Tooltip>
    </Link>
  );
};

export default IconButtonLink;

interface Props {
  href: string;
  as?: string;
  title: string;
  onClick?: (e?: any) => void;
}
