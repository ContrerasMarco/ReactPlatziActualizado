import { useEffect, useState } from "react";

const CountWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect (() => {
        console.log(`El contador ahora es ${count}`)

    },[count])

    return (
        <div>
            <p>El contador esta en : {count}</p>
        <button onClick={()=> setCount(count + 1)}>Incrementar</button> 
        </div>
    )
        
}

export {CountWithEffect};