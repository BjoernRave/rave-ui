import { withRHF } from '../.storybook/withRHF'
import { BooleanIcon, DocumentViewer } from '../src'

export default {
  title: 'General',
  decorators: [withRHF(false)],
}

const exampleFiles = [
  { url: 'https://inventhora.com', name: 'Document 1' },
  { url: 'https://inventhora.com', name: 'Document 2' },
  { url: 'https://inventhora.com', name: 'Document 3' },
]

export const DocumentViewerStory = (args) => (
  <DocumentViewer documents={exampleFiles} {...args} />
)

export const BooleanIconStory = (args) => <BooleanIcon {...args} />
