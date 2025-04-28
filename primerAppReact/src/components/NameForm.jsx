import { useState } from "react";

const NameForm = () => {//funcion  para crear el componente
    const [name, setName] = useState(""); //se declara el estado y su actualizador y ademas con usestate le indicamos en que valor se inicializa.
  
  return( //retorna el contador que se va a crear para renderizar el contenido que queremos.
            
           <div>
                <input type="text"
                placeholder="Ingresa tu nombre"
                value={name}
                onChange={(event)=> setName(event.target.value)}
                
                />
                <p>Hola, {name || "visitante"}</p>

           </div>
 )

}

export {NameForm};