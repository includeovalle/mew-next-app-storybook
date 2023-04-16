import { Form } from '../../atoms/form/Form';
import { PasswordInput, EmailInput } from '../../molecules/inputsection/';
import { Submit } from '../../atoms/button/Button';
import React, { useState } from 'react';

const LoginForm = () => {
  const [data, setData] = useState({});

  //e is an javascript event whichh is a synthetic event with name and value
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const temp = e.target;
    setData({ ...data, [temp.name]: temp.value });
  };

  const SubmitHandler = (e: any) => {
    e.preventDefault();
    console.log('/app/components/molecules/form/LoginForm.tsx', data)
  };

  return (
    <>
    <Form onSubmit={(e:any) => SubmitHandler(e)}>
        <EmailInput onChange={(e:any) => handleChange(e)} />
        <PasswordInput onChange={(e:any) => handleChange(e)} />
        <Submit label="submitear" type="submit" />
      </Form>
    </>

  )
}
export default LoginForm;
