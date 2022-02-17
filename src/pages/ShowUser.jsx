import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Header from '../components/Header'

const ShowUser = () => {
  
  const { id } = useParams();
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    loadOneUser();
  },[])

  const loadOneUser = async () => {
    const result = await axios.get(`https://crud-grupo-services.herokuapp.com/users/${id}`);
    setUser(result.data)
  }

  const handleDeleteUser = async () => {
    await axios.delete(`https://crud-grupo-services.herokuapp.com/users/${id}`)
    navigate("/");
  }

  return (
    <>
      <Header />

      <div className='show-container__header'>
        <h1>Detalhes do Usuário</h1>
        <Link to="/" className='button'>Volta para página Home</Link>
      </div>

      <div className='show-container'>
        <div className='show-container__avatar'>
          <img src={user.avatarURL} alt="avatar" />
        </div>
        <div className='show-container__content'>
          <div className='show-container__content__line'>
              <p className='field'>Nome completo</p>
              <p className='value'>{user.fullName}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Cpf</p>
              <p className='value'>{user.cpf}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Telefone</p>
              <p className='value'>{user.phone}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Apelido</p>
              <p className='value'>{user.surname}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Genero</p>
              <p className='value'>{user.gender}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Endereço</p>
              <p className='value'>{user.address}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Observações</p>
              <p className='value'>{user.observation}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Criação</p>
              <p className='value'>{user.createDate}</p>
          </div>
          <div className='show-container__content__line'>
              <p className='field'>Ultimo update</p>
              <p className='value'>{user.updateDate || '-'}</p>
          </div>

          <div>
            <button onClick={() => {navigate(`/update/${user.id}`)}} >Editar</button>
            <button onClick={handleDeleteUser} className="delete">Excluir</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShowUser