import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css"

export const AsteroidCard = (props)=>{
    const{name, date, distance, size, isDangerous} = props;

    return (<div className={styles.card}>
        <div className={isDangerous ? styles.cardRed : styles.cardConst}></div>
        <AsteroidCardImage/>
        <AsteroidCardContent name={name} date={date} dictance={distance} size={size}/>
        <AsteroidCardAction isDangerous={isDangerous}/>
    </div>)
}