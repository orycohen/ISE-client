import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Axios from 'axios';
import logoImg from '../../../img/logo.png';
import { Card, Icon, Form, Input, Button, Error, MagnetBox } from '../../Styled';
import { useAuth } from '../../../Contexts/auth';

function Signin(props) {
  const [isError, setIsError] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { setUser, user } = useAuth();
  const referer = (props.location.state && props.location.state.referer) || '/';

  function postLogIn() {
    Axios({
      method: 'POST',
      data: {
        email,
        password
      },
      withCredentials: true,
      url: 'http://localhost:8080/users/login'
    })
    .then(res => {
        if (res.status === 200) {
            setUser(res.data);
        }
        else {
            setIsError(true);
        }
    })
    .catch(e => {setIsError(true)});
  }
  if (user) {
    return <Redirect to={referer}/>
  }

  return (
    <Card>
      <Icon shadow="4px 4px 4px #333" size={"50%"} src={logoImg} />
      <Form>
        <Input type='email' value={email} onChange={e => {setEmail(e.target.value);}} placeholder='Email' required/>
        <Input type='password' value={password} onChange={e => {setPassword(e.target.value);}} placeholder='Password' required/>
        <MagnetBox bottom height={"60px"}>
          <Button primary onClick={postLogIn}>Sign In</Button>
        </MagnetBox>
      </Form>
      <MagnetBox height={"50px"}>
        <Link to='/login/signup'>Don't have an account?</Link>
      </MagnetBox>
        {isError && <Error>The email or password provided were incorrect</Error>}
    </Card>
  );
}

export default Signin;
