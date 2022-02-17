import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import MaskedInput from '../components/MaskedInput';

const CreateUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: '',
    cpf: '',
    surname: '',
    gender: '',
    phone: '',
    address: '',
    observation: '',
    avatarURL: '',
  })

  const handleForm = (event) => {
    const { name, value } = event.target;
    
    console.log(event)

    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleCreateUser = async () => {
    await axios.post(`https://crud-grupo-services.herokuapp.com/users/`, {
      fullName: user.fullName,
      cpf: user.cpf,
      surname: user.surname,
      gender: user.gender,
      phone: user.phone,
      address: user.address,
      observation: user.observation,
      avatarURL: user.avatarURL
    })
    navigate("/")
  }

  return (
    <>
      <Header />
      
        <div className='create-container__header'>
          <h1>CreateUser</h1>
          <Link to="/" className='button'>Volta para página Home</Link>
        </div>

        <div className='create-container'>

          <div className='create-container__line'>
            <label className='create-container__line__label'>Nome completo</label>
            <input type="text" name="fullName" onChange={handleForm} className='create-container__line__input' />
          </div>
          <div className='create-container__line__2'>
            <div>
              <label className='create-container__line__label'>Cpf</label>
              <MaskedInput value={user.cpf} onChange={(event) => setUser({...user, cpf: event.target.value})}/>
            </div>
            <div>
              <label className='create-container__line__label'>Apelido</label>
              <input type="text" name="surname" onChange={handleForm} className='create-container__line__input' />
            </div>
          </div>
          <div className='create-container__line__2'>
            <div>
              <label className='create-container__line__label'>Telefone</label>
              <input type="text" name="phone" onChange={handleForm} className='create-container__line__input' />
            </div>
            <div>
              <label className='create-container__line__label'>Genero</label>
              <select name="gender" onChange={handleForm}>
                  <option value="" default> </option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
            </div>
          </div>
          <div className='create-container__line'>
            <label className='create-container__line__label'>Endereço</label>
            <input type="text" name="address" onChange={handleForm} className='create-container__line__input' />
          </div>
          <div className='create-container__line'>
            <label className='create-container__line__label'>Observação</label>
            <input type="text" name="observation" onChange={handleForm} className='create-container__line__input' />
          </div>
          <div className='create-container__line'>
            <label className='create-container__line__label'>Avatar URL</label>
            <input type="text" name="avatarURL" onChange={handleForm} className='create-container__line__input' />
          </div>
          <div className='create-container__line'>
            <button onClick={handleCreateUser}>Add User</button>
          </div>
        </div>
      
      
    </>
  )
}

export default CreateUser