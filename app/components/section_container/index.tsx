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


export function MainContainer({ children, className, main = true }: Props) {
    return (
        <Index main={main} className={className}>
            {children}
        </Index>
    );
}


export function InnerContainer({ children, main = false, className }: Props) {
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

export function KeymapContainer({ children, main = false, className='keymap' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function ParagraphContainer({ children, main = false, className='paragraph' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
    );
}

export function RowContainer({ children, main = false, className='row-container' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
        );
}

export function ColContainer({ children, main = false, className='col-container' }: Props) {
    return (
        <Index className={className} main={main}>
            {children}
        </Index>
        );
}

export default Index;
