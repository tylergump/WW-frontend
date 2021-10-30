import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { updateUser } from "../store/actions"

function mapDispatchToProps(dispatch) {
    return {
      updateUser: user => dispatch(updateUser(user))
    }
  }

  class ConnectedEditUser extends Component {
    constructor (props) {
        super(props)

        this.state = {
            username: "",
            password: "",
            email: "",
            zipcode: "",
            preferences: [],
            redirect: null
        }
    }

    getUserById = (id) => {
        fetch(this.props.baseURL + '/users/' + id,  {
          credentials: 'include'
        })
        .then(response => {
          const user = this.state.users.find(users => users._id === id)
          if (response.status === 200) {
            console.log(response)
            return user
          } else {
            return []
          }
          }) 
        .then(data => {
          console.log(data)
          this.setState({
            users: data
          })
        })
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
          if (response.status === 201) {
            console.log("this is my response on 37", response)
            this.setState({ redirect: "/account"})
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
             <strong id="UserForm">Edit Account</strong><br/>
              <form onSubmit={this.onSubmit}>
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




const UserUpdate = connect(null, mapDispatchToProps)(ConnectedEditUser)

export default UserUpdate