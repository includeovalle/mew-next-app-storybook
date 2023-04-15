import React from 'react';
import styles from './ul.module.scss';

interface UlProps {
  className?: string;
  list: string[];
}

/**
 * Primary UI component for user interaction
 */
export const Ul = ({
  className = '',
  list,
  ...props
}: UlProps) => {
  const localClassName = styles[className] ? styles[className] : styles['default'];

  return (
    <ul
      className={[styles['default'], localClassName].join(' ')}
      {...props}
    >
      {
        list.map((item, index) => (
          <li key={index}>{item}</li>
        ))
      }
    </ul>
  );
};


