import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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

class ConnectedDeleteUser extends Component {

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
        const url = process.env.REACT_APP_BASE_URL+'/users/delete/'
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
              redirect: "/"
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
    username: "",
    password: "",
    email: "",
    zipcode: "",
    redirect: "/"
  }) 
    this.props.updateUser(this.state)
   this.update(e)
   console.log('state at line 25', this.state)
}

delete = async (e) => {
  console.log('state at line 29', this.state)
    const url = process.env.REACT_APP_BASE_URL+'/users/delete/'
    console.log(url)
    try {
      console.log("this is after try")
      const response = await fetch(url, {
        method: 'DELETE',
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
        this.setState({ redirect: "/"})
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
   
  }

  onChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
    
  //   componentDidMount() {
  //       fetch(process.env.REACT_APP_BASE_URL).then(function (response) {
  //         return response.json();
  //       }).then(function (result) {
  //         this.setState({
  //           usersData: result
  //         });
  //         }.bind(this))
  //     }
  
  // handleClick = userId => {
  //   const requestOptions = {
  //     method: 'DELETE'
  //   };
  //   fetch(process.env.REACT_APP_BASE_URL+'/users/delete/' + userId, requestOptions).then((response) => {
  //     return response.json();
  //   }).then((result) => {
  //       const findIndex = this.state.usersData.findIndex(usersData => usersData._id)
  //       const copyUsers = [...this.state.usersData]
  //       copyUsers.splice(findIndex, 1)
  //       this.setState({
  //         usersData: copyUsers
  //           })
  //       })
  //   } 

  render () {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
      }
    // return this.state.usersData.map((user) => {
        return (
        <div>
        <h1 className="mt-4">Do you want to delete your account?</h1>
          {/* <button class="btn" onClick={() => { this.handleClick(user._id) }} className="delete-btn">Yes</button> */}
          <form>
          <input type="submit" value="Yes"/>
          <button class="btn">
              <Link to="/account">No</Link>
          </button>
          </form>
        </div>
        )
      }
        
  }
  const UserUpdate = connect(mapStateToProps, mapDispatchToProps)(ConnectedDeleteUser)

export default UserUpdate