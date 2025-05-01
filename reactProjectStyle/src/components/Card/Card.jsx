//import "./style.css"
//import styles from "./Card.module.css" //se importa el modulo.css y en la declaracion de la clase se usa la palabra styles mas la clase a usar.
//import styles from "./Card.module.scss";
import styles from "./Card.module.sass"; //con sass en la hoja de estilo no se deben usar puntos y comas ni llaves para declarar estilos.
const Card = () => {
    return(
        <div className={styles.card}>
            Soy una card!
        </div>
    )
}

export {Card};