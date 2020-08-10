import React from 'react';
import { Button } from '../Styled';
import { useAuth } from '../../Contexts/auth';
import Axios from 'axios';

function Admin(props) {
  const { setUser } = useAuth();

  function logOut() {
    setUser(null);
    Axios({
      method: 'DELETE',
      withCredentials: true,
      url: 'http://localhost:8080/users/logout'
    })
    .then(res => {})
    .catch(err => {console.log(`Error while logging out: ${err}`)});
  }

  return (
    <div>
        <div>Admin Page</div>
        <Button onClick={logOut}>Log Out</Button>
    </div>
  );
}

export default Admin;
