import React from "react";
import './input.css';

const InputBox = () =>{
    const showData = () =>{
        var name = document.getElementById("name");
        var gender = document.getElementById("gender");
        var depart = document.getElementById("depart");
        var role = document.getElementById("role");
        var sal = document.getElementById("sal");
        return (
            <div>
                <h1>{name.value}</h1>
                <h1>{gender.value}</h1>
                <h1>{depart.value}</h1>
                <h1>{role.value}</h1>
                <h1>{sal.value}</h1>
            </div>
        )
    }
    return(
        <div id="div1">    
        <div>
            <input placeholder="Name" id="name"></input>
        </div>
        <div>
            <input placeholder="Gender" id="gender"></input>
        </div>
        <div>
            <input placeholder="Department" id="depart"></input>
        </div>
        <div>
            <input placeholder="Role" id="role"></input>
        </div>
        <div>
            <input placeholder="Salary" id="sal"></input>
        </div>    
        <div>
            <button onClick={showData}>ADD EMPLOYEE</button>    
        </div>    
        </div>
    )
    
} 
export default InputBox;