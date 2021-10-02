import { useEffect,useState } from "react";
import React from 'react';
import "../styles/images.css"
// import {encode} from "base-64";
import axios from "axios";

export default function GetImages() {
    
  useEffect(()=>{
 
    fetchItems();

   },[]);
//creating state

const [image,setImage]=useState([]);

const fetchItems =async()=>{
    //http://localhost:3000/data
    const newdata = await axios.get("https://image-kit-server.herokuapp.com/data")//https://image-kit-server.herokuapp.com/data
    .then(res => {
        console.log("respone",res);
        return res.data;
    }).catch(err => {
        console.log(err);
    })

    console.log("images",newdata);
    const image = newdata;
    setImage(image);

}



    return (
        <div>
        {/* <div className="image-row">
            <div className="image-column">
                {items.map(item =>(
                    <a href={item.url}>
                    <img src={item.url} alt={item.fileName}></img>
                    </a>
                ))}
            </div>
        </div> */}

        <div className="image-row">
            <div className="image-column">
                {image.map(image =>(
                    <a href={image.url} key={image.fileId}>
                    <img src={image.url} alt={image.name} loading='lazy'></img>
                    </a>
                ))}
            </div>
        </div>
        </div>
    )
}
