import React, { useState, } from "react";
import Input from "../Input";

const Register = ({openModal, closeModal, email, setEmail, password, setPassword, passwordConfirm,setPasswordConfirm, expression}) => {

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

  const validateField = () => {
    if(password.input.length > 0){
      if (password.input !== passwordConfirm.input) {
        console.log("contraseña NO iguales");
        setPasswordConfirm((prevState)=>{
          return {...prevState, valid: false}
        })
      } else {
        setPasswordConfirm((prevState)=>{
          return {...prevState, valid: true}
        })

      }
    }
  }

  return ( 
    <div className='container'>
      <header className='header'>
        <h2>Crea una cuenta</h2>
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
        <Input
          type={`${showPassword}`}
          placeholder='Tu contraseña'
          field={password} 
          setField={setPassword}
          messageError='Usa al menos 5 caractéres entre ellos debe contener una mayuscula, minuscula y un numero'
          expression={expression.password}
        />
        <Input
          type={`${showPassword}`}
          placeholder='Repite tu contraseña'
          field={passwordConfirm}
          setField={setPasswordConfirm}
          messageError='Necesitas confirmar tu contraseña y debe ser la misma que la anterior'
          functionValidate={validateField}
        />

        {/* <div className='form-control'>
          <input type={`${showPassword}`} placeholder='Repite tu contraseña' />
          <i className='fas fa-check-circle'></i>
          <i className="fas fa-times-circle"></i>
          <small>Error message</small>
          <small>Necesitas confirmar tu contraseña</small>
        </div> */}

        <button type='submit'>Crear una cuenta</button>

        <footer>
          ¿Ya tienes cuenta? <a href="#" onClick={handleBackCreateUser}>Inicia sesión</a>
        </footer>
      </form>
    </div>
  )
};

export default Register;