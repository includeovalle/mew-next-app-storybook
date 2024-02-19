'use client'
import React, { useState } from "react";
import { LeftContainer, Button, Ul } from "@/app/components/";

const Index = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menu = ['vision-general', 'alianza', 'edificios', 'hangar', 'flota', 'defensas', 'investigacion', 'galaxia', 'foro', 'estadisticas', 'chat', 'opciones', 'Salir']

  return (
    <LeftContainer className={isMenuOpen ? "left-container_active" : "left-container"} >
      <Button onClick={() => setIsMenuOpen(!isMenuOpen)} className="circle">
        alo
      </Button>
      {isMenuOpen &&
        <Ul links onClick={() => setIsMenuOpen(!isMenuOpen)} lis={menu} exact className={'two-columns'} />
      }
    </LeftContainer>
  );
};

export default Index;

