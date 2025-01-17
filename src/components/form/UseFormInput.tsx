import React, { FC } from 'react';

//@3rd Party
import { UseFormReturn } from 'react-hook-form';
import {
  IRadioForm,
  ITextFieldForm,
  TSchema,
} from './type';
//----------------------------------------------------------------------------------------------

// @Components
import  UFTextField  from './components/UFTextField';
import  UFRadio  from './components/UFRadio';
import { TextFieldProps } from '@mui/material/TextField';

//---------------------------------------------------------------------------------------------------------

type IUseFormInputProps = TSchema & {
  form: UseFormReturn<any>;
  error?: any;
  inputVariants?: TextFieldProps['variant'];
};

const UseFormInput: FC<IUseFormInputProps> = ({
  form,
  error,
  inputVariants,
  type,
  ...inputFormProps
}) => {
  switch (type) {

    case 'radio':
      return (
        <UFRadio
          {...(inputFormProps as IRadioForm)}
          form={form}
          error={error}
          variant={inputFormProps.variant ?? inputVariants}
        />
      );

    default:
      return (
        <UFTextField
          {...(inputFormProps as ITextFieldForm)}
          form={form}
          error={error}
          variant={inputFormProps.variant ?? inputVariants}
          type={type}
        />
      );
  }
};

export default UseFormInput;
