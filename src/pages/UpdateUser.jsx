import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

import Header from '../components/Header'

const UpdateUser = () => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState({
    fullName: '',
    cpf: ''
  })

  useEffect(() => {
    getUser();
  }, [])

  const getUser = async () => {
    const result = await axios.get(`http://localhost:5001/users/${id}`)
    setUser({
      ...user,
      "fullName": result.data.fullName,
      "cpf": result.data.cpf
    })
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
      cpf: user.cpf 
    })
    navigate("/")
  }

  return (

    <>
      <Header />
      <h1>Update</h1>
      
      <Link to="/">Volta para página Home</Link>
      {
        <table>
          <tr>
            <th>Nome Completo</th>
            <th>CPF</th>
          </tr>
          <tr>
            <td>
              <input type="text" name="fullName" value={user.fullName} onChange={handleForm} />
            </td>
            <td>
              <input type="text" name="cpf" value={user.cpf} onChange={handleForm} />
            </td>
            <td>
              <button onClick={handleUpdateUser}>Salvar</button>
            </td>
          </tr>
        </table>
      }
    </>
  )
}

export default UpdateUser