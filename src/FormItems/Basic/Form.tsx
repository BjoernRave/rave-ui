import styled from '@emotion/styled';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { ZodSchema } from 'zod';

const StyledForm = styled.form`
  > *:not(label) {
    margin: 8px 0;
  }

  > button {
    margin: 20px 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Form: FC<Props> = ({
  defaultValues,
  children,
  onSubmit,
  schema,
  className,
}) => {
  const methods = useForm({ defaultValues, resolver: zodResolver(schema) });
  const { handleSubmit } = methods;

  return (
    <StyledForm className={className} onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, (child) => {
        return child.props.name
          ? React.createElement(child.type, {
              ...{
                ...child.props,
                register: methods.register,
                control: methods.control,
                key: child.props.name,
              },
            })
          : child;
      })}
    </StyledForm>
  );
};

export default Form;

interface Props {
  schema: ZodSchema;
  defaultValues: Record<string, any>;
  onSubmit: (data: Record<string, any>) => void;
  children: any;
  className?: string;
}
