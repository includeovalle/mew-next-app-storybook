'use client';
import { Title } from '../../atoms/h1/H1';
import React, { useState } from 'react';
import { FormContainer } from '../../atoms/section/Section';
import {  Login, Register } from '../../molecules/form/';
import { Eyebrows } from '../../molecules/eyebrows/';

/**
 * Primary UI component for user interaction
 */
export const Form = () => {

  const [isLogin, setIsLogin] = useState(true);

  return (
    <FormContainer>
      <Title label="Bienvenido a MIW" />
      <Eyebrows setState={setIsLogin} />
      {isLogin ? <Login /> : <Register />}
    </FormContainer>

  );
};



