import React from "react";
import { useEffect } from "react";
import { useState } from "react";





const Deneme = ()=>{

const [user1, setUser1] = useState([]);

useEffect(()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(response=>response.json())
    .then(response=>setUser1(response.results))
},[]);




    return(
        <header>
            Deneme 
            {user1.map(usera=>{
            return <div>
                <h2>{usera.gender}</h2>
            </div>
            })}
        </header>
    )

}

export default Deneme