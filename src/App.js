import './App.css';

import React, {useState, useEffect} from 'react';
import { Navbar, Container } from "react-bootstrap";



import {Cards} from './Components/Cards'
import {Filter} from './Components/Filter'
import useWindowSize from './Hooks/useWindowSize';

function App() {

  const [error,setError] = useState(false)
  const [category, setCategory] = useState([]);

  const size = useWindowSize();  
   
  

  return (
        // Creating Navbar
    <div className="App">
        <Navbar expand="lg" className="bg-body-tertiary">
           <Container className='m-0'>
              <Navbar.Brand href="#" className='fs-3 fw-3'>Headlines</Navbar.Brand>
           </Container>
         </Navbar>
    <div style={{
      display: 'flex',
      }}>
        
      {/* Filter Section */}


      {size.width > 600 && <div style={{
            width: '27vw',
            marginLeft:'1vw'
        }}>
            <Filter setCategory={setCategory}/>
            
       </div>}


        {/* Cards Section */}

        <div className='newsfeed'>
            
          <div className='cards'><Cards category={category} setError={setError}/></div>
       
        </div>
    
    </div>

 </div>
  );
}

export default App;
