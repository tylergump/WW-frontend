import React, {Component} from "react"
import User from "../Users"
// import Login from "../Login"

export default class UpdateUser extends Component {
    constructor (props) {
        super(props)

        this.state = {
          users: [],
          modalOPen: false,
          updateUser: {},
          // username: "",
          // password: "",
          // email: "",
          // zipcode: ""
        }
    }


    // userAccount = () => {
    //    const url= (process.env.REACT_APP_BASE_APP + "/users/account/", {
    //     credentials: "include"
    //   })
    //   .then (res => {
    //     if(res.staus === 200) {
    //       console.log(res.json)
    //       return res.json ()
    //     } else {
    //       return []
    //     }
    //   }) .then (data => {
    //     console.log(data)
    //     this.setState({users: data})
    //   })
    // }

    // updateUser = async (e) => {
    //   e.preventDefault()
    //   const url = process.env.REACT_APP_BASE_URL+'/account/'
    //   console.log(url)
    //   const userBody = {
    //     username: e.target.username.value,
    //     password: e.target.password.value,
    //     email: e.target.password.value,
    //     zipcode: e.target.password.value
    //   }
    //   console.log("before try")
    //   try {
  
    //     const response = await fetch(url, {
    //       method: 'PUT',
    //       body: JSON.stringify(userBody),
    //       headers: {
    //         'Content-Type': 'application/json'
    //       },
    //       credentials: "include"
    //     })
  
    //     console.log(response)
    //     console.log("BODY: ",response.body)
  
    //     if (response.status === 200) {
    //       console.log("user profile")
    //     }
    //   }
    //   catch (err) {
    //     console.log('Error => ', err);
    //   }
    // }

    // handleSubmit = async (e) => {
    //   e.preventDefault()
    //   const url = process.env.REACT_APP_BASE_URL + '/users/' + this.state.updateUser._id
    //   try{
    //     const response = await fetch( url , {
    //       method: 'PUT',
    //       body: JSON.stringify({
    //         username: e.target.username.value,
    //         password: e.target.password.value,
    //         email: e.target.email.value,
    //         zipcode: e.targe.zipcode.value
    //       }),
    //       headers: {
    //         'Content-Type' : 'application/json'
    //       },
    //       credentials: "include"
    //     })
  
    //     if (response.status === 200){
    //       const updatedUser = await response.json()
    //       const findIndex = this.state.users.findIndex(user => user._id === updatedUser._id)
    //       const copyUsers = [...this.state.users]
    //       copyUsers[findIndex] = updatedUser
    //       this.setState({
    //         users: copyUsers,
    //         modalOpen:false
    //       })
    //     }
    //   }
    //   catch(err){
    //     console.log('Error => ', err);
    //   }
    // }

    //   handleChange = (e)=>{
    //     this.setState({
    //       [e.target.username]: e.target.value,
    //       [e.target.password]: e.target.value,
    //       [e.target.email]: e.target.value,
    //       [e.target.zipcode]: e.target.value

    //     })
    //   }
     
    //    showEditForm = (user)=>{
    //      this.setState({
    //        modalOpen:true,
    //        username: this.state.username,
    //        password: this.state.password,
    //        email: this.state.email,
    //        zipcode: this.state.zipcode,
    //        updateUser:user
    //      })
    //    }

  

    render() {
        return (
            <React.Fragment>
            <h1> User Account </h1>
            {/* <h2>{this.state.username} </h2> */}
       

    
        <br/>
        <button className="btn">Edit Account</button>
{/* 
          {
            this.state.modalOpen &&

            <form onSubmit={this.handleSubmit}>
              <label>Name: </label>
              <input name="name" value={this.state.name} onChange={this.handleChange}/> <br/>

              <label>Description: </label>
              <input name="description" value={this.state.description} onChange={this.handleChange}/>

              <button>submit</button>

            </form>
          } */}
          <button className="btn">Delete Account</button>
            </React.Fragment>
        )
    }
}