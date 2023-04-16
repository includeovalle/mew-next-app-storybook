"use client";
import { Form } from './components/organisms/form/Form';
//import h1
import { IndexStructure } from './components/atoms/main/Main';
import { HeroImage } from './components/atoms/image/Image';


export default function Home() {
  //<InputSection  primary className={} label name placeholder type />
  //@TODO check on inputSection on change prop

  return (
    <>
      <IndexStructure>
        <HeroImage />
        <Form />
      </IndexStructure>
    </>
  )
}
