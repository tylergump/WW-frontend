import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import {connect} from "react-redux"
import { Link } from 'react-router-dom'


const mapStateToProps = state => {
  console.log(state)
  return {
      _id: state._id,
      username: state.username,
      email: state.email,
      zipcode: state.zipcode
  }
}



///This is the holiday code ///

// deleteHoliday = (id) => {
//   // console.log(id)
//   fetch(baseUrl + '/holidays/' + id, {
//   method: 'DELETE',
//   credentials: "include"
// }).then( res => {
//   // console.log(res)
//   // if I checked for a 200 response code
//   const findIndex = this.state.holidays.findIndex(holiday => holiday._id === id)
//   const copyHolidays = [...this.state.holidays]
//   copyHolidays.splice(findIndex, 1)
//   this.setState({
//     holidays: copyHolidays
//   })
// })
// }

// userAccount = () => {
//   this.setState ({
//     username:"responseJson.username",
//     password: "responseJson.password",
//     email: "responseJson.email",
//     zipcode: "responseJson.zipcode"
//   })
//   console.log(this.state)
// }




 const ConnectedUserDisplay = ({ username, password, email, zipcode}) => (
  <div id="account">
      <h1 className="mt-4">Welcome, {username}</h1> 
      <table>
      <tbody>
        <tr>
          <td><strong>Username:</strong> {username}</td>
        </tr>
        {/* <tr>
          <td><strong>Password:</strong> Password Secure</td>
        </tr> */}
        <tr>
          <td><strong>Email:</strong> {email}</td>
        </tr>
        <tr>
          <td><strong>Zipcode:</strong> {zipcode}</td>
        </tr>
        </tbody>
      </table> <br/>
      <button className="btn">
        <Link to="/edit">Edit</Link>
      </button>
      <button className="btn">
      <Link to="/delete">Delete</Link>
      </button>
  </div>
)
 


const UserDisplay = connect(mapStateToProps)(ConnectedUserDisplay)

export default UserDisplay