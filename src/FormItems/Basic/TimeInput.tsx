import { generateSlug, timeFormat } from '@inventhora/utils';
import { TextField } from '@mui/material';
import { TimePicker } from '@mui/x-date-pickers-pro';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useLocale } from '../../AppWrapper';
import { InputProps, Language } from '../../lib/types';
import DateTimeProvider from './DateTimeProvider';

const TimeInput: FC<Props> = ({
  name,
  index,
  subName,
  label,
  helperText,
  required,
  disabled,
  control,
}) => {
  const { lang } = useLocale();

  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  const { field, fieldState } = useController({ control, name: formName });

  return (
    <DateTimeProvider lang={lang as Language}>
      <TimePicker
        value={field.value ?? null}
        onChange={(date) => field.onChange({ target: { value: date || null } })}
        disabled={disabled}
        ampm={false}
        mask="__:__"
        inputFormat={timeFormat}
        label={label}
        renderInput={(props) => (
          <TextField
            margin="dense"
            size="small"
            {...props}
            error={Boolean(fieldState.error)}
            helperText={fieldState.error ?? helperText}
            required={required}
            style={{ width: '100%' }}
            id={generateSlug(formName)}
          />
        )}
      />
    </DateTimeProvider>
  );
};

export default TimeInput;

export interface Props extends InputProps {
  disabled?: boolean;
}
