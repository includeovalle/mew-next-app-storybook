import React from 'react';
import Image from 'next/image';
import {images} from './image.utils.js';
import styles from './image.module.scss';

interface ImageProps {
  /**
   * What background color to use
   */
  className?: string;
  /**
   * image src
   */
  image?: string;
  /**
   * alt text
   */
  alt?: string;

}

/**
 * Primary UI component for user interaction
 */
export const Images = ({
  className = '',
  image="",
  alt="",
  ...props
}: ImageProps) => {
  //const mode = primary ? styles.primary : styles.secondary;
  //check if classnames are exist in styles object and return the styles[className]
  const localClassName = styles[className] ? styles[className] : '';

  return (
    <section
      className={[localClassName].join(' ')}
      {...props}
    >
      <Image
        alt={alt}
        src={image}
        fill
        sizes="(max-width: 600px) 100vw, 600px"
      />
    </section>
  )
};

//Hero Image uses Images component
export const HeroImage = (props: ImageProps) => {
  const {hero} = images;
  return (
    <Images {...props} image={hero.src} alt="hero index miw " className="heroImage" />
  )
};




