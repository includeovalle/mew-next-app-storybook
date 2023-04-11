import React from 'react';
import styles from './input.module.scss';

interface InputProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  className?: string;
  /**
   * input type
   * @default 'input'
   */
  type?: string;
  /*
   * input placeholder
   */
  placeholder?: string;
  /**
   * input label
  **/
  name: string;
   /* Optional click handler
   */
  onClick?: () => void;
   /* Optional onChange handler
   */
  onChange?: () => void;
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
  return <Input {...props} type={"password"}/>;
};

export const Email = (props: InputProps) => {
  return <Input {...props} type={"email"}/>;
};

