import React from "react";
import { LeftMenu } from "@/app/components/Designs/";
import { InnerContainer, Container, CustomImage, PlanetDrawer } from "@/app/components/";

const Index = () => {

  return (
    <InnerContainer>
      <LeftMenu />
      <Container className="vision-general">
        <Container className="movimiento-flotas">
          <div><p> Una flota procedente de 3:18 se dirige a planeta: 5.11</p></div>
        </Container>
        <PlanetDrawer />
    </Container>

    </InnerContainer >
  );
};

export default Index;

