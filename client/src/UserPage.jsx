import { useState } from "react";
import EditUser from "./EditUser";


export default function UserPage({user, setUser, showEditForm, setShowEditForm, showUserPage, setShowUserPage}) {
    
    
    function deleteProfile() {
        fetch(`/api/users/${user.id}` , {
            method: 'DELETE',
        })
        .then(setUser(null))
    }

    return (
        <>
            <div className="user-page">
                {showEditForm ? <EditUser user={user} setUser={setUser} showEditForm={showEditForm} setShowEditForm={setShowEditForm} showUserPage={showUserPage} setShowUserPage={setShowUserPage}/> :
                <div>
                    <div className="user-page__box" onClick={() => setShowUserPage(!showUserPage)} >
                        <h1>Welcome {user.name}-!</h1>
                        <img src={user.profile_photo} alt="profile photo"/>
                        <p>Username: {user.username}</p>
                        <p>Bday: {user.birthday}</p>
                        <p>City: {user.city}</p>
                        <p>Favorite Destination: {user.fav_destination}</p>
                    </div>
                    <div className="user-page__buttons">
                        <button className="user-nav__button" onClick={() => setShowEditForm(!showEditForm)}>Edit Profile</button>
                        <button onClick={deleteProfile} className="user-nav__button">Delete Profile</button>
                    </div>
                </div>}
            </div>
        </>
    )
}