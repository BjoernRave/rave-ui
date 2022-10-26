import styled, { ThemeProvider } from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';
import DateTimeProvider from '../src/FormItems/Basic/DateTimeProvider';
import { getTheme } from '../src/lib/styles';

const Wrapper = styled.div`
  form {
    > *:not(label) {
      margin: 8px 0;
    }

    > button {
      margin: 20px 0;
    }
  }
`;

const StorybookWrapper = (storyfn) => {
  return (
    <ThemeProvider theme={getTheme(false)}>
      <DateTimeProvider>
        <CssBaseline />
        <Wrapper>{storyfn()}</Wrapper>
      </DateTimeProvider>
    </ThemeProvider>
  );
};

export default StorybookWrapper;
