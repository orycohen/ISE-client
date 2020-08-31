import React, { useState } from 'react';
import Axios from 'axios';
import { useAuth } from '../../../../Contexts/auth';
import { Label } from '../../../Styled';

const DashHomeWelcome = () => {
	const { user } = useAuth();
	const [ image, setImage ] = useState();
  Axios({
	  method: 'GET',
	  url: 'http://localhost:8080/users/userdetails',
	  withCredentials: true
  })
.then(data => {
	setImage(data.data.image);
})
.catch(err => console.log('error', err));
  return (
    <>
	  <img width='100' height='100' src={`data:image/jpeg;base64,${image ? image : ''}`}/>
	  <Label>
	  { user.name }, { user.type }
	  </Label>
    </>
  );
}

export default DashHomeWelcome;
