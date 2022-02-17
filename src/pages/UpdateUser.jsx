import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

import Header from '../components/Header'

const UpdateUser = () => {

  const { id } = useParams();
  const [user, setUser] = useState({})
  const navigate = useNavigate();

  useEffect(() => {
    loadOneUser();
  },[])

  const loadOneUser = async () => {
    const result = await axios.get(`http://localhost:5001/users/${id}`);
    setUser(result.data)
  }

  const handleForm = (event) => {
    const { name, value } = event.target;
    
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleUpdateUser = async () => {
    await axios.put(`http://localhost:5001/users/${id}`, {
      fullName: user.fullName,
      cpf: user.cpf,
      surname: user.surname,
      gender: user.gender,
      phone: user.phone,
      address: user.address,
      observation: user.observation,
      avatarURL: user.avatarURL
    })
    navigate(`/show/${id}`)
  }

  return (

    <>
      <Header />

        <div className='update-container__header'>
          <h1>Update Usuário</h1>
          <Link to="/" className='button'>Volta para página Home</Link>
        </div>
      
      {
        <div className='update-container'>

          <div className='update-container__line'>
            <label className='update-container__line__label'>Nome completo</label>
            <input type="text" name="fullName" onChange={handleForm} value={user.fullName} className='update-container__line__input' />
          </div>
          <div className='update-container__line__2'>
            <div>
              <label className='update-container__line__label'>Cpf</label>
              <input type="text" name="cpf" onChange={handleForm} value={user.cpf} className='update-container__line__input' />
            </div>
            <div>
              <label className='update-container__line__label'>Apelido</label>
              <input type="text" name="surname" onChange={handleForm} value={user.surname} className='update-container__line__input' />
            </div>
          </div>
          <div className='update-container__line__2'>
            <div>
              <label className='update-container__line__label'>Telefone</label>
              <input type="text" name="phone" onChange={handleForm} value={user.phone} className='update-container__line__input' />
            </div>
            <div>
              <label className='update-container__line__label'>Genero</label>
              <select name="gender" onChange={handleForm} value={user.gender}>
                  <option value="" default> </option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                  <option value="outro">Outro</option>
                </select>
            </div>
          </div>
          <div className='update-container__line'>
            <label className='update-container__line__label'>Endereço</label>
            <input type="text" name="address" onChange={handleForm} value={user.address} className='update-container__line__input' />
          </div>
          <div className='update-container__line'>
            <label className='update-container__line__label'>Observação</label>
            <input type="text" name="observation" onChange={handleForm} value={user.observation} className='update-container__line__input' />
          </div>
          <div className='update-container__line'>
            <label className='update-container__line__label'>Avatar URL</label>
            <input type="text" name="avatarURL" onChange={handleForm} value={user.avatarURL} className='update-container__line__input' />
          </div>
          <div className='update-container__line'>
            <button onClick={handleUpdateUser}>Salvar</button>
          </div>
        </div>
      }
    </>
  )
}

export default UpdateUser