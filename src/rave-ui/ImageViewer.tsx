import styled from '@emotion/styled';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import DeleteIcon from '@mui/icons-material/Delete';
import { Backdrop, IconButton, Tooltip } from '@mui/material';
import { FC, useState } from 'react';
import { useLocale } from './AppWrapper';

const PreviewsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const UploadPreview = styled.img`
  height: 180px;
  width: auto;
`;

const StyledIcon = styled(DeleteIcon)`
  position: absolute !important;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: 35px;
  height: 35px;
  opacity: 0;
  transition: all linear 0.2s;
  z-index: 2;
`;

const PreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid black;
  margin: 10px;
`;

const ImagePreviewWrapper = styled.div<{ isdeleting: number }>`
  position: relative;
  cursor: pointer;
  transition: all linear 0.2s;
  padding: 10px 10px 0 10px;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: #3c9f80;
    opacity: 0;
    transition: all 0.2s;
  }
`;

const FullScreenImage = styled.img`
  position: fixed;
  width: auto;
  height: 95%;
  top: 2.5%;
`;

const OrderChange = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const ImageViewer: FC<Props> = ({
  images,
  onDelete,
  onOrderChange,
  getImageUrl,
}) => {
  const { locales } = useLocale();
  const [isFullScreen, setIsFullScreen] = useState(null);
  return (
    <>
      <PreviewsWrapper>
        {images
          .sort((a, b) => a.order - b.order)
          .map((image, index) => (
            <PreviewWrapper>
              <ImagePreviewWrapper
                isdeleting={onDelete ? 1 : 0}
                onClick={() =>
                  onDelete ? onDelete(image) : setIsFullScreen(image)
                }
                key={index}
              >
                <UploadPreview
                  src={
                    image?.name
                      ? URL.createObjectURL(image as any)
                      : getImageUrl(image)
                  }
                />
                {onDelete && <StyledIcon fontSize="large" />}
              </ImagePreviewWrapper>
              {onOrderChange && images && (
                <OrderChange>
                  <Tooltip title={locales.back}>
                    <IconButton
                      disabled={image?.name ? index === 0 : image.order === 0}
                      onClick={() => {
                        const newArray = Array.from(images);

                        if (image.name) {
                          const temp = newArray[index];

                          newArray[index] = newArray[index - 1];

                          newArray[index - 1] = temp;
                        } else {
                          newArray[index].order = newArray[index - 1].order;

                          newArray[index - 1].order =
                            newArray[index - 1].order + 1;
                        }

                        onOrderChange(newArray);
                      }}
                      size="large"
                    >
                      <ArrowBackIcon />
                    </IconButton>
                  </Tooltip>
                  {image?.name ? index + 1 : image.order + 1}.
                  <Tooltip title={locales.forward}>
                    <IconButton
                      disabled={
                        image?.name
                          ? index === images.length - 1
                          : image.order === images.length - 1
                      }
                      onClick={() => {
                        const newArray = Array.from(images);

                        if (image.name) {
                          const temp = newArray[index];

                          newArray[index] = newArray[index + 1];

                          newArray[index + 1] = temp;
                        } else {
                          newArray[index].order = newArray[index + 1].order;

                          newArray[index + 1].order =
                            newArray[index + 1].order - 1;
                        }

                        onOrderChange(newArray);
                      }}
                      size="large"
                    >
                      <ArrowForwardIcon />
                    </IconButton>
                  </Tooltip>
                </OrderChange>
              )}
            </PreviewWrapper>
          ))}
      </PreviewsWrapper>
      {isFullScreen && (
        <Backdrop
          style={{ margin: 0, zIndex: 99999 }}
          onClick={() => setIsFullScreen(null)}
          open
        >
          <FullScreenImage
            src={
              isFullScreen?.name
                ? URL.createObjectURL(isFullScreen)
                : getImageUrl(isFullScreen.url)
            }
          />
        </Backdrop>
      )}
    </>
  );
};

export default ImageViewer;

interface Props {
  images: { url: string; name?: string; order?: number }[];
  onDelete?: (image: any) => void;
  onOrderChange?: (
    files: { url: string; name?: string; order?: number }[]
  ) => void;
  getImageUrl: (image: any) => string;
}
