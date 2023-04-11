import React from 'react';
import styles from './form.module.scss';

interface FormProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * form contents
   */
  children: React.ReactNode;
  // 
  // onSubmit is a submit event handler
            onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

/**
 * Primary UI component for user interaction
 */
export const Form = ({
  className = '',
  children,
  ...props
}: FormProps) => {
  const localClassName = styles[className] ? styles[className] : styles['default'];

  return (
    <form
      className={[localClassName].join(' ')}
      {...props}
    >
      {children}
    </form>
  );
};


