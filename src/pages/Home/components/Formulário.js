import React from 'react'
import {useForm} from 'react-hook-form'

function Formulario(){
  const{register} = useForm();

  const onSubmit = data =>{
    console.log(data)
  }

  return(
    <form>
      <input
        type="text"
        placeholder="Nome"
        name="name"
        ref={register({required:true, minLength:8})}
      />
       <input type="text" placeholder="Email" name="email" ref={register}/>
      <input type="submit"/>
    </form>
  )
}

export default Formulario;