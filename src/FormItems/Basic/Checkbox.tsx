import { generateSlug } from '@inventhora/utils';
import {
  Checkbox as MuiCheckbox,
  CheckboxProps,
  FormControlLabel,
  FormHelperText,
} from '@mui/material';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const Checkbox: FC<Props> = ({
  name,
  label,
  helperText,
  required,
  index,
  subName,
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
        <FormControlLabel
          id={generateSlug(name)}
          style={{ alignSelf: 'start', margin: '10px 0' }}
          control={<MuiCheckbox {...rest} checked={field.value} {...field} />}
          label={
            <>
              {label}
              {required ? ' *' : ''}
              {(helperText || fieldState.error) && (
                <FormHelperText error={Boolean(fieldState.error)}>
                  {fieldState.error ?? helperText}
                </FormHelperText>
              )}
            </>
          }
        />
      )}
    />
  );
};

export default Checkbox;

export interface Props
  extends InputProps,
    Omit<CheckboxProps, 'name' | 'label'> {}
