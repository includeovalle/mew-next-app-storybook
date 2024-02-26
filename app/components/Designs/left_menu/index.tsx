'use client'
import React, { useEffect,  useState } from "react";
import { LeftContainer, Button, Ul } from "@/app/components/";

const Index = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentRoute, setCurrentRoute] = useState('');

  const menu = ['planeta', 'edificios', 'hangar', 'flota', 'defensas', 'investigación', 'foro', 'estadísticas', 'chat', 'Salir']

  
  useEffect(()=>{
    let currentWindowSize = window.innerWidth;
    setCurrentRoute(window.location.pathname.split('/')[1]);

    if(currentWindowSize > 768){
      setIsMenuOpen(true);
    }
  },[currentRoute, isMenuOpen]);

  return (
    <LeftContainer className={isMenuOpen ? "left-container_active" : "left-container"} >
      <Button className={isMenuOpen?"circle_active":"circle" }onClick={() => setIsMenuOpen(!isMenuOpen)}  >
        {currentRoute}
      </Button>
      {isMenuOpen &&
        <Ul links nav onClick={() => setIsMenuOpen(!isMenuOpen)} lis={menu} exact className={'two-columns'} />
      }
    </LeftContainer>
  );
};

export default Index;

