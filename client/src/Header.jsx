import {useState, useEffect} from 'react';
import SignIn from './SignIn';
import UserPage from './UserPage';





export default function Header({user, setUser} ) {
    const [showUserPage, setShowUserPage] = useState(false)
    const [isModal, setIsModal] = useState(false)
    const [showEditForm, setShowEditForm] = useState(false)

    
    useEffect(() => {
        fetch('/api/check_session')
        .then(r => r.json())
        .then(data => setUser(data))
        .catch(err => {
            setUser(null)
        });
    }, [])

    function logOut(){
        fetch('/api/logout', {
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
                   {user ? (
                    <>
                        <div className="user-nav__icon-box">
                            <button className="user-nav__button" onClick={logOut}>Log Out</button> 
                        </div>
                        <div>
                            {showUserPage ? 
                            <div>
                                <UserPage user={user} showEditForm={showEditForm} setShowEditForm={setShowEditForm} setShowUserPage={setShowUserPage} showUserPage={showUserPage}/>
                            </div> : (
                                <div className="user-nav__user" onClick={() => setShowUserPage(!showUserPage)}>
                                    <img src={user.profile_photo} alt="Profile photo" className="user-nav__user-photo" />
                                    <span className="user-nav__user-name">{user.name}</span>
                                </div>)}
                        </div>
                    </>) : (
                        <div  >
                        {isModal ? <SignIn setUser={setUser} setIsModal={setIsModal} isModal={isModal} /> : <button className="user-nav__button" onClick={() => setIsModal(!isModal)}>Sign In</button>}
                        </div>
                        )}
                </nav>
            </header>
        </>
    )
}

