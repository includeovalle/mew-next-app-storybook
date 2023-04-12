const classNames = { inputSection: 'inputSection' }

const LOGIN_PASSWORD = {
  className: classNames.inputSection
  , label: 'Contraseña:'
  , placeholder: 'Ingresa tu password'
  , type: 'password'
  , name: 'password'
}

const LOGIN_EMAIL = {
  className: classNames.inputSection
  , label: 'Correo electrónico:'
  , placeholder: 'Ingresa tu correo electrónico'
  , type: 'email'
  , name: 'email'
}

export const INPUTS = {loginEmail: LOGIN_EMAIL, loginPass:LOGIN_PASSWORD} 
