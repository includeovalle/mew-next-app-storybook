import React from 'react';
import { Label } from '../../atoms/label/Label';
import { Password, Email } from '../../atoms/input/Input';
import { PASSWORD_INPUT, EMAIL_INPUT } from './inputsection.utils';


//Password type function
export const PasswordInput = ({ onChange }: any) => {
  const { label, placeholder, name, type, className } = PASSWORD_INPUT;

  return (
    <>
      <Label  label={label} className={className}>
        <Password onChange={onChange} name={name} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}

//*************************

//Email type function
export const EmailInput = ({ onChange }: any) => {
  const { label, placeholder, name, type, className } = EMAIL_INPUT;

  return (
    <>
      <Label  label={label} className={className}>
        <Email name={name} onChange={onChange} placeholder={placeholder} type={type} />
      </Label >
    </>
  )
}


