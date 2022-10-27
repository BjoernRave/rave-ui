import { generateSlug } from '@inventhora/utils';
import { BaseTextFieldProps, TextField } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { useController } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const NumberInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  variant = 'outlined',
  allowDecimals,
  onChange,
  error,
  max,
  control,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  const { field, fieldState } = useController({ control, name: formName });

  return (
    <TextField
      margin="dense"
      size="small"
      id={generateSlug(formName)}
      {...rest}
      value={field.value || ''}
      onChange={(e) => {
        onChange && onChange(e as any);
        if (max && Number(e.target.value) > max) {
          return field.onChange({ target: { value: max } });
        }

        field.onChange(e);
      }}
      onKeyDown={(e) => {
        //delete, tab, etc
        if ([8, 9, 37, 39].includes(e.keyCode)) {
          return;
        }

        //number keys
        if (e.keyCode >= 48 && e.keyCode <= 57) {
          return;
        }

        //numpad
        if (e.keyCode >= 96 && e.keyCode <= 105) {
          return;
        }

        if (
          allowDecimals &&
          (e.keyCode === 190 || e.keyCode === 188) &&
          field?.value?.split &&
          field?.value?.split('.')?.length < 2 &&
          field?.value?.split(',')?.length < 2
        ) {
          return;
        }
        e.preventDefault();
      }}
      inputMode="numeric"
      type="text"
      style={{ width: '100%' }}
      variant={variant as any}
      helperText={fieldState.error ?? helperText}
      error={Boolean(fieldState.error) || error}
    />
  );
};

export default NumberInput;

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {
  InputProps?: any;
  allowDecimals?: boolean;
  max?: number;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
