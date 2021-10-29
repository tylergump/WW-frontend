import React, {Component} from "react"
import { connect } from "react-redux"
import { updateUser } from "../store/actions"

function mapDispatchToProps(dispatch) {
    return {
      updateUser: user => dispatch(updateUser(user))
    }
  }

const EditUser = ({
 

    
})









this.props.updateUser(this.state)


const UserUpdate = connect(null, mapDispatchToProps)(ConnectedLogin)

export default UserUpdate