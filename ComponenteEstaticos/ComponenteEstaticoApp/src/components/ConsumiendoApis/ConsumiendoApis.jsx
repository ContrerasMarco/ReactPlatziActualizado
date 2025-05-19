import { useState, useEffect } from "react"; //se importan dos hooks para uso de estado el useState y useEffect este ultimo apra efectos secundarios

const ConsumiendoApis = () => { //se crea el componente principal y se crean lso estados, el primero para tener la data de los usuarios y su estado actualizador
    const [userList,setUserList] = useState([]);//el segundo se crea para el estado de carga de la app y su actualizador
    const [isLoading,setisLoading] = useState(true);//y por ultimo se crea el estado de error y su actualizador por si no se tiene respuesta
        const [error,setError] = useState(null);



    useEffect (() => {
        const fetchUsers = async () => {   
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                if (!response.ok){
                    throw new Error("Error al obtener los datos.")
                }
                const data = await response.json()
                setUserList(data)
             } catch (error) {
                setError(error)
            } finally{
                setisLoading(false)
            }
     
        }
       fetchUsers();
        
    },[]);

    if(isLoading){
        return <p>Cargando........</p>
    }

    if(error){
        return <p>Error, <span className="font-medium text-lg">{error.message}</span>, no se encuentra el sitio</p>
    }

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
export {ConsumiendoApis};