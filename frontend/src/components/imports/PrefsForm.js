import React, { Component } from 'react'
import { connect } from "react-redux"
import { addPreference } from '../store/actions'


const key = 'Y839YgEBrBaQwAPENPuEHuaFHLfpoTbXdSdrcjanIIEcf2fCPk'
const secret = 'DBhH8WzYYgB3UYLiUjfaG03DCh8KvyCTPa22Hcrl'

function mapDispatchToProps(dispatch) {
    return {
        addPreference: preference => dispatch(addPreference(preference))
    }
}

class ConnectedPrefForm extends Component {
    
  constructor(props) {
      super(props)

      this.state = {
          type:'',
          age:'',
          gender:''
      }
  }


  handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      console.log(this.state)
      let type = document.getElementById('type')
      let age = document.getElementById('age')
      let gender = document.getElementById('gender')
      let size = document.getElementById('size')

      this.props.addPreference({ type, age, gender, size })

      fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body: 'grant_type=client_credentials&client_id=' + key + '&client_secret=' + secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => {
        
            // Return the response as JSON
            return res.json();
        
        }).then(function (data) {
        
            // Log the API data
            console.log('token', data);
        
            // Return a second API call
            // This one uses the token we received for authentication
            return fetch(`https://api.petfinder.com/v2/animals?type=${type.value}&age=${age.value}&gender=${gender.value}&size${size}`, {
                headers: {
                    'Authorization': data.token_type + ' ' + data.access_token,
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            });
        
        }).then(res => {
        
            // Return the API response as JSON
            return res.json();
        
        }).then(animals => {
            
            this.setState({
                isLoaded: true,
                animals:animals
            })
            // Log the pet data
            console.log(animals);
            console.log(type.value, age.value, gender.value, size.value)
        }).catch(function (err) {
        
            // Log any errors
            console.log('something went wrong', err);
            console.log(type.value, age.value, gender.value, size.value)
        });
  }


render() {


    const {type, age, gender, size} = this.state
    return (
        <div class="search">
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label id="petformlabel">Type </label>
                    <select 
                    type='text'
                    name='type'
                    value={type}
                    id='type'
                    onChange= {this.handleChange}
                    >
                        <option value="Dog">Dog</option>
                        <option value="Cat">Cat</option>
                    </select>
                </div>
                <div>
                    <label id="petformlabel">Age </label>
                    <select 
                    type='text'
                    name='age'
                    value={age}
                    id='age'
                    onChange= {this.handleChange}
                    >
                        <option value="Baby">Baby</option>
                        <option value="Young">Young</option>
                        <option value="Adult">Adult</option>
                        <option value="Senior">Senior</option>
                    </select>
                </div>
                <div>
                    <label id="petformlabel">Gender </label>
                    <select 
                    type='text'
                    name='gender'
                    value={gender}
                    id='gender'
                    onChange= {this.handleChange}
                    >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option> 
                    </select>
                </div>
                <div>
                    <label id="petformlabel">Size </label>
                    <select 
                    type='text'
                    name='size'
                    value={size}
                    id='size'
                    onChange= {this.handleChange}
                    >
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xlarge">Extra Large</option>
                    </select>
                </div> <br/>
                <div>
                    <button class="btn" type='submit'>Search</button>
                </div>
            </form>
        </div>
    )
  }

}

const PrefForm = connect(null, mapDispatchToProps)(ConnectedPrefForm)

export default PrefForm