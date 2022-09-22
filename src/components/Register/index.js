import React from "react";
import Input from "../Input";

const Register = ({openModal, closeModal, email, setEmail, password, setPassword, passwordConfirm,setPasswordConfirm, expression}) => {

  const handleBackCreateUser = () => {
    openModal()
    closeModal()
  }

  const validateField = () => {
    if(password.input.length > 0){
      if (password.input !== passwordConfirm.input) {
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
          type="password"
          placeholder='Tu contraseña'
          field={password} 
          setField={setPassword}
          messageError='Usa al menos 5 caractéres entre ellos debe contener una mayuscula, minuscula y un numero'
          expression={expression.password}
        />
        <Input
          type="password"
          placeholder='Repite tu contraseña'
          field={passwordConfirm}
          setField={setPasswordConfirm}
          messageError='Necesitas confirmar tu contraseña y debe ser la misma que la anterior'
          functionValidate={validateField}
        />

        <button type='submit'>Crear una cuenta</button>

        <footer>
          ¿Ya tienes cuenta? <a href="/#" onClick={handleBackCreateUser}>Inicia sesión</a>
        </footer>
      </form>
    </div>
  )
};

export default Register;