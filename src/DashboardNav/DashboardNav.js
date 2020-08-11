import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '../Components/Styled.js';
import homeImg from '../img/home.png';
import powerImg from '../img/power.png';
import messageImg from '../img/message.png';
import listImg from '../img/list.png';
import mapImg from '../img/map.png';
import './DashboardNav.scss';
import Axios from 'axios';
import { useAuth } from '../Contexts/auth';
import { withRouter } from 'react-router';

const DashboardNav = (props) => {

  const { setUser } = useAuth();

  const logOut = (e) => {
    e.preventDefault();
    Axios({
      method: 'DELETE',
      withCredentials: true,
      url: 'http://localhost:8080/users/logout'
    })
    .then(res => {
      setUser(null);
      props.history.push('/');
    })
    .catch(err => {console.log(`Error while logging out: ${err}`)});
  }

  return (
    <nav className="DashboardNav">
      <li>
        <Link to="/dashboard">
          <Icon clickable size={"40px"} src={homeImg}/>
        </Link>
      </li>
      <li>
        <Link to="/dashboard/map">
          <Icon clickable size={"40px"} src={mapImg}/>
        </Link>
      </li>
      <li>
        <Link to="/dashboard/tasks">
          <Icon clickable size={"40px"} src={listImg}/>
        </Link>
      </li>
      <li>
        <Link to="/dashboard/messages">
          <Icon clickable size={"40px"} src={messageImg}/>
        </Link>
      </li>
      <li>
        <Icon clickable onClick={logOut} size={"40px"} src={powerImg}/>
      </li>
    </nav>
  );
}

export default withRouter(DashboardNav);
