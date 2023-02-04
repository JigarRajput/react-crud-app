import React from 'react'
import './form.css'
import deleteImg from '../images/delete.png'

const DeleteModal = ({ open, show, user, setUsers }) => {

    if (!open) return null

    const handleDelete = (e, userGiven = user) => {
        e.preventDefault()

        let users = JSON.parse(localStorage.getItem('users_'))
        console.log(users)
        users = users.filter((user_) => user_.id !== userGiven.id)
        setUsers(users)
        localStorage.setItem('users_', JSON.stringify(users))
        show(!open)
    }

    return (
        <div className='delete__modal-container'>
            <div className='delete-modal'>
                <img src={deleteImg} id='delete_png' /><br />
                <label className='are_you_sure'>Are you sure you want to delete user {user.name}</label><br />
                <div className='cancel_delete-container'>
                    <button id='cancel_btn' onClick={() => show(!open)}>Cancel</button>
                    <button id='delete_btn' onClick={handleDelete}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal