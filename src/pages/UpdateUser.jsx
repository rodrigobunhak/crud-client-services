import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom';

import Header from '../components/Header'

const UpdateUser = () => {

  const [userFullName, setUserFullName] = useState('')
  const [userCpf, setUserCpf] = useState('')
  const navigate = useNavigate();

  

  const { id } = useParams();
  const [user, setUser] = useState({})

  useEffect(() => {
    getUser();
  }, [])

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5001/users/${id}`)
  }

  const handleName = (event) => {
    setUserFullName(event)
  }

  const handleCpf = (event) => {
    setUserCpf(event)
  }

  const getUser = async () => {
    const result = await axios.get(`http://localhost:5001/users/${id}`)
    setUserFullName(result.data.fullName)
    setUserCpf(result.data.cpf)
  }

  const handleUpdateUser = async () => {
    await axios.put(`http://localhost:5001/users/${id}`, { fullName: userFullName, cpf: userCpf })
    navigate("/")
  }

  console.log('cpf: ', userCpf)

  return (

    <>
      <Header />
      <div>Update</div>
      <Link to="/">Volta para página Home</Link>
      {
        <table>
          <tr>
            <th>CPF</th>
            <th>Nome Completo</th>
          </tr>
          <tr>
            <td>
              <input type="text" value={userCpf} onChange={(event) => {handleCpf(event.target.value)}} />
            </td>
            <td>
              <input type="text" value={userFullName} onChange={(event) => {handleName(event.target.value)}} />
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