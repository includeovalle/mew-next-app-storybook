const TYPE = ['submit', 'button', 'reset']

 const RIGHT_EYEBROW = {
  className: 'rightBrow'
  , label: 'Registrarse'
  , type: TYPE[1]
}

 const LEFT_EYEBROW = {
  className: 'leftBrow'
  , label: 'Entrar'
  , type: TYPE[1]
}


 const SUBMIT = {
  className: 'submit'
  , label: 'Entrar'
  , type: TYPE[0]
}


//transformar en un objeto de objetos
export const ButtonUtils = { RIGHT_EYEBROW, LEFT_EYEBROW, SUBMIT };

