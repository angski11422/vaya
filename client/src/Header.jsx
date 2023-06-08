import {useState, useEffect} from 'react';
import SignIn from './SignIn';
import UserPage from './UserPage';





export default function Header({user, setUser} ) {
    // const [user, setUser] = useState(null)
    // const [isUserPage, setIsUserPage] = useState(false)
    const [isModal, setIsModal] = useState(false)

    
    useEffect(() => {
        fetch('/api/check_session')
        .then(r => r.json())
        .then(data => setUser(data))
    }, [])

    function logOut(){
        return fetch('/api/logout', {
            method: 'DELETE'
        })
        .then(setUser(null))
    }


    if(isModal){
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <header className="header">
                <img src="src/img/logo.png" alt="vaya logo" className="logo" />

                <form action="#" className="search">
                    <input type="text" className="search__input" placeholder="Search" />
                    <button className="search__button">
                        <svg className="search__icon">
                            <use xlinkHref="src/img/sprite.svg#icon-magnifying-glass"></use>
                        </svg>
                    </button>
                </form>

                <nav className="user-nav">
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="src/img/sprite.svg#icon-bookmark"></use>
                        </svg>
                        <span className="user-nav__notification">0</span>
                    </div>
                    <div className="user-nav__icon-box">
                        <svg className="user-nav__icon">
                            <use xlinkHref="src/img/sprite.svg#icon-chat"></use>
                        </svg>
                        <span className="user-nav__notification">0</span>
                    </div>
                    <div className="user-nav__user">
                        {user ? (
                            <div onClick={logOut}>
                                <img src="{ url_for('static', filename=user.profile_photo) }" alt="Profile photo" className="user-nav__user-photo" />
                                <span className="user-nav__user-name">{user.name}</span>
                            </div>
                        ) : (
                            <div  >
                            {isModal ? <SignIn setUser={setUser} setIsModal={setIsModal} isModal={isModal} /> : <button className="user-nav__button" onClick={() => setIsModal(!isModal)}>Sign In</button>}
                            </div>
                        )}
                    </div>
                </nav>
            </header>
        </>
    )
}

