"use client";
import LoginForm from './components/organisms/form/LoginForm';
import React, { useState } from 'react';
//import h1
import { IndexStructure } from './components/atoms/main/Main';
import { HeroImage } from './components/atoms/image/Image';


export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  //<InputSection  primary className={} label name placeholder type />
  //@TODO check on inputSection on change prop

  return (
    <>
      <IndexStructure>

               
        <HeroImage />
        {
          isLogin ?( <>  <LoginForm setState={setIsLogin} /> </>)
            : <h1>Register</h1>
        }
      </IndexStructure>
    </>
  )
}
