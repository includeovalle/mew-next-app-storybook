'use client'
import React from 'react';
import styles from './button.module.scss';
import { ButtonUtils } from './button.utils';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  className?: string;
  /**
   * button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset' | undefined;
  /*
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  type,
  className = '',
  label,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles.primary : styles.secondary;
  //check if classnames are exist in styles object and return the styles[className]
  const localClassName = styles[className] ? styles[className] : '';

  return (
    <button
      className={[mode, localClassName].join(' ')}
      type={type}
      {...props}
    >
      {label}

    </button>
  );
};

//leftBrow extends Button only adds className leftBrow
export const LeftBrow = (props: ButtonProps) => {
  const { LEFT_EYEBROW } = ButtonUtils;
  const { className, } = LEFT_EYEBROW;
  console.log(className)
  return <Button {...props} className={className} />;
};

export const RightBrow = (props: ButtonProps) => {

  const { RIGHT_EYEBROW } = ButtonUtils;
  const { className } = RIGHT_EYEBROW;
  return <Button {...props} className={className}/>;
};

export const Submit = (props: ButtonProps) => {
  return <Button {...props} type="submit" />;
};
