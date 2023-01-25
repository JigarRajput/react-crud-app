import React, { createRef } from 'react'
import { useRef, useState, useEffect } from 'react'
import './form.css'

const Register = ({ open, show, setUsers }) => {

    const telRef = useRef(null);
    const addressRef = useRef(null)
    const emailRef = useRef(null)
    const nameRef = useRef(null)

    const telInRef = useRef(null);
    const addressInRef = useRef(null)
    const emailInRef = useRef(null)
    const nameInRef = useRef(null)


    localStorage.removeItem('Users')
    if (!open)
        return null

    const handleCross = (e) => {
        e.preventDefault()
        show(!open)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        let name = event.target._name.value
        let address = event.target.addr.value
        let email = event.target.email.value
        let mobile = event.target.mobile.value
        let gender = event.target.gender.value
        let citySelector = event.target.citySelector.value

        console.log(address, name, email, mobile, gender, citySelector)

        let Users = JSON.parse(window.localStorage.getItem('users_'))
        // setUsers(Users)
        if (!Users) {
            console.log("Nai hai isme kuch!!")

            Users = []

            const newUser = {
                id: Users.length + 1,
                name,
                email,
                address,
                mobile,
                gender,
                citySelector
            }

            console.log(JSON.stringify(newUser))

            Users.push(newUser)
            setUsers(Users)
            console.log(JSON.stringify(Users))
            localStorage.setItem('users_', JSON.stringify(Users))
            // setUsers(Users)
        }

        else {

            const newUser = {
                id: Users.length + 1,
                name,
                email,
                address,
                mobile,
                gender,
                citySelector
            }

            // console.log(Users[0])
            Users.push(newUser)
            setUsers(Users)
            console.log(Users)
            localStorage.setItem('users_', JSON.stringify(Users))
            console.log(JSON.parse(localStorage.getItem('users_')))
            // setUsers(Users)
        }

        show(!open)

    }

    const handleAddressChange = (e) => {
        // e.preventDefault()
        if (e.target.value.length < 10) {
            addressRef.current.style.display = 'contents'
            addressInRef.current.style.border = '4px solid red'
        }

        else {
            addressInRef.current.style.border = '2px solid black'
            addressRef.current.style.display = 'none'
        }

    }

    const handleEmailChange = (e) => {
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!e.target.value.match(mailformat)) {
            emailInRef.current.style.border = '4px solid red'
            emailRef.current.style.display = 'contents'
        }
        else {
            emailInRef.current.style.border = '2px solid black'
            emailRef.current.style.display = 'none'
        }

    }

    const handleNameChange = (e) => {
        if (e.target.value.length < 3 || !isNaN(e.target.value)) {
            nameInRef.current.style.border = '4px solid red'
            nameRef.current.style.display = 'contents'
        }

        else {
            nameInRef.current.style.border = '2px solid black'
            nameRef.current.style.display = 'none'
        }


    }

    const handleTelChange = (e) => {
        if (e.target.value.length < 10 || isNaN(e.target.value)) {
            telInRef.current.style.border = '4px solid red'
            telRef.current.style.display = 'contents'
        }

        else {
            telInRef.current.style.border = '2px solid black'
            telRef.current.style.display = 'none'
        }

    }



    return (
        <div className='dialog-container'>
            <div name='dialog' id='dialog'>

                <p className='cross' onClick={handleCross}>X</p>
                <div className='registration'>
                    <p>Registration</p>
                </div>
                <div className='form-elements-container'>
                    <form onSubmit={handleSubmit} onReset={e => e.target.reset()}>
                        <p className='form-element' >
                            <input ref={nameInRef} type='text' required name='_name' placeholder=' ' onChange={handleNameChange} pattern='[a-zA-Z]{>3}' />
                            <small className='small' ref={nameRef} id='smName'>This field is Required more than 3 alphabets</small>
                            <label>Name*</label>
                        </p>
                        <p className='form-element-address' >
                            <textarea required name='addr' ref={addressInRef} placeholder=' ' onChange={handleAddressChange} pattern='[a-zA-Z]{5}' />
                            <label>Address*</label>
                            <small className='small' ref={addressRef}>Address must be 10 characters long</small>
                        </p>
                        <p className='form-element'  >
                            <input ref={emailInRef} type='email' required name='email' placeholder=' ' onChange={handleEmailChange} />
                            <label>Email</label>
                            <small className='small' ref={emailRef}>Required of the form xyz@example.com </small>
                        </p>
                        <p className='form-element' >
                            <input ref={telInRef} type='tel' placeholder=' ' onChange={handleTelChange} required name='mobile' pattern='[6-9]{1}[0-9]{9}' title="Phone number contains 10 digits starting with 6,7,8,or 9 " />
                            <small className='small' ref={telRef}>Must be 10 digits Starting with either 6,7,8,9</small>
                            <label>Mobile*</label>

                        </p>
                        <p>
                            <label>Gender</label><br />
                            <input type="radio" placeholder='Male' id="male" required name="gender" value="Male" />Male
                            <input type="radio" id="female" required name="gender" value="Female" /> Female
                        </p>
                        <p className='form-element'>
                            <select name="citySelector" id="city" required>
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
                            <button className='signup' type='submit'>Sign Up</button>
                            <button type='reset' className='reset' >Reset</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )


}

export default Register