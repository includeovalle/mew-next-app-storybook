import React from "react";
import { Header, CustomImage, Navbar, Container } from '@/app/components/';
import logo from '@/public/logo.png';

const Index = () => {

    const webMenu = [
    ]
    const mobileMenu = [
    ]

    const href = "/";
    const alt = "mew game logo";

    return (

        <Header className='header' >
            <CustomImage links href={href} className={'logo'} src={logo} alt={alt} />
            <Container className="UserMenu">
                <Container className="recursos">
        <div>100000000</div>
        <div>100000000</div>
        <div>100000000</div>
        <div>100000000</div>
                </Container >
                <Container className="configuracion-usuario">
                    user config
                </Container >
                <Container className="global-menu">
                    global
                </Container >
            </Container >

        </Header>
    );
};

export default Index;
