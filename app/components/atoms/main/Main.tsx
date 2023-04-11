import React from 'react';
import styles from './main.module.scss';

interface MainProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * Optional click handler
   */
  children: React.ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Main = ({
  className = '',
  children,
  ...props
}: MainProps) => {
  //const mode = primary ? styles.primary : styles.secondary;
  //check if classnames are exist in styles object and return the styles[className]
  const localClassName = styles[className] ? styles[className] : '';

  return (
    <main
      className={[ localClassName].join(' ')}
      {...props}
    >
      {children}
    </main>
  );
};

//IndexStructure uses Main component
export const IndexStructure = (props: MainProps) => {
  return <Main {...props} className="indexContainer"  />;
};

