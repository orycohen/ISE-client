import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from '../Login/Login';
import AboutPage from './About';
import Contact from './Contact';
import Admin from '../../Components/Dashboard/Admin';
import PrivateRoute from '../../PrivateRoute';

class Lobbi extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home Page</Link>
            </li>
            <li>
              <Link to='/login'>Login</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
          </ul>
          <Route exact path='/' component={HomePage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/contact' component={Contact} />
          <PrivateRoute path='/admin' component={Admin} />
        </div>
      </Router>
    )
  }
}

export default Lobbi;
