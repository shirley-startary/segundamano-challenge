import React, { useState } from 'react';


const Input = ({type, placeholder, messageError, field ,setField, expression, functionValidate}) => {

  const onChange = (e) => {
    setField({...field, input:e.target.value})
  }

  const validation = (event) => {
    console.log(event.type,field , expression);
    if(event.type==='focus' || event.type === 'keyup'){
      setField({...field, valid:null})
    }
    if(expression) {
      if(expression.test(field.input)){
        setField({...field, valid:true})
      } else if (event.type==='focus' || event.type==='keyup'){
        setField({...field, valid:null})
      }else  {
        setField({...field, valid:false})
      }
    }
     
    if (functionValidate){
      functionValidate()
    }
  }


  return (
    <div className={`form-control ${field.valid === true && 'success' } ${field.valid === false && 'error' }`}>
      <input 
        type={type} 
        placeholder={placeholder}
        value={field.input} onChange={onChange}
        onKeyUpCapture={validation}
        onFocus={validation}
        onBlur={validation}
        />
      <i className='fas fa-check-circle'></i>
      <i className="fas fa-times-circle"></i>
      <small>{messageError}</small>
    </div>
  )
};

export default Input