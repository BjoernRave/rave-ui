import { action } from "@storybook/addon-actions"

import { FC, ReactNode, VFC } from "react"
import { FormProvider, useForm } from "react-hook-form"
import { AppWrapper } from "../src"

const StorybookFormProvider: VFC<{ children: ReactNode }> = ({ children }) => {
  const methods = useForm()
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(action("[React Hooks Form] Submit"))}
      >
        {children}
      </form>
    </FormProvider>
  )
}

export const withRHF = (showSubmitButton: boolean) => (Story: FC) =>
  (
    <AppWrapper>
      <StorybookFormProvider>
        <Story />
        {showSubmitButton && <button type="submit">Submit</button>}
      </StorybookFormProvider>
    </AppWrapper>
  )
