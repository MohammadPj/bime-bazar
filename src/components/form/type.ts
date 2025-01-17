import { GridProps } from '@mui/material/Grid';
import React, { ReactNode } from 'react';
import { RegisterOptions } from 'react-hook-form';
import { TypographyProps } from '@mui/material/Typography';
import { TextFieldProps } from '@mui/material/TextField';
import { RadioProps } from '@mui/material/Radio';
import {RadioGroupProps} from "@mui/material";
import {FormControlLabelProps} from "@mui/material/FormControlLabel";

export interface IFormOption {
  value: string | number;
  label: string;
  labelProp?: any;
  disabled?: boolean;
}

export interface IBaseForm {
  name: string;
  label: React.ReactNode;
  rules?: RegisterOptions;
  defaultValue?: any;
  placeholder?: string;
  gridItemProp?: GridProps;
  labelProps?: Partial<TypographyProps<any>> | undefined;
  helperText?: string;
  withoutHelperText?: boolean;
  variant?: 'outlined' | 'filled' | 'standard';
  inputLabelMode?: TInputLabelMode;
  disabled?: boolean
  readonly?: boolean
}

export interface IRadioForm extends IBaseForm {
  type?: 'radio';
  radioProps?: RadioProps;
  radioGroupProps?: Partial<RadioGroupProps>
  formControlLabelProps?: Partial<FormControlLabelProps>
  options?: IFormOption[];
  itemProps?: RadioProps;
}

export interface ITextFieldForm extends IBaseForm {
  type?: 'text' | 'email' | 'password' | 'phone' | 'number';
  props?: Partial<TextFieldProps>;
  itemProps?: Partial<TextFieldProps>;
  startIcon?: ReactNode;
  endIcon?: ReactNode
}

export type TSchema =
  | ITextFieldForm
  | IRadioForm

export type TFormSchema = TSchema[]

export type TFormTheme = {
  text?: Partial<TextFieldProps>;
  email?: Partial<TextFieldProps>;
  password?:Partial<TextFieldProps>;
  phone?: Partial<TextFieldProps>;
  number?: Partial<TextFieldProps>;
  radio?: {
    radioProps?: Partial<RadioProps>;
    radioGroupProps?: Partial<RadioGroupProps>
    formControlLabelProps?: Partial<FormControlLabelProps>
  }
}

export type TInputLabelMode = 'static' | 'relative';
