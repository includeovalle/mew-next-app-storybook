import React from 'react';
import { Label, LabelProps } from '../../atoms/label/Label';
import { Input, InputProps, Password, Email } from '../../atoms/input/Input';
import { INPUTS } from './inputsection.utils';

interface TextInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Password type function
export const PasswordInput = ({ onChange }: any) => {
  const { loginPass } = INPUTS;
  const { label, placeholder, name, type, className } = loginPass;

  return (
    <>
      <Label label={label} className={className}>
        <Password onChange={onChange} name={name} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}

//*************************
//Email type function
//*************************

export const EmailInput = ({ onChange }: any) => {
  const { loginEmail } = INPUTS;
  const { label, placeholder, name, type, className } = loginEmail

  return (
    <>
      <Label label={label} className={className}>
        <Email name={name} onChange={onChange} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}

export const RawInput = ({ name, onChange, placeholder, type }: InputProps, { className, label }: LabelProps) => {
  return (
    <>
      <Label label={label} className={className}>
        <Input name={name} onChange={onChange} className={className} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}

