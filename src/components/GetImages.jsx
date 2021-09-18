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

    const newdata = await axios.get("https://api.imagekit.io/v1/files",{
        auth:{
            username:"private_FEQHGrJPnn7Nl/Ymv+UByhUB4jE=",
            password:"Sagar@992370"
        },
        headers: {
                    'Content-Type': 'application/json',
                 }
    }).then(res => {
        console.log("respone",res);
        return res.data;
    }).catch(err => {
        console.log(err);
    })

    console.log("images",newdata);
    const image = await newdata;
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
