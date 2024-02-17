import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  useNewsData  from "../Hooks/useNewsData";


import { CustCard } from "./CustCard";




export const Cards = ({category, setError}) => {

  
   
    const [filter, setFilter] = useState(category)

    var newData =useNewsData(filter);
    var data = newData.newsData;

    

    
    useEffect(() => {
        setFilter(category)
    }, [category])
    
  return (
    <div className="newsList">
         
        {(newData.error !== 200)?(setError(true)):
            (newData?(data.map((news)=>(

                (news.title === "[Removed]")? null:
                    <CustCard data={news}/>
           
        ))):  
        <div></div>)}



    </div>
  )
}

