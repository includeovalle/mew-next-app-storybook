import React from "react";
import { LeftMenu } from "@/app/components/Designs/";
import { InnerContainer, Container, CustomImage } from "@/app/components/";

const Index = () => {

  return (
    <InnerContainer>
      <LeftMenu />
      <Container className="vision-general">
        <Container className="movimiento-flotas">
          <div><p> Una flota procedente de 3:18 se dirige a planeta: 5.11</p></div>
        </Container>
        <Container className="lista_planetas">
          <div>
            <CustomImage figcaption > alo </CustomImage  >
          </div>
          <div>
            <div>luni</div>
          </div>
        </Container>
        <Container className="info_planetas">
          <div>
            foto aca
          </div>

        </Container>
      </Container>

    </InnerContainer>
  );
};

export default Index;

