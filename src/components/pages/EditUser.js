import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { updateUser } from "../store/actions"


function mapDispatchToProps(dispatch) {
    return {
      updateUser: user => dispatch(updateUser(user))
    }
  }

  const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
        zipcode: state.zipcode
    }
  }

  class ConnectedEditUser extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: this.props.username,
            email: this.props.email,
            zipcode: this.props.zipcode,
            password: "******",
            preferences: [],
            redirect: null
        }
    }

       getUser = async (e) => {
            e.preventDefault()
            const url = process.env.REACT_APP_BASE_URL+'/users/update/'
            console.log(url)
            const updateUser = {
              username: e.target.username.value,
              password: e.target.password.value,
              email: e.target.email.value,
              zipcode: e.target.email.value,
            }
            console.log("before try")
            try {
        
              const response = await fetch(url, {
                method: 'GET',
                body: JSON.stringify(updateUser),
                headers: {
                  'Content-Type': 'application/json'
                },
                credentials: "include"
              })
        
              console.log(response)
              console.log("BODY: ",response.body)
        
              const responseJson = await response.json()
              console.log(responseJson)
    
              if (response.status === 200) {
                console.log("got user")
                await this.setState({
                  id: responseJson._id,
                  username: responseJson.username,
                  // we don't want to store the password
                  email: responseJson.email,
                  zipcode: responseJson.zipcode,
                  authenticated: true,
                  redirect: "/matches"
                  })
                  this.props.updateUser(this.state)
              } console.log(this.state)
            }
            catch (err) {
              console.log('Error => ', err);
            }
          }
          

    onSubmit = async (e) => {
      e.preventDefault()
      await this.setState({
        username: e.target.username.value,
        password: e.target.password.value,
        email: e.target.email.value,
        zipcode: e.target.zipcode.value
      }) 
        this.props.updateUser(this.state)
       this.update(e)
       console.log('state at line 25', this.state)
    }

    update = async (e) => {
      console.log('state at line 29', this.state)
        const url = process.env.REACT_APP_BASE_URL+'/users/update/'
        console.log(url)
        try {
          console.log("this is after try")
          const response = await fetch(url, {
            method: 'PUT',
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
          if (response.status === 200) {
            console.log("this is my response on 37", response)
            this.setState({ redirect: "/account"})
          }
        }
        catch (err) {
          console.log('Error => ', err);
        }
       
      }

      onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
      }

     

    render() {
      if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
      }
     
        return (
            <React.Fragment>
             <strong id="UserForm">Edit Account</strong><br/>
              <form onSubmit={this.onSubmit}>
                  <label htmlFor="name">Username: </label> 
                  <input type="text" id="name" name="username"  value={this.state.username} onChange={(value) => this.onChange(value)}/>
                  <br/>
                  <label htmlFor="name">Password: </label>
                  <input type="password" id="password" name="password" value={this.state.password} onChange={(value) => this.onChange(value)}/>
                  <br/>
                  <label htmlFor="name">Email: </label>
                  <input type="text" id="email" name="email" value={this.state.email} onChange={(value) => this.onChange(value)}/>
                  <br/>
                  <label htmlFor="name">Zip Code: </label>
                  <input id="zipcode" name="zipcode" type="number" pattern="[0-9]*" value={this.state.zipcode} onChange={(value) => this.onChange(value)}></input>
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




const UserUpdate = connect(mapStateToProps, mapDispatchToProps)(ConnectedEditUser)

export default UserUpdate