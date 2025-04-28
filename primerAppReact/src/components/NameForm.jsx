import { useState } from "react";

const NameForm = () => {//funcion  para crear el componente
    const [name, setName] = useState(""); //se declara el estado y su actualizador y ademas con usestate le indicamos en que valor se inicializa.
  
  return( //retorna el contador que se va a crear para renderizar el contenido que queremos.
     // este componente captura el nombre que ingresa un usuario y muestra un saludo personalizado.       
           <div>
                <input type="text" // este input es de tipo texto ya que se usara un string de entrada.
                placeholder="Ingresa tu nombre" // se usa un placeholder para indicarle al usuario que debe ingresar su nombre
                value={name} // captura el nombre con la propiedad value.
                onChange={(event)=> setName(event.target.value)} // con la funcion onChange se captura el evento con la funcion event.target.value
                
                />
                <p>Hola, {name || "visitante"}</p>

           </div>
 )

}

export {NameForm};