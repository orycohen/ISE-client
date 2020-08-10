import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import logoImg from '../../../img/logo.png';
import { MagnetBox, Card, Icon, Form, Input, Button, Error } from '../../Styled';

function Signup() {
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();

  function postSignup() {
    if (password !== passwordVerify) {
        setIsError(true);
        setError('The passwords do not match');
        return;
    }
    Axios({
      method: 'POST',
      data: {
        name,
        email,
        password
      },
      withCredentials: true,
      url: 'http://localhost:8080/users/register'
    })
    .then(result => {
        if (result.status === 200) {
            history.push('/login');
        }
        else {
             setIsError(true);
            setError('The password or username provided were incorrect')
        }
    })
    .catch(e => {setIsError(true); setError(e);});
  } 

 return (
    <Card>
      <Icon shadow="4px 4px 4px #333" size={"50%"} src={logoImg} />
      <Form>
        <Input type='text' value={name} onChange={e => {setName(e.target.value);}} placeholder='Name' required/>
        <Input type='email' value={email} onChange={e => {setEmail(e.target.value);}} placeholder='Email' required/>
        <Input type='password' value={password} onChange={e => {setPassword(e.target.value);}} placeholder='Password' required/>
        <Input type='password' value={passwordVerify} onChange={e => {setPasswordVerify(e.target.value);}} placeholder='Repeat Password' required/>
        <MagnetBox bottom height={"60px"}>
          <Button primary onClick={postSignup}>Sign Up</Button>
        </MagnetBox>
      </Form>
      <MagnetBox height={"50px"}>
        <Link to='/login/signin'>Already have an account?</Link>
      </MagnetBox>
        { isError && <Error>{error.toString()}</Error> }
    </Card>
  );
}

export default Signup;
