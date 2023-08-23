"use client"
import { Form, ColLabel } from "@/app/components/"
import React, { useEffect } from "react";

const Index = () => {

  //useRef form html
  const formRef = React.useRef(null);

  const RegisterSubit = async (e) => {
    e.preventDefault();
    const formData = formRef.current;
    const name = formData.nombre.value;
    const password = formData.contra.value;
    const stringData = JSON.stringify({ name, password });
    const response = await fetch("/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: stringData,
    });

    console.log("response", response.ok);
  }

  return (
    <>
      <Form ref={formRef} onSubmit={e => RegisterSubit(e)} buttonText="registrar">
        <ColLabel className={"contacto"} type="text" name="nombre" placeholder={"nombre"}>
          Ingese su nombre
        </ColLabel>
        <ColLabel className={"contacto"} type="password" name="contra" placeholder={"password"}>
          Ingrese su password
        </ColLabel>
      </Form >
    </>
  );
};

export default Index;

