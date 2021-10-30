import React, {Component} from 'react'
import { Link } from 'react-router-dom'

export default class ConnectedDeleteUser extends Component {
    constructor(props) {
      super();
      this.state = {
        usersData: []
      };
    }
    
    
    componentDidMount() {
        fetch(process.env.REACT_APP_BASE_URL).then(function (response) {
          return response.json();
        }).then(function (result) {
          this.setState({
            usersData: result
          });
          }.bind(this))
      }
  
  handleClick = userId => {
    const requestOptions = {
      method: 'DELETE'
    };
    fetch(process.env.REACT_APP_BASE_URL+'/users/delete/' + userId, requestOptions).then((response) => {
      return response.json();
    }).then((result) => {
        const findIndex = this.state.usersData.findIndex(usersData => usersData._id)
        const copyUsers = [...this.state.usersData]
        copyUsers.splice(findIndex, 1)
        this.setState({
          usersData: copyUsers
            })
        })
    } 

  render () {
    // return this.state.usersData.map((user) => {
        return (
        <div>
        <h1 className="mt-4">Do you want to delete your account?</h1>
          {/* <button class="btn" onClick={() => { this.handleClick(user._id) }} className="delete-btn">Yes</button> */}
          <button class="btn">Yes</button>
          <button class="btn">
              <Link to="/account">No</Link>
          </button>
        </div>
        )
      }
        
  }