
import { useState } from "react"



export default function EditUser({user, setUser, showEditForm, setShowEditForm, showUserPage, setShowUserPage}) {

    const [formData, setFormData] =useState({
        full_name: "",
        city: "",
        username: "",
        password: "",
        email: "",
        profile_photo: "",
        birthday: "",
        fav_destination: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 

    function editProfile(e) {
        e.preventDefault()
        // const updateProfile = {
        //     full_name: formData.full_name,
        //     city: formData.city,
        //     username: formData.username,
        //     password: formData.password,
        //     email: formData.email,
        //     profile_photo: formData.profile_photo,
        //     birthday: formData.birthday,
        //     fav_destination: formData.fav_destination
        // }
        // fetch(`/api/users/${user.id}`, {
        //     method: 'PATCH',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify(updateProfile)
        // })
        // .then(res => res.json())
        // .then(data => setUser(data));
        setShowEditForm(!showEditForm)
        setShowUserPage(!showUserPage)
    }

return (
    <form onSubmit={editProfile}>
        <div className="modal__inputs">
            <label htmlFor='name'></label>
            <input type="text" name="full_name" placeholder="full name" value={FormData.full_name} onChange={handleChange}></input>
            <label htmlFor='city'></label>
            <input type="text" name="city" placeholder="city" value={FormData.city} onChange={handleChange}></input>
            <label htmlFor='username'></label>
            <input type="text" name="username" placeholder="username" value={FormData.username} onChange={handleChange}></input>
            <label htmlFor='password'></label>
            <input type="text" name="password" placeholder="password" value={FormData.password} onChange={handleChange}></input>
            <label htmlFor='email'></label>
            <input type="email" name="email" placeholder="email" value={FormData.email} onChange={handleChange}></input>
            <label htmlFor="profile_photo"></label>
            <input type="text" placeholder="profile_photo" name="profile_photo" value={FormData.profile_photo} onChange={handleChange}></input>
            <label htmlFor='birthday'></label>
            <input type="date" name="birthday" value={FormData.birthday} onChange={handleChange}></input>
            <label htmlFor='fav_destination'></label>
            <input type="text" name="fav_destination" placeholder="fav_destination" value={FormData.fav_destination} onChange={handleChange}></input>
            <button type="submit">Submit</button>
        </div>
    </form>
)}