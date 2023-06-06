import React from 'react';


export default function SignIn() {



    return (
        <>
            <div className="modal__sign-in">
                <div className="modal__overlay"></div> 
                <div className="modal__content">
                    <form className="model__form">
                        <div className="modal__header">
                            <h1>Sign In</h1>
                            <button className="close">X</button>
                        </div>
                        <div className="modal__inputs">
                            <label htmlFor='username'></label>
                            <input type="text" name="username" placeholder="username"></input>
                            <label htmlFor='password'></label>
                            <input type="text" name="password" placeholder="password"></input>
                            <button type="submit">Sign In</button>
                        </div>
                        <div className="or-line">
                            <div className="line"></div>
                            <div className="or">or</div>
                            <div className="line"></div>
                        </div>
                        <div className="modal-footer">
                            <button type="submit">New Here? Sign Up Now</button>
                        </div>
                    </form>
                </div>
            </div> 
            <div className="modal__sign_up">
                <div className="modal-overlay"></div> 
                <div className="modal-content">
                    <form className="model-form">
                        <div className="modal-header">
                            <h1>Sign Up</h1>
                            <button className="close">X</button>
                        </div>
                        <div className="modal__inputs">
                            <label htmlFor='name'></label>
                            <input type="text" name="name" placeholder="name"></input>
                            <label htmlFor='city'></label>
                            <input type="text" name="city" placeholder="city"></input>
                            <label htmlFor='username'></label>
                            <input type="text" name="username" placeholder="username"></input>
                            <label htmlFor='password'></label>
                            <input type="text" name="password" placeholder="password"></input>
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div> 
        </>
    )
}