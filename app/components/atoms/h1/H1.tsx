import { Stick_No_Bills } from 'next/font/google'
import React from 'react';
import styles from './h1.module.scss';

const stick_no_bills = Stick_No_Bills({
  subsets: ['latin'],
  variable: '--font-roboto-slab',
  weight: '400',
  display: 'swap',
});

interface LabelProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * h1 contents
   */
  label: string;
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const H1 = ({
  className = '',
  label,
  children,
  ...props
}: LabelProps) => {
  const localClassName = styles[className] ? styles[className] :styles['default'];

  return (
    <h1 className={[localClassName,stick_no_bills.className].join(' ')} {...props} >
      {label}
      {children}
    </h1>
  );
};



export const Title = (props: LabelProps) => {
  return <H1 {...props} className={"title"} />;
};
