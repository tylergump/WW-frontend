import React, {Component} from "react"
import { Redirect } from "react-router-dom"

import { connect } from "react-redux"
import { updateUser } from "../store/actions"

function mapDispatchToProps(dispatch) {
  return {
    updateUser: user => dispatch(updateUser(user))
  }
}

class ConnectedLogin extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            zipcode: "",
            redirect: null
        }
    }
  
    
    loginUser = async (e) => {
        console.log('loginUser')
        e.preventDefault()
        const url = process.env.REACT_APP_BASE_URL+'/users/login/'
        console.log(url)
        const loginBody = {
          username: e.target.username.value,
          password: e.target.password.value
        }
        console.log("before try")
        try {
    
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(loginBody),
            headers: {
              'Content-Type': 'application/json'
            },
            credentials: "include"
          })
    
          console.log(response)
          console.log("BODY: ",response.body)
    
          const responseJson = await response.json()
          console.log(responseJson.username)

          if (response.status === 200) {
            console.log("user signed in")
            await this.setState({
              username:responseJson.username,
              // we don't want to store the password
              email: responseJson.email,
              zipcode: responseJson.zipcode,
              redirect: "/matches"
              })
              this.props.updateUser(this.state)
          } console.log(this.state)
        }
        catch (err) {
          console.log('Error => ', err);
        }
      }

      // userAccount = () => {
      //   this.setState ({
      //     username:"responseJson.username",
      //     password: "responseJson.password",
      //     email: "responseJson.email",
      //     zipcode: "responseJson.zipcode"
      //   })
      //   console.log(this.state)
      // }

    render() {
      if (this.state.redirect) {
        return <Redirect to={this.state.redirect} />
        }
        return (
            <React.Fragment>
            <strong id="UserForm">Login </strong> <br/>
             <form onSubmit={this.loginUser}>
                <label htmlFor="name">Username: </label>
                <input type="text" id="name" name="username"/> <br/>
                <label htmlFor="name">Password: </label>
                <input type="password" id="password" name="password"/> <br/>
                <input type="submit" value="Login" />
            </form>
            </React.Fragment>
        )
    }
}

const Login = connect(null, mapDispatchToProps)(ConnectedLogin)
export default Login