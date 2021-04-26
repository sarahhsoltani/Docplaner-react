import React from 'react'
import {Card ,Button} from "react-bootstrap"
let tab=[{image:'https://www.docplanner.com/images/warsaw.png',
        titre:"Warsaw",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/barcelona.png',
        titre:"Barcelona",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/istanbul.png',
        titre:"Istanbul",
        button:"SEE OPENINGS" },
        
        {image:'https://www.docplanner.com/images/rome.png',
        titre:"Rome",
        button:"SEE OPENINGS" },
    
        {image:'https://www.docplanner.com/images/mexico-city.png',
        titre:"Mexico City",
        button:"SEE OPENINGS" },

        {image:'https://www.docplanner.com/images/curitiba.png',
        titre:"Curitiba",
        button:"SEE OPENINGS" }];

const Company = () => {
  return(
    <div className="d-flex flex-wrap text-center ">
   {
       tab.map((el,index)=>(
        <Card className="mr-4 mb-2" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={el.image} />
        <Card.Body className="d-flex justify-content-between"> 
         
          <Card.Text>
           {el.titre}
          </Card.Text>
          <Button className="btn btn-small btn-primary" >{el.button}</Button>
        </Card.Body>
      </Card>
       ))
   }

    </div>
   )

 }

export default Company