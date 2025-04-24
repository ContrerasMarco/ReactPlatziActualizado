import { useState } from "react";

const Counter = () => {//funcion  para crear el componente
  const  [ count, setCount ] = useState(0); //se declara el estado y su actualizador y ademas con usestate le indicamos en que valor se inicializa.
  
  return( //retorna el contador que se va a crear para renderizar el contenido que queremos.
      <div>
        <p>El contador esta en : {count}</p>
        <button onClick={()=> setCount(count + 1)}>Incrementar</button> 
        <button onClick={()=> setCount(count -1 )}>Decrementar</button>

      </div>



  )

}

export {Counter}; // exportamos el componente hacia el archivo app.jsx en donde esta el nucleo de la aplicacion.