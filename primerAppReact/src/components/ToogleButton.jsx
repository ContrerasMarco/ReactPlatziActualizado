import { useState } from "react";

const ToggleButton = () => {//funcion  para crear el componente
    const [isActive, setIsActive] = useState(false); 
  //se declara el estado y su actualizador y ademas con usestate le indicamos en que valor se inicializa en este caso usamos booleanos.
  return( //retorna usando un boton y le cambia el estado si esta activo o inactivo el boton con la funcion onClick.
            
            <button onClick={() => setIsActive(!isActive)}>
                 {isActive ? "Esta activo" : "No esta activo"}
            </button>
           
       
      
  )

}

export {ToggleButton};