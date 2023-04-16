import React from 'react';
import styles from './input.module.scss';

//create interface for input props including optional props and onChange
//onChange is a function that takes a synthetic event as an argument
export interface InputProps {
  primary?: boolean;
  className?: string;
  type?: string;
  placeholder?: string;
  name: string;
  onChange?: (e: any) => void;
}


/**
 * Primary UI component for user interaction
 */
export const Input = ({
  primary = false,
  type,
  className = '',
  name,
  ...props
}: InputProps) => {

  const mode = primary ? styles.primary : styles.secondary;
  //check if classnames are exist in styles object and return the styles[className]
  const localClassName = styles[className] ? styles[className] : styles['default'];

  return (
    <>
      <input
        className={[mode, localClassName].join(' ')}
        type={type}
        name={name}
        {...props}
      />
    </>
  );
};

export const Password = (props: InputProps) => {
  return <Input {...props} type={"password"} />;
};

export const Email = (props: InputProps) => {
  return <Input {...props} type={"email"} />;
};

