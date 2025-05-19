import { useState,useEffect } from "react"

const SearchPost = () => {

    const [query,setQuery] = useState("");
    const [queryPost, setQueryPost] = useState ([]);

           useEffect (() => {
                fetch(`https://jsonplaceholder.typicode.com/posts?title_like=${query}`)
                .then(response =>response.json())
                .then(data => setQueryPost(data))
                .catch(error =>console.error("error, no se encontro",error));
                
            },[query]);

    return (
        <div className="flex justify-center flex-col text-center">
            <h1 className="font-bold p-4 text-center text-5xl">Lista de Post</h1>
           <input className="w-[50%] text-center mx-auto m-5 border-3 border-amber-500 rounded-full"
           type="text"
           placeholder="Ingresa tu post a buscar." 
           value={query}
           onChange={(event) => setQuery(event.target.value) }
           />

           
            <ul>{queryPost.map (queryPost => (
               <li className="text-center text-base
" key={query.id}>{queryPost.title}</li>    
                ))}
            </ul>
        </div>
    )
}

export {SearchPost}