import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import StorybookWrapper from '../.storybook/wrapper';
export default {
  title: 'Composites',
  decorators: [StorybookWrapper, withKnobs, withA11y],
};

// export const TableStory = (props) => {
//   const [selected, setSelected] = useState(null);

//   return (
//     <Table
//       selected={boolean('Selectable', false) ? selected : undefined}
//       onRowClick={
//         boolean('Selectable', false) ? (row) => setSelected(row.id) : null
//       }
//       data={
//         boolean('Has data', true)
//           ? [
//               { name: 'Shoe', amount: 10 },
//               { name: 'Table', amount: 20 },
//               { name: 'Trouser', amount: 22 },
//               { name: 'Ball', amount: 19 },
//             ]
//           : []
//       }
//       columns={[
//         { accessor: 'name', Header: 'Name' },
//         { accessor: 'amount', Header: 'Amount' },
//       ]}
//       withSearch={boolean('With Search?', true)}
//     />
//   );
// };

// export const ImageViewerStory = (props) => {
//   const [images, setImages] = useState<any>([
//     { url: '/image1.jpg', order: 0 },
//     { url: '/image2.jpg', order: 1 },
//     { url: '/image3.jpg', order: 2 },
//   ]);
//   return (
//     <ImageViewer
//       onOrderChange={
//         boolean('With Order Change', true)
//           ? (newImages) => setImages(newImages)
//           : null
//       }
//       onDelete={boolean('Can Delete?', false) ? () => {} : null}
//       images={images}
//     />
//   );
// };

// export const DocumentViewerStory = (props) => (
//   <DocumentViewer
//     canDownload={boolean('Can Download', true)}
//     onDelete={boolean('Can Delete?', true) ? () => {} : null}
//     documents={[
//       { url: '/image1.jpg', name: 'Document1' },
//       { url: '/image2.jpg', name: 'Document2' },
//       { url: '/image3.jpg', name: 'Document3' },
//     ]}
//   />
// );
