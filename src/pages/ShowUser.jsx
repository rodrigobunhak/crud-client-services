import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'

const ShowUser = () => {
  
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    loadOneUser();
  },[])

  const loadOneUser = async () => {
    const result = await axios.get(`http://localhost:5001/users/${id}`);
    setUser(result.data)
  }

  const handleDeleteUser = async () => {
    await axios.delete(`http://localhost:5001/users/${id}`)
    navigate("/");
  }

  return (
    <>
      <Header />
      <h1>Home</h1>
      
      <table>
        <tr>
          <th>Nome Completo</th>
          <th>CPF</th>
          <th>Actions</th>
        </tr>
        <tr>
          <td>{user.fullName}</td>
          <td>{user.cpf}</td>
          <td>
            <button onClick={() => {navigate(`/update/${user.id}`)}} >Editar</button>
            <button onClick={handleDeleteUser} >Excluir</button>
          </td>
        </tr>

      </table>
    </>
  )
}

export default ShowUser