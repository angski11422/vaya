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
            <div className="modal">
                <div className="modal__background"></div>    
                {showEditForm ? <EditUser user={user} setUser={setUser} showEditForm={showEditForm} setShowEditForm={setShowEditForm} showUserPage={showUserPage} setShowUserPage={setShowUserPage}/> :
                <div>
                    <div className="modal__content">
                        <div className="modal__user" onClick={() => setShowUserPage(!showUserPage)} >
                            <h1 className="modal__user-header">Welcome {user.name}!</h1>
                            <img className="modal__user-photo"src={user.profile_photo} alt="profile photo"/>
                            <p className="modal__user-info">Username: {user.username}</p>
                            <p className="modal__user-info">Bday: {user.birthday}</p>
                            <p className="modal__user-info">City: {user.city}</p>
                            <p className="modal__user-info">Favorite Destination: {user.fav_destination}</p>
                        </div>
                        <div className="modal__user-buttons">
                            <button className="user-nav__button" onClick={() => setShowEditForm(!showEditForm)}>Edit Profile</button>
                            <button onClick={deleteProfile} className="user-nav__button">Delete Profile</button>
                        </div>
                    </div>
                </div>}
            </div>
        </>
    )
}