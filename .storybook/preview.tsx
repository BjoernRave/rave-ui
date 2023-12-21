import AppWrapper from "../src/AppWrapper"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const deccorators = [
  (Story) => (
    <AppWrapper>
      <Story />
    </AppWrapper>
  ),
]
