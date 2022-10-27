import { generateSlug, getErrorMessage } from '@inventhora/utils';
import { Autocomplete, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import {
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material/useAutocomplete';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const filter = createFilterOptions();

const ComboBox: FC<Props> = ({
  options,
  label,
  helperText,
  required,
  freeSolo,
  name,
  getOptionLabel = (option) => option,
  index,
  subName,
  disabled,
  onCreate,
  autoFocus,
  onChange,
  loading,
  filterOptions,
  control,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  const { field, fieldState } = useController({ control, name: formName });

  const isLoading = !disabled && (loading || !Array.isArray(options));
  return (
    <Autocomplete
      id={generateSlug(formName)}
      style={{ width: '100%' }}
      {...rest}
      value={field.value || null}
      onChange={(_, value) => {
        onChange && onChange(value);
        if (onCreate && value && value.inputValue) {
          onCreate(value.inputValue);
        } else {
          field.onChange({ target: { value: value || '' } });
        }
      }}
      onInputChange={(_e, value) => {
        if (freeSolo) {
          field.onChange({ target: { value: value || '' } });
        }
      }}
      selectOnFocus
      disabled={disabled}
      freeSolo={freeSolo}
      options={isLoading || !options ? [] : options}
      loading={isLoading}
      filterOptions={
        filterOptions
          ? filterOptions
          : (options, params) => {
              if (freeSolo) {
                params.inputValue = field.value;
              }

              const filtered = filter(options, params);

              if (
                onCreate &&
                filtered.length === 0 &&
                params.inputValue !== ''
              ) {
                filtered.push({
                  inputValue: params.inputValue,
                  inputTitle: `Add "${params.inputValue}"`,
                });
              }

              return filtered;
            }
      }
      getOptionLabel={(option) => option?.inputTitle ?? getOptionLabel(option)}
      renderInput={(params) => (
        <TextField
          {...params}
          autoFocus={autoFocus}
          margin="dense"
          size="small"
          label={label}
          disabled={disabled}
          helperText={
            fieldState.error ? getErrorMessage(fieldState.error) : helperText
          }
          fullWidth
          required={required}
          error={Boolean(fieldState.error)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {isLoading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
};

export default ComboBox;

export interface Props extends InputProps {
  freeSolo?: boolean;
  getOptionLabel?: (option: any) => string;
  options: any[];
  disabled?: boolean;
  onCreate?: (input: string) => void;
  autoFocus?: boolean;
  onChange?: (value?: any) => void;
  loading?: boolean;
  filterOptions?: (options: any[], state: FilterOptionsState<any>) => any[];
}
