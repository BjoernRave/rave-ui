import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@mui/material'
import DownloadIcon from '@mui/icons-material/CloudDownload'
import DeleteIcon from '@mui/icons-material/Delete'
import DocumentIcon from '@mui/icons-material/Description'
import VisibilityIcon from '@mui/icons-material/Visibility'
import useTranslation from 'next-translate/useTranslation'
import React, { FC } from 'react'

const DocumentViewer: FC<Props> = ({
  documents,
  onDelete,
  canDownload = true,
  canView,
}) => {
  const { t } = useTranslation()

  return (
    <List>
      {documents.map((document, ind) => (
        <>
          <ListItem>
            <ListItemAvatar>
              <DocumentIcon />
            </ListItemAvatar>
            <ListItemText>{document.name}</ListItemText>

            <ListItemSecondaryAction>
              {canView && (
                <Tooltip
                  title={t('common:viewTitle', {
                    name: t('common:document'),
                  })}>
                  <a href={document.url} target='_blank'>
                    <IconButton size="large">
                      <VisibilityIcon />
                    </IconButton>
                  </a>
                </Tooltip>
              )}
              {canDownload && (
                <Tooltip
                  title={t('common:downloadTitle', {
                    name: t('common:document'),
                  })}>
                  <a href={document.url} download>
                    <IconButton size="large">
                      <DownloadIcon />
                    </IconButton>
                  </a>
                </Tooltip>
              )}
              {onDelete && (
                <Tooltip
                  title={t('common:deletionTitle', {
                    name: t('common:document'),
                  })}>
                  <IconButton onClick={() => onDelete(document)} size="large">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              )}
            </ListItemSecondaryAction>
          </ListItem>
          {ind !== documents.length - 1 && <Divider />}
        </>
      ))}
    </List>
  );
}

export default DocumentViewer

interface Props {
  documents: { url: string; name?: string; description?: string }[]
  onDelete?: (document: any) => void
  canDownload?: boolean
  canView?: boolean
}
