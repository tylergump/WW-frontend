import React, {Component} from "react"
import { Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { updateUser } from "../store/actions"
import axios from "axios"


function mapDispatchToProps(dispatch) {
    return {
      updateUser: user => dispatch(updateUser(user))
    }
  }

  const mapStateToProps = state => {
    return {
        username: state.username,
        email: state.email,
        zipcode: state.zipcode,
        id: state.id
    }
  }

  class ConnectedEditUser extends Component {
    constructor (props) {
        super(props)

        this.state = {
            id: this.props.id,
            username: this.props.username,
            email: this.props.email,
            zipcode: this.props.zipcode,
            password: "******",
            preferences: [],
            redirect: null
        }
    }

      //  getUser = async (e) => {
      //       e.preventDefault()
      //       const url = process.env.REACT_APP_BASE_URL+'/users/update/'
      //       console.log(url)
      //       const updateUser = {
      //         username: e.target.username.value,
      //         password: e.target.password.value,
      //         email: e.target.email.value,
      //         zipcode: e.target.email.value,
      //       }
      //       console.log("before try")
      //       try {
        
      //         const response = await fetch(url, {
      //           method: 'GET',
      //           body: JSON.stringify(updateUser),
      //           headers: {
      //             'Content-Type': 'application/json'
      //           },
      //           credentials: "include"
      //         })
        
      //         console.log(response)
      //         console.log("BODY: ",response.body)
        
      //         const responseJson = await response.json()
      //         console.log(responseJson)
    
      //         if (response.status === 200) {
      //           console.log("got user")
      //           await this.setState({
      //             id: responseJson._id,
      //             username: responseJson.username,
      //             // we don't want to store the password
      //             email: responseJson.email,
      //             zipcode: responseJson.zipcode,
      //             authenticated: true,
      //             redirect: "/matches"
      //             })
      //             this.props.updateUser(this.state)
      //         } console.log(this.state)
      //       }
      //       catch (err) {
      //         console.log('Error => ', err);
      //       }
      //     }
          

    onSubmit = async (e) => {
      e.preventDefault()
      console.log('submit user update line 88', this.state)

      // ------- 500 error ---------

    //   const response = await axios({
    //     method: 'put',
    //     url: `${process.env.REACT_APP_BASE_URL}/users/update/${this.state.id}`,
    //     data: {
    //       username: this.state.username,
    //       email: this.state.email,
    //       zipcode: this.state.zipcode,
    //       password: this.state.password
    //     }
    //  }).catch(err => {
    //     console.log(err);
    //  });

    //  console.log(response)

     // ------   works now, but all   ------

     const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/users/update/${this.state.id}`, {
        username: this.state.username,
        email: this.state.email,
        zipcode: this.state.zipcode,
        password: this.state.password
      })
      .then(response => this.setState({ 
        username: response.data.username, 
        email: response.data.email,
        zipcode: response.data.zipcode}))
            .catch(error => {
              console.error('There was an error!', error);
            });
     
      console.log(response)

    //----------------------------------------//

        // ----> if you figure why its not updating the user info, uncomment:

        // this.props.updateUser(this.state)
        // this.setState({redirect: '/account'})

        // -------> these update the frontend user info & redirect back to the account page, it is set to display what the user input in the text fields, not a new get request, so it will display the correct data no matter what

        //--------------------------------------//
       
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
             <h1 className="mt-4">Edit Account</h1><br/>
              <form onSubmit={this.onSubmit} className="mt-1">
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