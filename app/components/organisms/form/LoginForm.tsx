import { Title } from '/app/components/atoms/h1/H1';
import FormEyebrows from '/app/components/molecules/form/FormEyebrows';
import { Form } from '/app/components/atoms/form/Form';
import { PasswordInput, EmailInput } from '/app/components/molecules/inputsection/InputSection';
import { Submit } from '../../atoms/button/Button';
import React, { useState } from 'react';

interface SetStateProps{

  /**
   * custom state
   */
  setState: (state: boolean) => void;
}

const LoginForm = ({ setState }:SetStateProps) => {
  const [data, setData] = useState({ password: '' });

  //e is an javascript event whichh is a synthetic event with name and value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log({ data })
  };

  //e is an javascript event which is a synthetic event that handle submit data
  const SubmitHandler = (e: any) => {
    e.preventDefault();
    console.log('submit', data)
  };

  return (
    <>
    <Form onSubmit={(e:any) => SubmitHandler(e)}>
        <Title label="Bienvenido a MIW" />
        <FormEyebrows setState={setState} />
        <EmailInput onChange={(e:any) => handleChange(e)} />
        <PasswordInput onChange={(e:any) => handleChange(e)} />
        <Submit label="submitear" type="submit" />
      </Form>
    </>

  )
}
export default LoginForm;
