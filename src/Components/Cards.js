import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import  useNewsData  from "../Hooks/useNewsData";

import { Card, Button, Col, Container, Row } from "react-bootstrap";
import { CustCard } from "./CustCard";




export const Cards = ({category, setError}) => {

    // const newData = useNewsData();
    const predefine = ['entertainment','general', 'health', 'science', 'sports', 'technology']
    const [filter, setFilter] = useState(category)

    var newData =useNewsData(filter);
    var data = newData.newsData;

    

    console.log(newData)
    useEffect(() => {
        setFilter(category)
    }, [category])
    
  return (
    <div className="newsList">
         <div>{console.log(newData.error)}</div>
        {(newData.error !== 200)?(setError(true)):
      (newData?(data.map((news)=>(

            (news.title === "[Removed]" || news.urlToImage === )? null:
                <CustCard data={news}/>
            
    ))):<div></div>)}



    </div>
  )
}

