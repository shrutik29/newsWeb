import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';


export const Filter = ({ setCategory}) => {

   

   //  Please ignore this
   //  const region =[
   //       {"countries":["United Arab", "Argentina", "Austria", "Belgium", "Bulgaria", "Brazil", "Canada", "Switzerland", "China", "Colombia"]
   //        "codes":['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'ch']
   //       }
   //  ]


    
    const categories = {
      "cate":["Entertainment","General","Health","Science","Sports","Technology"],
      "code":['entertainment','general', 'health', 'science', 'sports', 'technology']
   }


   const handleCategory = (index) =>{
      const currentCategory = categories.code[index];
      
      setCategory(currentCategory)
   }
 

  return (
    <div className='Filter align-items-start text-left'>
       <h2 className='fs-3 text-left'>Filter </h2>
       <div>
          <div style={{
            float: 'left'
          }}><h5 style={{float: 'left'}}>Category</h5>
          


               <ListGroup 
                  style={{
                     width: '23vw'
                  }}
               >
                  {categories.cate.map((c,index) => (
               
                  <ListGroup.Item 
                  style={{
                     width: '100%'
                  }} 
                  action onClick={() =>{handleCategory(index)}} variant="dark">
                  {c}
                  </ListGroup.Item>
                  
               ))}
               </ListGroup>
                     
                  
 





          
          </div>

       </div>
       

    </div>
  )
}
