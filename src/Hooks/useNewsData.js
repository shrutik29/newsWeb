import { useState, useEffect } from "react";
import axios from 'axios';

const useNewsData = (category) => {
  const [newsData, setNewsData] = useState([]);
  const [error, setError] = useState(null);
  
  // apiKey from newsapi.org
  const apiKey = "611f7fc569244e1b9c85b3e02dbb4083"

  
 
  var url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
  if(category.length > 0){
    
    url = `${url}&category=${category}`;
    
    
   
  }

    useEffect(() => {
      axios.get(url).then((data) => {
      
      setNewsData(data?.data.articles);
      setError(data.status)
    }).catch(error => {
        
        
      })
  }, [category]);
  

  return { newsData, error };
};



export default useNewsData;