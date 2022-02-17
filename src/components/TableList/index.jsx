import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate, useHistory } from 'react-router-dom';

import styles from './styles.module.scss';

const TableList = ({userList}) => {

  let navigate = useNavigate();

  const [userId, setUserId] = useState('')

  const handleDeleteUser = async () => {
    await axios.delete(`http://localhost:5001/users/${userId}`)
    window.location.reload();
  }

  return (
    <>
    <table>
      <tr>
        <th>Nome Completo</th>
        <th>CPF</th>
        <th>Actions</th>
      </tr>
      {userList.map((user, key) => (
        <tr className={styles.card} key={key}>
          <td className={styles.cardValue}>{user.fullName}</td>
          <td className={styles.cardValue}>{user.cpf}</td>
          <td>
            <button onClick={() => {navigate(`/update/${user.id}`)}} >Editar</button>
            <button onClick={handleDeleteUser} onMouseOver={(event) => setUserId(user.id)} >Excluir</button>
          </td>
        </tr>
      ))}
    </table>
      
    </>
  )
}

export default TableList