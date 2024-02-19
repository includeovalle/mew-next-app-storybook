import { Header, CustomImage, Navbar } from '@/app/components/';
import logo from '@/public/logo.png';
import React from "react";

const Index = () => {

    const webMenu = [
        ]
    const mobileMenu = [
]

    const href =  "/";
    const alt =  "soultech inicio";

    return (

        <Header className={'header__two-items'} >
            <CustomImage links href={href} className={'logo'} src={logo} alt={alt} />
        </Header>
    );
};

export default Index;
