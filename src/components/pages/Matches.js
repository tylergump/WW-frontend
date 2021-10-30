import React, { Component, Fragment } from 'react'
import Match from './submatch/SubMatch'
import bootstrap from 'bootstrap'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Greeting from '../imports/Greeting';
const key = 'Y839YgEBrBaQwAPENPuEHuaFHLfpoTbXdSdrcjanIIEcf2fCPk'
const secret = 'DBhH8WzYYgB3UYLiUjfaG03DCh8KvyCTPa22Hcrl'





export default class PrefForm extends Component {
    
  constructor(props) {
      super(props)

      this.state = {
          type:'',
          age:'',
          gender:'',
          size:'',
          animals: [
            {animals:  []
          
      }],
          isLoaded: false
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
  let {isLoaded, animals} = this.state
  console.log(this.state)
  
  return (
      <div>
          <Greeting />
          <form onSubmit={this.handleSubmit}>
              <div>
                  <label>Type: </label>
                  <select 
                  type='text'
                  name='type'
                  value={type}
                  id='type'
                  onChange= {this.handleChange}
                  >
                    <option value="">Either</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                  </select>
              </div>
              <div>
                  <label>Age: </label>
                  <select 
                  type='text'
                  name='age'
                  value={age}
                  id='age'
                  onChange= {this.handleChange}
                  >
                    <option value="">Any</option>
                    <option value="Baby">Baby</option>
                    <option value="Young">Young</option>
                    <option value="Adult">Adult</option>
                    <option value="Senior">Senior</option>
                  </select>
              </div>
              <div>
                  <label>Gender: </label>
                  <select 
                  type='text'
                  name='gender'
                  value={gender}
                  id='gender'
                  onChange= {this.handleChange}
                  >
                    <option value="">Either</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option> 
                  </select>
              </div>
              <div>
                  <label>Size: </label>
                  <select 
                  type='text'
                  name='size'
                  value={size}
                  id='size'
                  onChange= {this.handleChange}
                  >
                    <option value="">Any</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="xlarge">Extra Large</option>
                  </select>
              </div>
              <div>
                  <button class="btn" type='submit'>Submit</button>
                </div>
                
            </form>
            <Match animals = {animals}></Match>

        <div>
        </div>

        </div>
    )
  }

}