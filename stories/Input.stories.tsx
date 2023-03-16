import { ComponentMeta } from '@storybook/react'
import { useController } from 'react-hook-form'
import { withRHF } from '../.storybook/withRHF'

import {
  ComboBox,
  DateInput,
  DateRangeInput,
  DateTimeInput,
  EmailInput,
  FileInput,
  MultiCombobox,
  NumberInput,
  Option,
  PasswordInput,
  PhoneInput,
  SelectInput,
  SubmitButton,
  TextAreaInput,
  TextInput,
  TextListInput,
  TimeInput,
  WithCreationOption,
} from '../src'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  decorators: [withRHF(false)],
} as ComponentMeta<typeof TextInput>

const exampleOptions2: Option[] = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
]

const exampleOptions3: Option[] = [
  {
    label: 'Option 1',
    value: 'option1',
  },
  {
    label: 'Option 2',
    value: 'option2',
  },
  {
    label: 'Option 3',
    value: 'option3',
  },
]

// By passing optional props to this story, you can control the props of the component when
// you consume the story in a test.
export const TextInputStory = (args) => (
  <TextInput
    name="TextInput"
    label="TextInput"
    helperText="HelperText"
    {...args}
  />
)

export const NumberInputStory = (args) => (
  <NumberInput name="NumberInput" label="NumberInput" {...args} />
)

export const PasswordInputStory = (args) => (
  <PasswordInput
    name="PasswordInput"
    label="PasswordInput"
    helperText="HelperText"
    {...args}
  />
)

export const EmailInputStory = (args) => (
  <EmailInput
    name="EmailInput"
    label="EmailInput"
    helperText="HelperText"
    {...args}
  />
)

export const TextListInputStory = (args) => (
  <TextListInput
    name="TextListInput"
    label="TextListInput"
    helperText="HelperText"
    {...args}
  />
)

export const TextAreaInputStory = (args) => (
  <TextAreaInput
    name="TextAreaInput"
    label="TextAreaInput"
    helperText="HelperText"
    {...args}
  />
)

export const ComboBoxStory = (args) => (
  <ComboBox
    name="ComboboxInput"
    label="ComboboxInput"
    helperText="HelperText"
    options={exampleOptions2}
    getOptionLabel={(option) => option.label}
    {...args}
  />
)

export const SelectInputStory = (args) => (
  <SelectInput
    name="SelectInput"
    label="SelectInput"
    helperText="HelperText"
    options={exampleOptions2}
    {...args}
  />
)

export const DateInputStory = (args) => (
  <DateInput
    name="DateInput"
    label="DateInput"
    helperText="HelperText"
    {...args}
  />
)
export const TimeInputStory = (args) => (
  <TimeInput
    name="TimeInput"
    label="TimeInput"
    helperText="HelperText"
    {...args}
  />
)
export const DateTimeInputStory = (args) => (
  <DateTimeInput
    name="DateTimeInput"
    label="DateTimeInput"
    helperText="HelperText"
    {...args}
  />
)

export const WithCreationOptionStory = (args) => (
  <WithCreationOption
    title="CreationOption"
    onCreate={() => console.log('creating')}
    {...args}
  >
    <TextInput label="WithCreationOption" name="WithCreationOption" />
  </WithCreationOption>
)

// export const DimensionsInputStory = (args) => (
//   <DimensionsInput name='DimensionsInput' lengthUnit='cm' />
// )

export const PhoneInputStory = (args) => (
  <PhoneInput
    name="PhoneInputStory"
    prefixName="PrefixPhoneInputStory"
    label="PhoneInput"
    {...args}
  />
)

export const FileInputStory = (args) => (
  <FileInput
    getImageUrl={(url) => 'https://test.com'}
    label="FileInputStory"
    onDelete={() => {}}
    onReOrder={() => {}}
    name="FileInputStory"
    {...args}
  />
)

// export const WYSIWYGInputStory = (args) => {
//   const [value, setValue] = useState('')

//   return (
//     <>
//       <WYSIWYGInput
//         onChange={(val) => setValue(val)}
//         name='WYSIWYGInput'
//         label='WYSIWYGInput'
//
//       />
//       <Markdown source={value} />
//     </>
//   )
// }

// export const AddressInputStory = (args) => (
//   <AddressInput withBilling={boolean('With Billing Address', true)} />
// )

export const MultiComboboxStory = (args) => (
  <MultiCombobox
    name="MultiComboboxStory"
    helperText="MultiComboboxHelper"
    label="MultiComboboxStory"
    options={['tag1', 'tag2', 'tag3']}
    {...args}
  />
)

export const DateRangeInputStory = (args) => (
  <DateRangeInput
    name="DateRangeInputStory"
    helperText="DateRangeInputHelper"
    label="DateRangeInputStory"
    {...args}
  />
)

const MultiCrateForm = () => {
  const { field } = useController({ name: 'MultiCreateStory' })

  return (
    <>
      <TextInput
        autoFocus
        name={'MultiCreateStory'}
        index={field.value.length - 1}
        subName="name"
        required
        label={'unitName'}
        helperText={'unitNameHelper'}
      />
      <NumberInput
        name={'MultiCreateStory'}
        index={field.value.length - 1}
        subName="baseAmount"
        required
        label={'baseAmount'}
        helperText={'baseAmountHelper'}
      />
    </>
  )
}

// export const MultiCreateStory = (args) => {
//   return (
//     <>
//       <MultiCreate
//         label="MultiCreate"
//         schema={z.object({
//           name: z.string(),
//           baseAmount: z.string(),
//         })}
//         name={'MultiCreateStory'}
//         fields={[
//           {
//             name: 'name',
//             label: 'unitName',
//           },
//           {
//             name: 'baseAmount',
//             label: 'baseAmount',
//           },
//         ]}
//         title={'Create a Unit'}
//         onDelete={action}
//         helperText={
//           'unitExplanation super duper long so long wow is this long who even reads this'
//         }
//       >
//         <MultiCrateForm />
//       </MultiCreate>
//     </>
//   );
// };

// export const TableInputStory = (args) => {

//   const columnHelper = createCol

//   const columns =

//   return (
//     <TableInput
//       label="TableInput"
//       withSearch={boolean('With Search', true)}
//       multiple={boolean('Multiple?', false)}
//       helperText="This is a helper text"
//       name="TableInputStory"
//       filterWith={boolean('With Filter', false) && 'supplier.id'}
//       columns={[
//         {
//           accessor: (val) => val.product.fullName,
//           Header: 'product',
//         },
//         { accessor: 'amount', Header: 'amount' },
//         {
//           accessor: (val: any) => val?.batch?.batchNumber ?? 'N/A',
//           Header: 'batchNumberShort',
//         },
//         {
//           accessor: (val: any) =>
//             val?.batch?.bestBefore
//               ? formatDate(val?.batch?.bestBefore, 'day')
//               : 'N/A',
//           Header: 'bestBeforeShort',
//         },
//         {
//           accessor: 'supplier.name',
//           Header: 'supplier',
//         },
//         {
//           accessor: 'warehouse.name',
//           Header: 'warehouse',
//         },
//       ]}
//       options={[
//         {
//           id: '1',
//           amount: 167,
//           supplier: {
//             id: 'ckdilk78c0108f3c9a1km2ex2',
//             name: 'Supplier1',
//           },
//           batch: {
//             id: 'ckdilk79z0185f3c9urbbyapl',
//             batchNumber: '1',
//             bestBefore: null,
//           },
//           product: {
//             id: 'ckdilk7800088f3c9hpvagjhu',
//             fullName: 'Teller',

//             consumables: [],
//           },
//           warehouse: {
//             id: 'ckdilk78c0108f3c9a1km2ex2',
//             name: 'Warehouse2',
//           },
//         },
//         {
//           id: '2',
//           amount: 100,
//           supplier: {
//             id: 'ckdilk76u0037f3c9k6jy0ghm',
//             name: 'Supplier2',
//           },
//           batch: {
//             id: 'ckdilk79z0185f3c9urbbyapl',
//             batchNumber: null,
//             bestBefore: null,
//           },
//           product: {
//             id: 'ckdilk7800088f3c9hpvagjhu',
//             fullName: 'Glas',

//             consumables: [],
//           },
//           warehouse: {
//             id: 'ckdilk78c0108f3c9a1km2ex2',
//             name: 'Warehouse1',
//           },
//         },
//         {
//           id: '3',
//           amount: 37,
//           supplier: {
//             id: 'ckdilk78c0108f3c9a1km2ex2',
//             name: 'Supplier1',
//           },
//           batch: {
//             id: 'ckdilk79z0185f3c9urbbyapl',
//             batchNumber: '12',
//             bestBefore: null,
//           },
//           product: {
//             id: 'ckdilk7800088f3c9hpvagjhu',
//             fullName: 'Tisch',

//             consumables: [],
//           },
//         },
//       ]}
//     />
//   );
// };

export const SubmitButtonStory = (args) => <SubmitButton>Submit</SubmitButton>
