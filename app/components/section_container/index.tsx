import React from 'react';
import styles from "./index.module.scss";
interface Props {
    children?: React.ReactNode;
    className?: string;
    main?: boolean;
}
const Index = ({ children, className, main = false }: Props) => {
    const propStyle = className ? styles[className] : styles['default'];
    return (
        <>

            {main &&
                <main className={propStyle}>
                    {children}
                </main>
            }

            {
                !main &&
                <section className={propStyle}>
                    {children}
                </section>
            }
        </>
    );
};


export function LeftContainer({ children, className="left-container", main = false }: Props) {
    return (
        <Index main={main} className={className}>
            {children}
        </Index>
    );
}

export function MainContainer({ children, className, main = true }: Props) {
    return (
        <Index main={main} className={className}>
            {children}
        </Index>
    );
}


export function InnerContainer({ children, main = false, className="inner-container" }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function CardContainer({ children, main = false, className='card' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}


export function VisionContainer({ children, main = false, className='vision-general' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}



export default Index;
