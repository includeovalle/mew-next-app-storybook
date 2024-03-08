import React from "react";
import { Container, CustomImage, Button } from "@/app/components/";
import Luna from "@/public/planets/luna.png";
import Planeta from "@/public/planets/planeta1.png";
import Planeta2 from "@/public/planets/planeta2.png";

const PlanetDrawer = () => {


  const userPlanets = [
    {
      location: "1:16:7",
      name: "Era",
      size: "210,000",
      image: Planeta,
      alt:`planet $name`, //este lo generamos en el back ya nos llega
      moon: {
        monName: "abcdefgh",
        sizeMoon: "73,000",
        image: Luna,
      }
    }
    , {
      location: "1:197:9",
      name: "DOS",
      size: "180,000",
      image: Planeta2,
    }
  ]

  const fleets = [
    {
      rastreadorLigero: 1250,
      rasreadorPesado: 1250,
      acorazado: 1250,
      corbeta: 1250,
    }
  ]


  return (
    <Container className="planet-drawer">
      <Container className="planets">
        <header>
          <h3>Planeta</h3>
          <h3>Luna</h3>
        </header>
          {
            userPlanets.map((planet, index) => (
            <div>
                <CustomImage src={planet.image} alt="alo" className="drawer-icon" key={index} figcaption  ><p>{planet.name}</p></CustomImage>
                {
                  planet.moon &&
                  <CustomImage src={planet.moon.image}className="drawer-icon" figcaption>{planet.moon.monName}</CustomImage>
                }
              {!planet.moon && <p/>}
            </div>
            ))
          }
      </Container>
      <Container className="planet-spect">
        <CustomImage className="planet-card" src={Planeta} figcaption alt="comoe"> 
          <p>Nombre: Era</p>
          <p>Coordenadas: 1:16:7</p>
          <p>Tamaño: 220,000km <span>0/220</span></p>
        </CustomImage  >
        <CustomImage className="moon-card" src={Planeta} figcaption alt="comoe"> alo </CustomImage  >
        <section className="confirmation">
          actualizar
        </section>
      </Container>

    </Container>
  );
};

export default PlanetDrawer;

