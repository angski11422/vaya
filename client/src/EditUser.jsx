
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
        console.log(formData)
        fetch(`/api/users/${user.id}`, {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(formData)
        })
        .then((res) => {
            if (res.ok) {
              console.log('Profile updated successfully!');
            } else {
              console.error('Failed to update profile');
            }
          })
          .then(data => setUser(data))
          .catch((err) => {
            console.error('User not found', err);
          });
  
        setShowEditForm(!showEditForm)
        setShowUserPage(!showUserPage)
    }

return (
    <>
        <div className="modal">
            <div className="overlay"></div> 
            <div className="modal-content">
            <form className="form-modal"onSubmit={editProfile} >
                <div className="modal__header">
                    <h1>Edit Profile</h1>
                    <button className="user-nav__button-close" onClick={() => setShowEditForm(!showEditForm)}>X</button>
                </div>
                <div className="form-modal__group">
                    <label className="form-modal__label"htmlFor='name'></label>
                    <input className="form-modal__input"type="text" name="full_name" placeholder="full name" value={FormData.full_name} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='city'></label>
                    <input className="form-modal__input"type="text" name="city" placeholder="city" value={FormData.city} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='username'></label>
                    <input className="form-modal__input"type="text" name="username" placeholder="username" value={FormData.username} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='password'></label>
                    <input className="form-modal__input"type="text" name="password" placeholder="password" value={FormData.password} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='email'></label>
                    <input className="form-modal__input"type="email" name="email" placeholder="email" value={FormData.email} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor="profile_photo"></label>
                    <input className="form-modal__input"type="text" placeholder="profile_photo" name="profile_photo" value={FormData.profile_photo} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='birthday'></label>
                    <input className="form-modal__input"type="date" name="birthday" value={FormData.birthday} onChange={handleChange}></input>
                    <label className="form-modal__label"htmlFor='fav_destination'></label>
                    <input className="form-modal__input"type="text" name="fav_destination" placeholder="fav_destination" value={FormData.fav_destination} onChange={handleChange}></input>
                    <button className="user-nav__button" type="submit">Submit</button>
                </div>
            </form>
            </div>
        </div>
    </>
    
)}