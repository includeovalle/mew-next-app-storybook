import React from 'react';
import { Label } from '../../atoms/label/Label';
import { Password, Email } from '../../atoms/input/Input';
import { INPUTS } from './inputsection.utils';

interface TextInputProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

//Password type function
export const PasswordInput = ({ onChange }: any) => {
  const {loginPass } = INPUTS;
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
export const EmailInput = ({ onChange }: any) => {
  const {loginPass } = INPUTS;
  const { label, placeholder, name, type, className } = loginPass

  return (
    <>
      <Label label={label} className={className}>
        <Email name={name} onChange={onChange} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}

//*************************
//


//export const TextInput = ({label, onChange }: TextInputProps) => {
