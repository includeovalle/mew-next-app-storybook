import React from 'react';
import { EyebrowContainer } from '../../atoms/section/Section';
import { RightBrow, LeftBrow } from '../../atoms/button/Button';
import { FORM_EYEBROWS } from './form.utils';

interface FormEyebrowsProps {

  /**
   * custom state
//setState is a react hook that sets the state of the component
   */
  setState: (state: boolean) => void;
}

const FormEyebrows = ({ setState }: FormEyebrowsProps) => {
  const { left, right } = FORM_EYEBROWS;

  return (
    <>
      <EyebrowContainer>
        <LeftBrow type={left.type} label={left.label} onClick={() => setState(true)} />
        <RightBrow type={right.type} label={right.label} onClick={() => setState(false)} />
      </EyebrowContainer>
    </>
  )
}

export default FormEyebrows;
