import { action } from '@storybook/addon-actions';
import React, { FC, ReactNode, VFC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

const StorybookFormProvider: VFC<{ children: ReactNode; defaultValues: any }> =
  ({ children, defaultValues }) => {
    const methods = useForm({ defaultValues });
    return (
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(action('[React Hooks Form] Submit'))}
        >
          {children}
        </form>
      </FormProvider>
    );
  };

export const withRHF =
  (showSubmitButton: boolean, defaultValues: any) =>
  (Story: FC): any =>
    (
      <StorybookFormProvider defaultValues={defaultValues}>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    );
