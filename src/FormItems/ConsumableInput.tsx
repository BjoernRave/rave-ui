import styled from '@emotion/styled';
import { generateSlug, getObjectKeyByString } from '@inventhora/utils';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  FormControl,
  FormHelperText,
  FormLabel,
} from '@mui/material';
import { FC, useState } from 'react';
import { useController } from 'react-hook-form';
import { InputProps } from '../lib/types';
import Table from '../Table';

const AccordionsWrapper = styled.div`
  margin: 10px 0;
`;

const SelectedValue = styled.span`
  margin: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OptionTitle = styled.span<{ error: boolean }>`
  font-size: 18px;
  font-weight: bold;
  color: ${({ error }) => error && '#f44336'};
`;

const StyledContent = styled(AccordionSummary)`
  .MuiAccordionSummary-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const ConsumableInput: FC<Props> = ({
  options,
  label,
  name,
  subName,
  index,
  helperText,
  required,
  columns,
  control,
}) => {
  const formName =
    typeof index === 'number' && subName
      ? `${name}[${index}].${subName}`
      : name;

  const [expanded, setExpanded] = useState(options.map((v, ind) => ind === 0));
  const { field, fieldState } = useController({ control, name: formName });

  return (
    <FormControl
      error={Boolean(fieldState.error)}
      required={required}
      style={{ width: '100%' }}
    >
      <FormLabel htmlFor={generateSlug(name)}>{label}</FormLabel>
      <AccordionsWrapper id={generateSlug(name)}>
        {options.map((option, ind) => {
          const currentValue = field.value.find((value) =>
            option.options.some((o) => o.id === value.inventoryId)
          );
          return (
            <Accordion
              key={ind}
              expanded={expanded[ind]}
              onChange={() => {
                const newArray = Array.from(expanded);

                newArray[ind] = !newArray[ind];

                setExpanded(newArray);
              }}
            >
              <StyledContent expandIcon={<ExpandMoreIcon />}>
                <OptionTitle
                  error={
                    Boolean(fieldState.error) && Boolean(fieldState.error[ind])
                  }
                >
                  {option.title}
                </OptionTitle>
                <div style={{ display: 'flex' }}>
                  {Boolean(currentValue) &&
                    columns.map((column) => (
                      <SelectedValue>
                        <span style={{ fontWeight: 'bold', marginBottom: 10 }}>
                          {column.Header}
                        </span>
                        {typeof column.accessor === 'string'
                          ? getObjectKeyByString(currentValue, column.accessor)
                          : column.accessor(currentValue)}
                      </SelectedValue>
                    ))}
                </div>
                {Boolean(fieldState.error) &&
                  Boolean(fieldState.error[ind]) && (
                    <span style={{ color: '#f44336' }}>
                      {fieldState.error[ind]}
                    </span>
                  )}
                <div />
              </StyledContent>
              <AccordionDetails>
                <Table
                  style={{ margin: '10px 0' }}
                  maxHeight={400}
                  onRowClick={(row: any) => {
                    if (Boolean(currentValue)) {
                      const newValueArray = Array.from(field.value);

                      newValueArray.splice(
                        newValueArray.findIndex((val) =>
                          Boolean(
                            option.options.find(
                              (o) => o.id === (val as any).inventoryId
                            )
                          )
                        ),
                        1
                      );

                      field.onChange({
                        target: {
                          value: [
                            ...newValueArray,
                            {
                              inventoryId: row.original.id,
                              amount: option.amount,
                              product: row.original.product,
                            },
                          ],
                        },
                      });
                    } else {
                      field.onChange({
                        target: {
                          value: [
                            ...field.value,
                            {
                              inventoryId: row.original.id,
                              amount: option.amount,
                              product: row.original.product,
                            },
                          ],
                        },
                      });
                    }

                    const newArray = Array.from(expanded);

                    newArray[ind] = false;

                    if (newArray.length > ind + 1) {
                      newArray[ind + 1] = true;
                    }
                    setExpanded(newArray);
                  }}
                  data={option.options}
                  columns={columns}
                />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </AccordionsWrapper>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default ConsumableInput;

interface Props extends InputProps {
  columns: { accessor: any; Header: string }[];
  options: {
    title: string;
    amount: number;
    options: any[];
  }[];
}
