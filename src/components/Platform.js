import React from 'react'
import {Card} from 'react-bootstrap'
let tab=[{image:'https://www.docplanner.com/img/flag.png',
       
        titre:"Leader in 10 countries",
        paragraphe:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile" },

        { image: "https://www.docplanner.com/img/visits.png",
         
            titre:"1.5 million appointments",
            paragraphe:"booked last month"},

            {image:"https://www.docplanner.com/img/patients.png",
            
            titre:"30 million unique patients",
            paragraphe:"us every month "},

            {image:"https://www.docplanner.com/img/doctors.png",
           
            titre:"2 million active doctors",
            paragraphe:"trust in our solutions"} 
        ];


const Platform = (props) => {
  return(
    <div className="platform">
        <div className="container">
            <div className="row">
                <div className="col-md-5 world">
                    <h1>The world's biggest healthcare platform</h1>
                    <p>We work from 7 offices all over the world, bringing Docplanner Group to life in a dozen countries. </p>
                    <img  className=" logo-doc" src="https://www.docplanner.com/img/logo.png" alt="logo"/>
                </div>
                <div className="col-md-7">
                    <div className="d-flex flex-wrap ">
                    {
                        tab.map((el,index)=>(
                            <div>
                <Card className="text-center card-platform ml-3 "  >
                <Card.Img variant="top" src={el.image} className="image"  alt=".."  />
                <Card.Body>
                  <Card.Title><h4>{el.titre}</h4></Card.Title>
                  <Card.Text>
                   <p>{el.paragraphe}</p> 
                  </Card.Text>
                  
                </Card.Body>
              </Card>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    </div>
   )

 }

export default Platform