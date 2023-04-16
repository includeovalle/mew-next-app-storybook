import React from 'react';
import styles from './section.module.scss';

interface SectionProps {
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
export const Section = ({
  className = '',
  children,
  ...props
}: SectionProps) => {
  //const mode = primary ? styles.primary : styles.secondary;
  //check if classnames are exist in styles object and return the styles[className]
  const localClassName = styles[className] ? styles[className] : '';

  return (
    <section
      className={[ localClassName].join(' ')}
      {...props}
    >
      {children}
    </section>
  );
};

//leftBrow extends section only adds className leftBrow
export const EyebrowContainer = (props: SectionProps) => {
  return <Section {...props} className="eyebrowContainer"  />;
};

export const FormContainer = (props: SectionProps) => {
  return <Section {...props} className="formContainer"  />;
};
