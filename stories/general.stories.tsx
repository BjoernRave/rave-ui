import { withA11y } from '@storybook/addon-a11y';
import { boolean, withKnobs } from '@storybook/addon-knobs';
import React from 'react';
import StorybookWrapper from '../.storybook/wrapper';
import { BooleanIcon, DocumentViewer } from '../src';
export default {
  title: 'General',
  decorators: [StorybookWrapper, withKnobs, withA11y],
};

const exampleFiles = [
  { url: 'https://inventhora.com', name: 'Document 1' },
  { url: 'https://inventhora.com', name: 'Document 2' },
  { url: 'https://inventhora.com', name: 'Document 3' },
];

export const DocumentViewerStory = (props) => (
  <DocumentViewer
    onDelete={boolean('With Delete', true) ? () => {} : undefined}
    documents={exampleFiles}
  />
);

export const BooleanIconStory = (props) => (
  <BooleanIcon value={boolean('True?', true)} />
);
