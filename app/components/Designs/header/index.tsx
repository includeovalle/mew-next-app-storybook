import { Header, CustomImage, Navbar } from '@/app/components/';
import logo from '@/public/logo.png';
import React from "react";

const Index = () => {

    const webMenu = ['nosotros', 'servicios', 'contacto']
    const mobileMenu = ['inicio', 'nosotros', 'servicios', 'contacto']

    const href =  "/";
    const alt =  "soultech inicio";

    return (

        <Header className={'header__two-items'} >
            <CustomImage links href={href} className={'logo'} src={logo} alt={alt} />
            <Navbar exact links lis={webMenu} otherLis={mobileMenu} />
        </Header>
    );
};

export default Index;
