import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import camera from '../assets/camera_shy.png'
import PrefsForm from './PrefsForm';
const key = 'Y839YgEBrBaQwAPENPuEHuaFHLfpoTbXdSdrcjanIIEcf2fCPk'
const secret = 'DBhH8WzYYgB3UYLiUjfaG03DCh8KvyCTPa22Hcrl'
const age = 'Baby'
const status = 'adoptable'

export default class Matches extends Component {
    constructor(props) {
        super(props)
        this.state= {
          animals: [],
          isLoaded: false
          
        }
      }
      
      

   
      render () {
      
        let { isLoaded, animals} = this.state
      
        if (!isLoaded) {
          return <div>Searching for Matches...</div>
        } else {
      
        return (

            <div className="App">

              Matches Found!
              <Carousel>
              {animals.animals.map(animal =>(
                
                <div> 
                <img src={animal.primary_photo_cropped ? animal.primary_photo_cropped.small : camera} alt="Camera Shy"></img>
                <a href={animal.url}><h1 key={animal.name}>{animal.name}</h1></a>
                <h2>{animal.age}</h2>
                
                </div>
                
              ))}
              </Carousel>
            </div>

        );
      }
      } }

      //                <img key={animal.photos} src={`https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/${animal.id}/1/?bust=1546042081`} alt="Camera Shy"></img>