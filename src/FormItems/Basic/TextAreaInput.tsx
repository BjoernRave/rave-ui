import { generateSlug } from '@inventhora/utils';
import { BaseTextFieldProps, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const TextAreaInput: FC<Props> = ({
  name,
  subName,
  index,
  helperText,
  error,
  variant = 'outlined',
  rows = 4,
  control,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  return (
    <Controller
      control={control}
      name={formName}
      render={({ field, fieldState }) => (
        <TextField
          id={generateSlug(formName)}
          {...rest}
          {...field}
          type="text"
          margin="dense"
          size="small"
          style={{ width: '100%' }}
          multiline
          rows={String(rows)}
          variant={variant as any}
          helperText={fieldState.error ?? helperText}
          error={Boolean(fieldState.error) || error}
        />
      )}
    />
  );
};

export default TextAreaInput;

export interface Props
  extends InputProps,
    Omit<BaseTextFieldProps, 'name' | 'label'> {
  rows?: number;
}
