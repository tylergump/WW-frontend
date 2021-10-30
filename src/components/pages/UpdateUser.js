import React from "react"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
  return {
      username: state.username,
      password: state.password,
      email: state.email,
      zipcode: state.zipcode
  }
}

const ConnectedUserDisplay = ({ username, password, email, zipcode}) => (
  <div id="account">
      <h2>Welcome, {username}!</h2> 
      <table>
      <tbody>
        <tr>
          <td><strong>Username:</strong> {username}</td>
        </tr>
        <tr>
          <td><strong>Password:</strong> Password Secure</td>
        </tr>
        <tr>
          <td><strong>Email:</strong> {email}</td>
        </tr>
        <tr>
          <td><strong>Zipcode:</strong> {zipcode}</td>
        </tr>
        </tbody>
      </table> <br/>
      <button class="btn">
        <Link to="/edit">Edit</Link>
      </button>
      <button class="btn">Delete</button>
  </div>
)



const UserDisplay = connect(mapStateToProps)(ConnectedUserDisplay)

export default UserDisplay