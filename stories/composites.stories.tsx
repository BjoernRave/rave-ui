import { withRHF } from "../.storybook/withRHF"
import { Table } from "../src"

export default {
  title: "Composites",
  decorators: [withRHF(false)],
}

export const TableStory = (props) => {
  return (
    <Table
      data={[
        { name: "Shoe", amount: "10" },
        { name: "Table", amount: "20" },
        { name: "Trouser", amount: "22" },
        { name: "Ball", amount: "19" },
      ]}
      columns={[
        { accessorKey: "name", header: "Name" },
        { accessorKey: "amount", header: "Amount" },
      ]}
    />
  )
}

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
