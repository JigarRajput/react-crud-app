import React from 'react'
import './form.css'

const Update = ({ open, show, user, setUsers }) => {


    const handleSubmit = (event) => {
        event.preventDefault()

        let name = event.target._name.value
        let address = event.target.addr.value
        let email = event.target.email.value
        let mobile = event.target.mobile.value
        let gender = event.target.gender.value
        let citySelector = event.target.citySelector.value

        console.log(address, name, email, mobile, gender, citySelector)

        let Users = JSON.parse(localStorage.getItem('users_'))
        console.log(Users)
        let filteredUserIndex = Users.findIndex((_user) => _user.id == user.id)

        let filteredUser = {
            id: user.id,
            name,
            email,
            address,
            mobile,
            gender,
            citySelector
        }

        Users[filteredUserIndex] = filteredUser
        localStorage.setItem('users_', JSON.stringify(Users))
        setUsers(Users)

        console.log(filteredUser, "Updated")
        show(!open)

    }

    if (!open)
        return null

    const handleCross = (e) => {
        e.preventDefault()
        show(!open)
    }

    return (
        <div className='dialog-container'>
            <div name='dialog' id='dialog'>

                <p className='cross' onClick={handleCross}>X</p>
                <div className='registration'>
                    <p>Update</p>
                </div>
                <div className='form-elements-container'>
                    <form onSubmit={handleSubmit} onReset={e => e.target.reset()}>
                        <p className='form-element'>
                            <input type='text' name='_name' required defaultValue={user.name} />
                            <label>Name</label>
                        </p>
                        <p className='form-element-address'>
                            <textarea name='addr' required defaultValue={user.address} />
                            <label>Address</label>
                        </p>
                        <p className='form-element'>
                            <input type='email' name="email" required defaultValue={user.email} />
                            <label>Email</label>
                        </p>
                        <p className='form-element'>
                            <input type='mobile' name="mobile" required defaultValue={user.mobile} />
                            <label>Mobile</label>
                        </p>
                        <p>
                            <label>Gender</label><br />
                            <input type="radio" id="male" name="gender" value="Male" /> Male
                            <input type="radio" id="female" name="gender" value="Female" /> Female
                        </p>
                        <p className='form-element'>
                            <select name="citySelector" id="city" required defaultValue={user.citySelector}>
                                <option hidden selected></option >
                                <option>Bangaluru</option>
                                <option>Hyderabad</option>
                                <option>Gurugram</option>
                                <option>Las Vegas</option>
                                <option>Kashmir</option>
                            </select>
                            <label>City</label>
                        </p>

                        <input type="checkbox" name='checkbox' required /> <label>I agree to company terms and policy</label>
                        <div className='signup__reset-container'>
                            <button className='signup' type='submit'>Update</button>
                            <button type='reset' className='reset' >Reset</button>
                        </div>
                    </form>
                </div>

            </div>
        </div >
    )
}

export default Update