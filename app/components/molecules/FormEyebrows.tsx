import React from 'react';
import { EyebrowContainer } from '../atoms/section/Section';
import { RightBrow, LeftBrow } from '../atoms/button/Button';

interface FormEyebrowsProps {

  /**
   * custom state
//setState is a react hook that sets the state of the component
   */
  setState: (state: boolean) => void;
}

const FormEyebrows = ({setState}: FormEyebrowsProps) => {
  return(
      <>
        <EyebrowContainer>
          <LeftBrow type="button" label = "testo" onClick={() => setState(true)} />
          <RightBrow type="button" label = "testo" onClick={() => setState(true)}/>
        </EyebrowContainer>
        </>
      )
}

export default FormEyebrows;
