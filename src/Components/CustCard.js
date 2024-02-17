import React from 'react'
import useWindowSize from '../Hooks/useWindowSize'



import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

import { Card, Button, Col, Container, Row } from "react-bootstrap";




export const CustCard = ({data}) => {
  const Size = useWindowSize();
  console.log(Size.width)
  console.log(data)
  return (
    (Size.width >  600)?<>
    
    
    
    <MDBCard >
      <MDBRow className='g-1 p-2' 
          style={{
            minBlockSize: '155px',
          }}
      >


        <MDBCol md='4' style={{width: '40%'}}>
          <MDBCardImage className='w-20' src={data?.urlToImage} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8' style={{width: '60%'}}>
          
            <MDBCardTitle className='pb-2'>{data.title}</MDBCardTitle>
            
            
              <MDBCardBody className='p-0 m-u-2 d-flex flex-row justify-content-between ' >
                  <MDBCardBody style={{
                      position: "absolute",
                      display:"flex",
                      justifyContent: 'space-between',
                      bottom: '0',
                      width: '-webkit-fill-available'
                      }}>

                      <MDBCardText className='d-flex flex-column float-left mb-0 '>
                          <small className='text-muted text-start fw-bold'>{data.author}</small>
                          <small className='text-muted text-start fw-bold'>{data.publishedAt}</small>
                        </MDBCardText>
                        <Button variant="primary"style={{
                              float: 'right',
                              height: 'fit-content'
                          }} href={`${data.url}`}>View News </Button>
                      </MDBCardBody>

                  </MDBCardBody>

              
        
               
        </MDBCol>
      </MDBRow>
    </MDBCard>
    
    
    
    
    
    
    </>
    
    
    
    
    
    :
    
    
    
    <Card >
           <Card.Img variant="top" src={data?.urlToImage} />
       <Card.Body >
           <Card.Title >{data.title}</Card.Title>
            
           <div style={{
               float: 'left',
                
           }}>
               {/* author name */}
               <div style={{
                    
                   alignItems: 'center'
               }}>
               <p style={{
                   margin:'0px',
                   float: 'left',
                   fontSize: '14px',
                   fontWeight: '500'
                   

               }}>{`Author: ${data.author}`}</p>
               </div>
               {/* published date */}
               <div> 
               <p style={{
                       margin:'0px',
                       float: 'left',
                       fontSize: '14px',
                       fontWeight: '500'

                   }}>{`Date: ${data.publishedAt}`}</p>
               </div>
                    
            
           </div>
           <div>
               <Button variant="primary"style={{
                   float: 'right'
               }} href={`${data.url}`}>View News </Button>

           </div>
       </Card.Body>
   </Card>
  )
}
