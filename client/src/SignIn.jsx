import {useState} from 'react';

/* eslint-disable */

export default function SignIn({ setUser, setIsModal, isModal }) {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")


// login user
    function handleUsername(e){
        setUsername(e.target.value)
    }
    function handlePassword(e){
        setPassword(e.target.value)
    }

    function handleSignIn(e){
        e.preventDefault()
        fetch('/api/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username: username, password: password})
        })
        .then((r) => r.json())
        .then(data => setUser(data))
        setIsModal(!isModal)
    }

//signup user   
    const [formData, setFormData] =useState({
        full_name: "",
        city: "",
        username: "",
        password: "",
        email: "",
        // profile_photo: "",
    })

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    } 
    function handleSignUp(e){
        e.preventDefault()
        const new_user = {
            full_name: formData.full_name,
            city: formData.city,
            username: formData.username,
            password: formData.password,
            email: formData.email,
            // profile_photo: formData.profile_photo
        }
        fetch('/api/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({new_user})
        })
        .then((r) => r.json())
        .then(data => setUser(data))
        setIsModal(!isModal)
    }

    return (
        <>
            <div className="modal">
                <div className="overlay"></div> 
                <div className="modalContent">
                    <form className="model__form" onSubmit={handleSignIn}>
                        <div className="modal__header">
                            <h1>Sign In</h1>
                            <button className="close" onClick={() => setIsModal(!isModal)}>X</button>
                        </div>
                        <div className="modal__inputs">
                            <label htmlFor='username'></label>
                            <input type="text" name="username" placeholder="username" value={username} onChange={handleUsername}></input>
                            <label htmlFor='password'></label>
                            <input type="text" name="password" placeholder="password" value={password} onChange={handlePassword}></input>
                            <button type="submit" >Sign In</button>
                        </div>
                        <div className="or-line">
                            <div className="line"></div>
                            <div className="or">or</div>
                            <div className="line"></div>
                        </div>
                        {/* <div className="modal-footer">
                            <button type="submit">New Here? Sign Up Now</button>
                        </div> */}
                    </form>
                </div>
             {/* </div> */}
            {/* <div className="modal__sign_up"> */}
                <div className="overlay"></div> 
                <div className="modal-content">
                    <form className="model-form" onSubmit={handleSignUp}>
                        <div className="modal-header">
                            <h1>Sign Up</h1>
                            {/* <button className="close" onClick={() => setIsModal(!isModal)}>X</button> */}
                        </div>
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
                            {/* <label htmlFor="profile_photo">Upload a profile picture:</label>
                            <input type="file" id="profile_photo" name="profile_photo" accept="image/png, image/jpeg" value={FormData.profile_photo} onChange={handleChange}></input> */}
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            {/* </div>  */}
            </div>
        </>
    )
}