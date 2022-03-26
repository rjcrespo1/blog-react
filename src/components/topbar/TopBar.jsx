import { Link } from 'react-router-dom';
import './topbar.css'
import { useContext } from 'react';
import { Context } from '../../context/Context';

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-linkedin"></i>
            <i className="topIcon fa-brands fa-github-square"></i>
            <i className="topIcon fa-brands fa-facebook-square"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
              <li className='topListItem'>
                <Link className='link' to='/'>HOME</Link>
              </li>
              <li className='topListItem'><Link className='link' to='/'>ABOUT</Link></li>
              <li className='topListItem'><Link className='link' to='/'>CONTACT</Link></li>
              <li className='topListItem'><Link className='link' to='/write'>WRITE</Link></li>
              <li className='topListItem' onClick={handleLogout}>
                {user && 'LOGOUT'}
              </li>
            </ul>
        </div>
        <div className='topRight'>
        {
          user ? (
            <Link to='/settings'>
              <img className='topImg' src={user.profilePic} alt='profile pic' />
            </Link>
          ) :(
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )
        }
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}


// https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png