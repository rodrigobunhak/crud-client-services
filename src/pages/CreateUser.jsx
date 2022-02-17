import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Header from '../components/Header'

const CreateUser = () => {

  const [userFullName, setUserFullName] = useState('')
  const [userCpf, setUserCpf] = useState('')
  const navigate = useNavigate();

  const handleCreateUser = async () => {
    await axios.post(`http://localhost:5001/users/`, { fullName: userFullName, cpf: userCpf })
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
              <input type="text" onChange={(event) => { setUserFullName(event.target.value) }} />
            </td>
            <td>
              <input type="text" onChange={(event) => { setUserCpf(event.target.value) }} />
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