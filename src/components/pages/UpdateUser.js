import React from "react"
import {connect} from "react-redux"
// import { updateUser } from "../store/actions"

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
      </table>
  </div>
)

// function mapDispatchToProps(dispatch) {
//   return {
//     updateUser: user => dispatch(updateUser(user))
//   }
// }


const UserDisplay = connect(mapStateToProps)(ConnectedUserDisplay)

export default UserDisplay