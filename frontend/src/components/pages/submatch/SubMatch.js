import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camera from './camera_shy.png'
// import PrefForm from './PrefForm';
const key = 'Y839YgEBrBaQwAPENPuEHuaFHLfpoTbXdSdrcjanIIEcf2fCPk'
const secret = 'DBhH8WzYYgB3UYLiUjfaG03DCh8KvyCTPa22Hcrl'
const age = 'Baby'
const status = 'adoptable'

export default class Matches extends Component {
//     constructor(props) {
//         super(props)
  
//         this.state = {
//             animals: [{}]
//     }
// }

render () {
      
 console.log(this.props.animals)
      
 if (!this.props.animals.animals) {
    return <div>Searching for Matches...</div>
  } else {

        return (
  
            <div className="App">
              <h2>Do we have a match for you!</h2>
              <Carousel id="carousel">
              {this.props.animals.animals.map(animal =>(
                
                <div> 
                <img id="matches" src={animal.primary_photo_cropped ? animal.primary_photo_cropped.small : camera} alt="Camera Shy"></img>
                <a href={animal.url}><h1 key={animal.name}>{animal.name}</h1></a>
                <h2>{animal.age}</h2>
                
                </div>
                
              ))}
              </Carousel>
            </div>

        );
      }}
      } 