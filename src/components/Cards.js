import React from 'react'
import {Card} from "react-bootstrap"
import "../css/style.css"

const Cards = () => {
  return(
    <div className="d-flex justify-content-center cardss">
      <Card style={{ width: '20rem' }} className="cardOne mr-2">
  
  <Card.Body>
    <Card.Title><img src="./images/icon-patients.svg" alt=""/></Card.Title>
    <Card.Text>
      <h2>For patients</h2>
    <span>Find a doctor, book a visit and solve any health-related doubt</span>
    <select className="mt-5">
     <option>Choose country"</option>
     <option>Argentina</option>
     <option>Australia</option>
     <option>Brazil</option>
     <option>Chile</option>
     <option>Colombia</option>
     <option>Czech</option>
     <option>France</option>
     <option>Italy</option>
     <option>Mexico</option>
    </select>
    </Card.Text>
    
  </Card.Body>
</Card >
    
      <Card  style={{ width: '20rem' }} className="cardTwo ">
 
  <Card.Body>
    <Card.Title><img src="./images/icon-doctors.svg" alt=""/></Card.Title>
    <Card.Text>
    <h2>For Doctors</h2>
    <span>Save time managing visits and cut no-shows by half</span>
    <select className="mt-5">
     <option>Choose country"</option>
     <option>Argentina</option>
     <option>Australia</option>
     <option>Brazil</option>
     <option>Chile</option>
     <option>Colombia</option>
     <option>Czech</option>
     <option>France</option>
     <option>Italy</option>
     <option>Mexico</option>
    </select>
    </Card.Text>
   
  </Card.Body>
</Card >
     
      <div >
      <Card style={{ width: '20rem' }} className="ml-2 cardThree">
  
  <Card.Body>
    <Card.Title><img src="./images/icon-clinics.svg" alt=""/></Card.Title>
    <Card.Text>
      <h2>For Clinics</h2>
      <span> Some quick example text to build on the card title and make up the bulk of
      the card's content.</span>
      <select>
     <option>Choose country"</option>
     <option>Argentina</option>
     <option>Australia</option>
     <option>Brazil</option>
     <option>Chile</option>
     <option>Colombia</option>
     <option>Czech</option>
     <option>France</option>
     <option>Italy</option>
     <option>Mexico</option>
    </select>
    <select>
     <option>Choose country"</option>
     <option>Argentina</option>
     <option>Australia</option>
     <option>Brazil</option>
     <option>Chile</option>
     <option>Colombia</option>
     <option>Czech</option>
     <option>France</option>
     <option>Italy</option>
     <option>Mexico</option>
    </select>
    </Card.Text>
  
  </Card.Body>
</Card>
      </div>

    </div>
   )

 }

export default Cards