import styles from "./Asteroids.module.css";
import {AsteroidCard, DangerAsteroidCard} from '../components/AsteroidCard/AsteroidCard';

export const Asteroids = ()=> {

    const asteroids = [{name: "first", isDangerous: true}, {name: "second", isDangerous: false}]

    return <div>
        Home
        <div className={styles.showDangerousOnly}><input type="checkbox" value={asteroids.showMode}
        ></input>Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button
            className={styles.distanceChooser}> в дистанциях до луны
        </button>
        </div>

        <DangerAsteroidCard/>
        <AsteroidCard/>
    </div>
}