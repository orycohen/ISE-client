import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./Contexts/auth";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import homeImg from './img/home.png';
import { Icon, MagnetBox } from './Components/Styled';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      user: props.user
    }
    
    this.setUser = this.setUser.bind(this);
    this.redirectHandler = this.redirectHandler.bind(this);
    this.emailInputRef = React.createRef();
  }

  redirectHandler() {
    this.emailInputRef.current.focus();
  }
  
  setUser(user) {
    this.setState({user: user});
  }

  render() { 
    return (
      <AuthContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
        <Router>
          <div className="AppWrapper">
            <div>
            </div>
            <div>
              <div>
                {
                  !(this.state.user) ?
                  (
                    <nav className="navbar">
                      <li>
                        <Link to="/">
                          <MagnetBox>
                            <Icon clickable shadow="4px 4px 4px #333" size={"50px"} src={homeImg} />
                          </MagnetBox>
                        </Link>
                      </li>
                      <li>
                        <Link to="/about">About Us</Link>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                      <li>
                        <Link to="/login">Login</Link>
                      </li>
                    </nav>
                  ) :
                  (
                    <nav className="navbar">
                      <li>
                        <Link to="/dashboard">Dashboard</Link>
                      </li>
                    </nav>
                  )
                }
              </div>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Route path="/login" component={Login}/>
                <PrivateRoute path="/dashboard" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
