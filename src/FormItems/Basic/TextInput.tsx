import { generateSlug } from '@inventhora/utils';
import { BaseTextFieldProps, TextField } from '@mui/material';

import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const TextInput: FC<Props> = ({
  control,
  name,
  index,
  subName,
  helperText,
  variant = 'outlined',
  style,
  onChange,
  error,
  maxLength,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  return (
    <Controller
      name={formName}
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          id={generateSlug(formName)}
          {...rest}
          {...field}
          type="text"
          margin="dense"
          size="small"
          onChange={(e) => {
            if (maxLength && e.target.value.length > maxLength) {
              return;
            }
            field.onChange(e);
            onChange && onChange(e);
          }}
          style={style ?? { width: '100%' }}
          variant={variant as any}
          helperText={fieldState.error ?? helperText}
          error={Boolean(fieldState.error) || error}
        />
      )}
    />
  );
};

export default TextInput;

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {
  InputProps?: any;
  onChange?: any;
  maxLength?: number;
}
