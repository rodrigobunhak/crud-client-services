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
    const result = await axios.get('https://crud-grupo-services.herokuapp.com/users');
    setUsers(result.data)
  }


  return (
    <>
      <Header />
      
      <div className='homeContainer'>
        <Link to="/create" className='create-button'>Adicionar Usuário</Link>
        

        <div className='content'>
          
          {users.map((user, key) => (
          <div className='card' key={key}>
            <div className='card-avatar'>
              <img src={user.avatarURL} alt="avatar" />
            </div>
            <div className='cardFullname'>
              <div className='label'>Name</div>
              <div className='cardInfo'>{user.fullName}</div>
            </div>
            <div className='cardCpf'>
              <div className='label'>Cpf</div>
              <div className='cardInfo'>{user.cpf}</div>
            </div>
            <div className='cardPhone'>
              <div className='label'>Telefone</div>
              <div className='cardInfo'>{user.phone}</div>
            </div>
            <div className='cardAction'>
              <button className='buttonShowUser' onClick={() => {navigate(`/show/${user.id}`)}} >Detalhar</button>
            </div>
          </div>
          ))}
        </div>

      </div>
    </>
  )
}

export default Home