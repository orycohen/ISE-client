import React from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./Contexts/auth";
import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import About from './Components/Home/About';
import Contact from './Components/Home/Contact';
import Dashboard from './Components/Dashboard/Dashboard';
import DashboardNav from './DashboardNav/DashboardNav';
import WelcomeNav from './WelcomeNav/WelcomeNav';
import LobbyPage from './LobbyPage/LobbyPage';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user: props.user,
      homeDivWidth: {
        width: props.user ? "70px" : "100%"
      }
    }
    
    this.setUser = this.setUser.bind(this);
  }

  setUser(user) {
    this.setState({
      user: user,
      homeDivWidth: {
        width: user ? "70px" : "100%"
      }
    });
  }
  
  render() { 
    return (
      <AuthContext.Provider value={{user: this.state.user, setUser: this.setUser}}>
        <Router>
          <div className="AppWrapper">
            <div style={this.state.homeDivWidth} className="HomeDiv">
                {
                  this.state.user ?  <DashboardNav/> : <LobbyPage/>
                }
            </div>
            <div>
            {
              !(this.state.user) ?
              (
                <> 
                  <WelcomeNav/>
                  <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/about" component={About} />
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                  </Switch>
                </>
              ) :
              (
                <>
                  <Switch>
                    <Route exact path='/'>
                      <Redirect to='/dashboard/home'/>
                    </Route>
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                  </Switch>
                </>
              )
            }
            </div>
          </div>
        </Router>
      </AuthContext.Provider>
    );
  }
}

export default App;
