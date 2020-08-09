import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import HomePage from "./pages/Home";
import Admin from "./pages/Admin";
import LoginPage from './pages/Login';
import { AuthContext } from "./Contexts/auth";
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    
    this.state = {
      user: null
    }
    
    this.setUser = this.setUser.bind(this);
  }

  async handleUserStatus() {
    try {
      let res = await Axios({
        method: "GET",
        withCredentials: true,
        url: "http://localhost:8080/users/user"
      });
      console.log("in the function handleUserStatus, res.data is: ", res.data);
      this.setState({user: res.data});
    }
    catch (err) {
      // The user is not logged in. TODO Handle the error.
    }
  }
  
  setUser(user) {
    this.setState({user: user});
  }

  componentDidMount() {
    console.log("Checking user");
    (async () => {
      await this.handleUserStatus();
    })();
  }

  render() { 
    console.log("The user is: ", this.state.user);
    return (
      <AuthContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home Page</Link>
              </li>
              <li>
                <Link to="/admin">Admin Page</Link>
              </li>
            </ul>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <PrivateRoute path="/admin" component={Admin} />
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
