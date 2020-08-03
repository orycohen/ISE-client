import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('The form was submitted with the following data:');
        console.log(this.state);

        fetch('http://localhost:8080/users/login', {
      method: 'POST',
      
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: 'ori'
      })
    //   credentials: 'include'
    })
      .then(res => {
        if (res.status === 422) {
          throw new Error('Validation failed.');
        }
        if (res.status !== 200 && res.status !== 201) {
          console.log('Error!');
          throw new Error('Could not authenticate you!');
        }
        return res.json();
      })
      .then(resData => {
        console.log(resData);
        // this.setState({
        //   isAuth: true,
        //   token: resData.token,
        //   authLoading: false,
        //   userId: resData.userId
        // // });
        // localStorage.setItem('token', resData.token);
        // localStorage.setItem('userId', resData.userId);
        // const remainingMilliseconds = 60 * 60 * 1000;
        // const expiryDate = new Date(
        //   new Date().getTime() + remainingMilliseconds
        // );
        // localStorage.setItem('expiryDate', expiryDate.toISOString());
        // this.setAutoLogout(remainingMilliseconds);
      })
      .catch(err => {
        console.log(err);
        // this.setState({
        //   isAuth: false,
        //   authLoading: false,
        //   error: err
        // });
      });

    }

    render() {
        return (
        <div className="FormCenter">
            <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
            <div className="FormField">
                <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
                <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                <label className="FormField__Label" htmlFor="password">Password</label>
                <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleChange} />
              </div>

              <div className="FormField">
                  <button className="FormField__Button mr-20">Sign In</button> <Link to="/sign-up" className="FormField__Link">Create an account</Link>
              </div>
            </form>
          </div>
        );
    }
}

export default SignInForm;