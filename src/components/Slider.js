import React from 'react';
import {Carousel}  from 'react-bootstrap'
import img1 from '../photo/img1.jpg'
import img2 from '../photo/img2.jpg'
import img3 from '../photo/img3.jpg'
import carousel from'bootstrap/dist/css/bootstrap.min.css'

export default function Slider(){
    return(
        <Carousel>
            <Carousel.Item  style={{'height': '638px'}}>
                <img className = "d-block w-100"
                src = {img1}
                alt="First Slide"
                />                 
            </Carousel.Item>

            <Carousel.Item  style={{'height': '638px'}}>
                <img className = "d-block w-100"
                src = {img2}
                alt="First Slide"
                />                
            </Carousel.Item>

            <Carousel.Item  style={{'height': '638px'}}>
                <img className = "d-block w-100"
                src = {img3}
                alt="First Slide"
                />             
            </Carousel.Item>
        </Carousel>
    )
}