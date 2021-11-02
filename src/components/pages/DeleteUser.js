import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"

import axios from 'axios'


const mapStateToProps = state => {
  return {
      id: state.id
  }
}

class ConnectedDeleteUser extends Component {

  constructor (props) {
    super(props)

    this.state = {
        id: this.props.id,
        redirect: null
    }
}
      

onSubmit = async (e) => {
  e.preventDefault()
  console.log(this.props.id, this.state.id)

  await axios.delete(`${process.env.REACT_APP_BASE_URL}/users/delete/${this.state.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);

        this.setState ({
          redirect: "/"
        })
      })

   
  }
  
  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
      }
        return (
        <div>
        <h1 className="mt-4">Do you want to delete your account?</h1>
          <form onSubmit={this.onSubmit}>
          <input type="submit" value="Yes"/>
          <button class="btn">
              <Link to="/account">No</Link>
          </button>
          </form>
        </div>
        )
      }
        
  }
  const UserUpdate = connect(mapStateToProps)(ConnectedDeleteUser)

export default UserUpdate