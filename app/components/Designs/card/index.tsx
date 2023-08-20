import React from "react";
import { Card } from "@/app/components/";
import cardImage from "@/public/card.png";

const Index = () => {
    return (
            <Card className={'card'} src={cardImage} alt={"filosofia soultech"}>
                nosotros facilitamos el acceso a experiencias digitales.
                <br />
                <br />
                Nuestros productos son creados a la medida de las necesidades de nuestros clientes.
            </Card>
    );
};

export default Index;

