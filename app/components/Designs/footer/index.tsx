import React from "react";
import { CustomImage, Footer } from "@/app/components/";
import instagramSrc from "@/public/instagram.png";

const Index = () => {

    return (
        <Footer >
            <CustomImage
                className={'icon'}
                links
                href="https://instagram.com/_soul.tech"
                src={instagramSrc}
                alt="soultech instagram"
                target="_blanc"
            />
        </Footer>
    );
};

export default Index;
