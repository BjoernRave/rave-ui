import { dateFormat, generateSlug } from '@inventhora/utils';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers-pro';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { useLocale } from '../../AppWrapper';
import { InputProps, Language } from '../../lib/types';
import DateTimeProvider from './DateTimeProvider';

const DateInput: FC<Props> = ({
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
      <DatePicker
        disabled={disabled}
        value={field.value ?? null}
        onChange={(date: any) => {
          if (!date) {
            return field.onChange({ target: { value: null } });
          }

          date.setHours(0);
          date.setMinutes(0);
          date.setSeconds(0);
          date.setMilliseconds(0);

          field.onChange({ target: { value: date } });
        }}
        mask="__.__.____"
        inputFormat={dateFormat}
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

export default DateInput;

export interface Props extends InputProps {
  disabled?: boolean;
}
