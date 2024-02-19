import React from 'react';
import styles from "./index.module.scss";
import { ButtonInterface } from '@/app/types';

const Index = ({ className, type, children, onClick, autoFocus }: ButtonInterface) => {

    const propStyle = className ? styles[className] : styles['default'];
    return (
        <button className={propStyle} type={type} onClick={onClick} autoFocus={autoFocus}>
            {children}
        </button>
    );
};

const Spans = () => {
    return (
        <>
            <span></span>
            <span></span>
        </>
    )
}

interface CloseButtonInterface extends ButtonInterface {
    closeBtn?: JSX.Element
}

export const closeButton = ({ onClick, className, closeBtn, autoFocus }: CloseButtonInterface) => {

    const closeBtnDefault = closeBtn ? closeBtn : <Spans />;

    return (
        <Index type={'button'} className={className} onClick={onClick} autoFocus={autoFocus}>
            {closeBtnDefault}
        </Index>
    )
};

export default Index;
