import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import camera from './camera_shy.png'
// import PrefForm from './PrefForm';
const key = 'Y839YgEBrBaQwAPENPuEHuaFHLfpoTbXdSdrcjanIIEcf2fCPk'
const secret = 'DBhH8WzYYgB3UYLiUjfaG03DCh8KvyCTPa22Hcrl'
const age = 'Baby'
const status = 'adoptable'

export default class Matches extends Component {


render () {
      
 console.log(this.props.animals)
      
 if (!this.props.animals.animals) {
    return <div></div>
  } else {

        return (
  
            <div className="App carousel-container mt-2">
              <h2 className="mb-3">Do we have a match for you!</h2>
              <Carousel interval={null}>

              {this.props.animals.animals.map(animal =>(
                <Carousel.Item>
                <div className="img-caption-container"> 
                <img id="matches" src={animal.primary_photo_cropped ? `https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${animal.id}/1/?bust=1546042081&width=600` : camera} alt="Camera Shy"></img>
                <Carousel.Caption className="caption">
                <a href={animal.url}><h3 id="petname" key={animal.name}>{animal.name}</h3>
                <p className="light-text">{animal.age}</p></a>
                </Carousel.Caption>
                </div>
                </Carousel.Item>
              ))}

              </Carousel>
            </div>

        );
      }}
      } 