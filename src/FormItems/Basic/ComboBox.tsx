import { generateSlug } from '@inventhora/utils';
import { Autocomplete, Checkbox, CircularProgress } from '@mui/material';
import TextField from '@mui/material/TextField';
import {
  createFilterOptions,
  FilterOptionsState,
} from '@mui/material/useAutocomplete';
import { darken, lighten, styled } from '@mui/system';
import { FC } from 'react';
import { useController } from 'react-hook-form';
import { InputProps } from '../../lib/types';

const GroupHeader = styled('div')(({ theme }) => ({
  position: 'sticky',
  top: '-8px',
  padding: '4px 10px',
  color: theme.palette.primary.main,
  zIndex: 999,
  backgroundColor:
    theme.palette.mode === 'light'
      ? lighten(theme.palette.primary.light, 0.85)
      : darken(theme.palette.primary.main, 0.8),
}));

const GroupItems = styled('ul')({
  padding: 0,
});

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
  multiple,
  readOnly,
  style,
  groupBy,
  isOptionEqualToValue,
  ...rest
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  const { field, fieldState } = useController({ name: formName });
  const isLoading = !disabled && (loading || !Array.isArray(options));

  return (
    <Autocomplete
      multiple={multiple}
      readOnly={readOnly}
      id={generateSlug(formName)}
      style={style ?? { width: '100%' }}
      {...rest}
      value={field.value ? field.value : multiple ? [] : null}
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
      disableCloseOnSelect={multiple}
      disabled={disabled}
      freeSolo={freeSolo}
      options={isLoading || !options ? [] : options}
      loading={isLoading}
      isOptionEqualToValue={isOptionEqualToValue ?? undefined}
      renderOption={
        multiple
          ? (props, option, { selected }) => (
              <li {...props}>
                <Checkbox style={{ marginRight: 8 }} checked={selected} />
                {getOptionLabel(option)}
              </li>
            )
          : undefined
      }
      filterOptions={
        filterOptions
          ? filterOptions
          : (options, params) => {
              if (freeSolo) {
                params.inputValue = field.value ? field.value : '';
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
      groupBy={groupBy}
      getOptionLabel={getOptionLabel}
      renderGroup={(params) => (
        <li>
          <GroupHeader>{params.group}</GroupHeader>
          <GroupItems>{params.children}</GroupItems>
        </li>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          autoFocus={autoFocus}
          margin="dense"
          size="small"
          label={label}
          disabled={disabled}
          helperText={fieldState.error ? fieldState.error?.message : helperText}
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
  getOptionLabel: (option: any) => string;
  options: any[];
  disabled?: boolean;
  onCreate?: (input: string) => void;
  autoFocus?: boolean;
  onChange?: (value?: any) => void;
  loading?: boolean;
  filterOptions?: (options: any[], state: FilterOptionsState<any>) => any[];
  readOnly?: boolean;
  multiple?: boolean;
  groupBy?: (option: any) => string;
  isOptionEqualToValue?: (option: any, value: any) => boolean;
}
