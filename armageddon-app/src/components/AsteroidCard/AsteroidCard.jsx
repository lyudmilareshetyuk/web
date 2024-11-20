import { AsteroidCardAction } from "./AsteroidCardAction/AsteroidCardAction";
import { AsteroidCardContent } from "./AsteroidCardContent/AsteroidCardContent";
import { AsteroidCardImage } from "./AsteroidCardImage/AsteroidCardImage";
import styles from "./Card.module.css"

export const AsteroidCard = ()=>{
    return (<div className={styles.card}>
        <div className={styles.cardConst}></div>
        <AsteroidCardImage/>
        <AsteroidCardContent/>
        <AsteroidCardAction/>
    </div>)
}

export const DangerAsteroidCard = ()=>{
    return (<div className={styles.card}>
        <div className={styles.cardRed}></div>
        <AsteroidCardImage/>
        <AsteroidCardContent/>
        <AsteroidCardAction/>
    </div>)
}