import React from 'react';
import styles from './label.module.scss';

export interface LabelProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * Label contents
   */
  label: string;
  children?: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Label = ({
  className = '',
  label,
  children,
  ...props
}: LabelProps) => {
  const localClassName = styles[className] ? styles[className] :styles['default'];

  return (
    <label
      className={[localClassName].join(' ')}
      {...props}
    >
      {label}
      {children}
    </label>
  );
};


