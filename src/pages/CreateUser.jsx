import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'

const CreateUser = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: '',
    cpf: ''
  })

  const handleForm = (event) => {
    const { name, value } = event.target;
    
    setUser({
      ...user,
      [name]: value,
    })
  }

  console.log(user)

  const handleCreateUser = async () => {
    await axios.post(`http://localhost:5001/users/`, {
      fullName: user.fullName,
      cpf: user.cpf
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
          </tr>
          <tr>
            <td>
              <input type="text" name="fullName" onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="cpf" onChange={handleForm} />
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