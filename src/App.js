import './App.css';
import Register from './components/Register';
import Update from './components/Update';
import { useRef, useState } from 'react'
import DeleteModal from './components/DeleteModal';

function App() {

  const [showEdit, setShowEdit] = useState(false)
  const [showRegister, setShowRegister] = useState(false)
  const [showDelete, setShowDelete] = useState(false)
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users_')))
  const [userToUpdate, setUserToUpdate] = useState({})
  const [userToDelete, setUserToDelete] = useState({})

  const handleEdit = (e, id) => {
    e.preventDefault()
    setShowEdit(true)
    let userToModify = users.filter((user) => user.id === id)[0]
    setUserToUpdate(userToModify)
  }

  const handleDelete = (e, id) => {
    e.preventDefault()
    setShowDelete(true)
    let userToDelete = users.filter((user) => user.id === id)[0]
    setUserToDelete(userToDelete)
  }

  const handleRegister = (e) => {
    e.preventDefault()
    setShowRegister(true)
  }

  return (

    <div>
      <Register open={showRegister} show={setShowRegister} setUsers={setUsers} />
      <Update open={showEdit} show={setShowEdit} user={userToUpdate} setUsers={setUsers} />
      <DeleteModal open={showDelete} show={setShowDelete} user={userToDelete} setUsers={setUsers} />

      <div className='table-main-container'>

        <div className='title__searchbar-container'>
          <div className='icon__title-container'>
            <img src='/users.png' id='users' />
            <label>User Details</label>
          </div>
          <div className='searchbar__adduser-container'>
            <input type='search' placeholder='Search...' />
            <img src='/addUser.jpg' id='adduser' onClick={handleRegister} />
          </div>
        </div>

        <div className='table-container'>
          <table>
            <tr className='table-row'>
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>City</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>

            {users && users.map((user) => (
              <tr className='table-row'>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.address}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>{user.gender}</td>
                <td>{user.citySelector}</td>
                <td><img src='/edit.png' id='edit' onClick={(e) => { handleEdit(e, user.id) }} /></td>
                <td><img src='/delete.png' id='delete' onClick={(e) => { handleDelete(e, user.id) }} /></td>
              </tr>))
            }
          </table>
        </div>

      </div>
    </div>
  );
}

export default App;
