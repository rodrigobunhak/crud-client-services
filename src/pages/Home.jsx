import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

import Header from '../components/Header'

const Home = () => {
  
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadUser();
  },[])

  const loadUser = async () => {
    const result = await axios.get('http://localhost:5001/users');
    setUsers(result.data)
  }


  return (
    <>
      <Header />
      <h1>Home</h1>
      
      <Link to="/create">Adicionar Usuário</Link>
      
      <table>
        <tr>
          <th>Nome Completo</th>
          <th>CPF</th>
          <th>Actions</th>
        </tr>
        {users.map((user, key) => (
          <tr key={key}>
            <td>{user.fullName}</td>
            <td>{user.cpf}</td>
            <td>
              <button onClick={() => {navigate(`/show/${user.id}`)}} >Detalhar</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  )
}

export default Home