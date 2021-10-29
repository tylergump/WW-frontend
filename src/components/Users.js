import React, {Component} from "react"

export default class User extends Component {
    constructor(props) {
      super(props)
  
      this.state = {
        users: [],
        modalOpen: false,
        userToBeEdited:{},
      }
    }
  
    getUser = () => {
      fetch(process.env.REACT_APP_BASE_URL + "/users",{
        credentials: "include"
      })
      .then(res => {
        if(res.status === 200) {
          return res.json()
        } else {
          return []
        }
      }).then(data => {
        console.log(data)
        this.setState({ users: data })
      })
    }
  
    addUser = (newUser) => {
      const copyUsers = [...this.state.users]
      copyUsers.push(newUser)
      this.setState({
        users: copyUsers,
      })
    }
}