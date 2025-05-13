import { useState, useEffect } from "react";

const ConsumiendoApi = () => {
    const [userList,setUserList] = useState([]);

    useEffect (() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response =>response.json())
        .then(data => setUserList(data))
        .catch(error =>console.error("error, no se encontro",error));
        
    },[]);

    return(
        <div className="flex-col bg-amber-500" >
            <h1 className="font-bold p-4 text-center text-5xl">Lista de usuario</h1>
            <ul>{
               userList.map(userList => (
               <li className="text-center w-full p-2 text-lg" key={userList.id}>
                    <p>Soy <span className="font-bold">{userList.name}</span></p>
                    <p>actualmente vivo en la ciudad de <span className="font-bold">{userList.address.city}</span></p>
               </li>    
                ))}
            </ul>
        </div>
    );
};
export {ConsumiendoApi};