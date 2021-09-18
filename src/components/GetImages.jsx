import { useEffect,useState } from "react";
import React from 'react';
import axios from 'axios';
import "../styles/images.css"
import {encode} from "base-64";

export default function GetImages() {
    
  useEffect(()=>{
 
    fetchItems();

   },[]);
//creating state

const [items,setItems]=useState([]);

const fetchItems =async()=>{

    const data =await fetch("https://raw.githubusercontent.com/SagarVartak/jsondata/main/images.json");

    console.log(data);

    const items=await data.json();
    // console.log(items);

    setItems(items);

   const images =  fetch("https://api.imagekit.io/v1/files", {
        headers: new Headers({
             "Authorization": 'Basic' + encode("private_FEQHGrJPnn7Nl/Ymv+UByhUB4jE="+":"+"Sagar@992370"),
             'Content-Type': 'application/json',
             'Access-Control-Allow-Origin': '*'
        }),
    }).then(response => {
    if (!response.ok) throw new Error(response.status);
        return response.json();
    }).catch(err => {
        console.log(err);
        return err;
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
