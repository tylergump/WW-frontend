import React, {Component} from "react"
import { Redirect } from "react-router-dom"


export default class Register extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            zipcode: "",
            preferences: [],
            redirect: null
        }
    }

    onSubmit = async (e) => {
      e.preventDefault()
      await this.setState({
        username: e.target.username.value,
        email: e.target.email.value,
        zipcode: e.target.zipcode.value
      }) 
       this.register(e)
       console.log('state at line 25', this.state)
    }

    register = async (e) => {
      console.log('state at line 29', this.state)
        const url = process.env.REACT_APP_BASE_URL+'/users/signup/'
        console.log(url)
        try {
          console.log("this is after try")
          const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
              username: e.target.username.value,
              password: e.target.password.value,
              email: e.target.email.value,
              zipcode: e.target.zipcode.value
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
          console.log("line 36")
          if (response.status === 201) {
            console.log("this is my response on 37", response)
            this.setState({ redirect: "/login"})
          }
        }
        catch (err) {
          console.log('Error => ', err);
        }
       
      }

    render() {
      if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
      }
        return (
            <React.Fragment>
             <h1 className="mt-4">Create Account</h1>
              <form onSubmit={this.onSubmit} className="mt-2">
                  <label htmlFor="name">Username: </label> 
                  <input type="text" id="name" name="username"/>
                  <br/>
                  <label htmlFor="name">Password: </label>
                  <input type="password" id="password" name="password"/>
                  <br/>
                  <label htmlFor="name">Email: </label>
                  <input type="text" id="email" name="email"/>
                  <br/>
                  <label htmlFor="name">Zip Code: </label>
                  <input id="zipcode" name="zipcode" type="number" pattern="[0-9]*"></input>
                  <br/>
                  {/* <label htmlFor="name">Preferences: </label>
                  <input type="checkbox" id="preferences" name="preferences"
                      value= 
                  /> */}
                  <input type="submit" value="Save" />
              </form>
            </React.Fragment>
        )
    }
}
