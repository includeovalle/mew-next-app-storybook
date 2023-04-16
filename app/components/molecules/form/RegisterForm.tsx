import { Form } from '../../atoms/form/Form';
import { RawInput, PasswordInput, EmailInput } from '../../molecules/inputsection/';
import { Submit } from '../../atoms/button/Button';
import React, { useState } from 'react';
import { REGISTER_FORM } from './register.utils';

const { username } = REGISTER_FORM;
const { name, label, type, placeholder, className } = username;

const RegisterForm = () => {
  const [data, setData] = useState({});

  //e is an javascript event whichh is a synthetic event with name and value
  const handleChange = (e: any) => {
    const temp = e.target;
    setData({ ...data, [temp.name]: temp.value });
  };

  const SubmitHandler = (e: any) => {
    e.preventDefault();
    console.log('/app/components/molecules/form/RegisterForm.tsx', data)
  };

  return (
    <>
      <Form onSubmit={(e: any) => SubmitHandler(e)}>
        <PasswordInput onChange={(e: any) => handleChange(e)} />
      <RawInput onChange={(e:any) => {handleChange(e)}} className={className} name={name} label={label} type={type} placeholder={placeholder} />
        <EmailInput onChange={(e: any) => handleChange(e)} />
        <Submit label="submitear" type="submit" />
      </Form>
    </>

  )
}
export default RegisterForm;
