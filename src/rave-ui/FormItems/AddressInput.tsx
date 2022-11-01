import styled from '@emotion/styled';
import { countries as countryJSON } from '@inventhora/json-data';
import { Tab, Tabs } from '@mui/material';
import { FC, useState } from 'react';
import { useLocale } from '../AppWrapper';
import { SameLine } from '../lib/styles';
import ComboBox from './Basic/ComboBox';
import TextInput from './Basic/TextInput';

const countries = countryJSON.countries;

const Wrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;

  > *:not(label) {
    margin: 8px 0;
  }
`;

const ZipInput = styled(TextInput)`
  width: 30% !important;

  @media (max-width: 767px) {
    width: 100% !important;
  }
`;

const AddressInput: FC<Props> = ({ withBilling = true }) => {
  const { locales } = useLocale();
  const [currentPage, setCurrentPage] = useState(0);

  if (!withBilling) {
    return (
      <Wrapper>
        <TextInput name="address1" label={locales.address1} />
        <TextInput name="address2" label={locales.address2} />
        <SameLine>
          <TextInput name="city" label={locales.city} />
          <ZipInput name="zip" label={locales.zip} />
        </SameLine>
        <SameLine>
          <TextInput name="state" label={locales.state} />
          <ComboBox
            label={locales.country}
            options={countries.map((c) => c[1])}
            getOptionLabel={(c) =>
              countries.find(
                (innerC) => innerC[1] === c.toLowerCase()
              )[0] as string
            }
            name="countryCode"
          />
        </SameLine>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Tabs
        style={{ width: '100%', marginBottom: 10 }}
        variant="fullWidth"
        value={currentPage}
        onChange={(_, value) => setCurrentPage(value)}
      >
        <Tab label={locales.address} value={0} />
        <Tab label={locales.billingAddress} value={1} />
      </Tabs>
      {currentPage === 0 && (
        <>
          <TextInput name="address1" label={locales.address1} />
          <TextInput name="address2" label={locales.address2} />
          <SameLine>
            <TextInput name="city" label={locales.city} />
            <ZipInput name="zip" label={locales.zip} />
          </SameLine>
          <SameLine>
            <TextInput name="state" label={locales.state} />
            <ComboBox
              label={locales.country}
              options={countries.map((c) => c[1])}
              getOptionLabel={(c) =>
                countries.find(
                  (innerC) => innerC[1] === c.toLowerCase()
                )[0] as string
              }
              name="countryCode"
            />
          </SameLine>
        </>
      )}
      {currentPage === 1 && (
        <>
          <TextInput name="billingAddressLine1" label={locales.address1} />
          <TextInput name="billingAddressLine2" label={locales.address2} />
          <SameLine>
            <TextInput name="billingCity" label={locales.city} />
            <ZipInput name="billingZip" label={locales.zip} />
          </SameLine>
          <SameLine>
            <TextInput name="billingState" label={locales.state} />
            <ComboBox
              name="billingCountryCode"
              label={locales.country}
              options={countries.map((c) => c[1])}
              getOptionLabel={(c) =>
                countries.find(
                  (innerC) => innerC[1] === c.toLowerCase()
                )[0] as string
              }
            />
          </SameLine>
        </>
      )}
    </Wrapper>
  );
};

export default AddressInput;

export interface Props {
  withBilling?: boolean;
}
