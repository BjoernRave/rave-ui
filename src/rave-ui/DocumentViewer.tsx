import DownloadIcon from '@mui/icons-material/CloudDownload';
import DeleteIcon from '@mui/icons-material/Delete';
import DocumentIcon from '@mui/icons-material/Description';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
  Tooltip,
} from '@mui/material';
import { FC } from 'react';
import { useLocale } from './AppWrapper';

const DocumentViewer: FC<Props> = ({
  documents,
  onDelete,
  canDownload = true,
  canView,
}) => {
  const { locales } = useLocale();

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
                <Tooltip title={locales.showDocument}>
                  <a href={document.url} target="_blank">
                    <IconButton size="large">
                      <VisibilityIcon />
                    </IconButton>
                  </a>
                </Tooltip>
              )}
              {canDownload && (
                <Tooltip title={locales.downloadDocument}>
                  <a href={document.url} download>
                    <IconButton size="large">
                      <DownloadIcon />
                    </IconButton>
                  </a>
                </Tooltip>
              )}
              {onDelete && (
                <Tooltip title={locales.deleteDocument}>
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
};

export default DocumentViewer;

interface Props {
  documents: { url: string; name?: string; description?: string }[];
  onDelete?: (document: any) => void;
  canDownload?: boolean;
  canView?: boolean;
}
