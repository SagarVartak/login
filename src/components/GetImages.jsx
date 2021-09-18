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

const [items,setItems]=useState([]);

const fetchItems =async()=>{

    const data =await fetch("https://raw.githubusercontent.com/SagarVartak/jsondata/main/images.json");

    // console.log(data);

    const items=await data.json();
    // console.log(items);

    setItems(items);

//    const images = await fetch("https://api.imagekit.io/v1/files", {
//        method: 'GET',
//         headers: {
//              "Authorization": 'Basic' + encode("private_FEQHGrJPnn7Nl/Ymv+UByhUB4jE=:Sagar@992370"),
//              'Content-Type': 'application/json',
//              'Access-Control-Allow-Origin': '*',
                // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                 
//         },
//     }).then(response => {
//         console.log("response",response);
//         return response.json();
//     }).catch(err => {
//         console.log(err);
//         return err;
//     })
//     console.log(images);

    const images = await axios.get("https://api.imagekit.io/v1/files",{
        auth:{
            username:"private_FEQHGrJPnn7Nl/Ymv+UByhUB4jE=",
            password:"Sagar@992370"
        },
        headers: {
                    'Content-Type': 'application/json',
                 }
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })

    console.log(images);
}

    return (
        <div className="image-row">
            <div className="image-column">
                {items.map(item =>(
                    <a href={item.url}>
                    <img src={item.url} alt={item.fileName}></img>
                    </a>
                ))}
            </div>
        </div>
    )
}
