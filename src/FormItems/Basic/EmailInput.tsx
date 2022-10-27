import { generateSlug } from '@inventhora/utils';
import { BaseTextFieldProps, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const EmailInput: FC<Props> = ({
  name,
  index,
  subName,
  helperText,
  control,
  error,
  variant = 'outlined',
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
          margin="dense"
          size="small"
          id={generateSlug(formName)}
          style={{ width: '100%' }}
          {...rest}
          {...field}
          type="email"
          variant={variant as any}
          helperText={fieldState.error ?? helperText}
          error={Boolean(fieldState.error) || error}
        />
      )}
    />
  );
};

export default EmailInput;

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {}
