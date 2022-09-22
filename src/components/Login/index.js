import React, { useState } from 'react';
import Input from '../Input';
import './Login.css';

const Login = ({openModal, closeModal, email, setEmail, expression}) => {

  const [isShow, setIsShow] = useState(false)
  const [showPassword, setShowPassword] =useState('password')

  const handleShowPassword = (event) => {
    const activeShowPass = event.target.innerHTML;
    setIsShow(!isShow)
    if(activeShowPass==='Mostrar'){
      setShowPassword('text')
    }
    if(activeShowPass==='Ocultar') {
      setShowPassword('password')
    }
  }

  const handleBackCreateUser = () => {
    openModal()
    closeModal()
  }

  return (
    <div className='container'>
      <header className='header'>
        <h2>Inicia sesión</h2>
      </header>
      <form>

        <Input
          type='email'
          placeholder='Tu correo electrónico'
          field={email} 
          setField={setEmail}
          messageError='Usa el formato de email correcto ejemplo@hola.come'
          expression={expression.email}
        />

        <div className='form-control'>
          <input type={`${showPassword}`} placeholder='Tu contraseña' />
          <span onClick={handleShowPassword} className={`form-show ${!isShow && 'show'}`}>Mostrar</span>
          <span onClick={handleShowPassword} className={`form-show ${isShow && 'show'}`}>Ocultar</span>
          <small>Verifica tus datos y vuelve a intentarlo.</small>
        </div>

        <button type='submit'>Entra</button>

        <footer>
          ¿No tienes cuenta? <a href="/#" onClick={handleBackCreateUser}> Crea una nueva</a>
        </footer>
      </form>
    </div>
  );
}

export default Login;
