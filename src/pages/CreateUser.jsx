import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'

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
    
    setUser({
      ...user,
      [name]: value,
    })
  }

  const handleCreateUser = async () => {
    await axios.post(`http://localhost:5001/users/`, {
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
      <h1>CreateUser</h1>
      
      <Link to="/">Volta para página Home</Link>
      <table>
          <tr>
            <td>Nome completo</td>
            <td>CPF</td>
            <td>Apelido</td>
            <td>Genero</td>
            <td>Telefone</td>
            <td>Endereço</td>
            <td>Observaçoes</td>
            <td>Avatar URL</td>
            <td>Action</td>
          </tr>
          <tr>
            <td>
              <input type="text" name="fullName" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="cpf" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="surname" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="gender" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="phone" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="address" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="observation" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="avatarURL" onChange={handleForm} />
            </td>
            <td>
              <button onClick={handleCreateUser}>Add User</button>
            </td>
          </tr>
        </table>
    </>
  )
}

export default CreateUser