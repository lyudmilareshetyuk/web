import styles from "./Asteroids.module.css";
import {AsteroidCard} from '../components/AsteroidCard/AsteroidCard';
import {useEffect, useState} from "react";

export const Asteroids = ()=> {
    const [asteroids] = useState(generateAsteroids());

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [distanceMode, setDistanceMode] = useState(false);

    useEffect(() => {
        const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=DEMO_KEY").then((res) => {
            return res.json()
        }).then((asteroids) => {
            console.log(asteroids)
        })
    }, [])

    return <div>
        Home
        <div className={styles.showDangerousOnly} onClick={()=>setOnlyDangerous(!onlyDangerous)}>
            <input type="checkbox"
        ></input>Показать только опасные
        </div>
        <div className={styles.distanceMode}>
            Расстояние <button onClick={()=>setDistanceMode(true)}
            className={styles.distanceChooser}> в километрах
        </button>
            <button onClick={()=>setDistanceMode(false)}
                className={styles.distanceChooser}> в дистанциях до луны
            </button>
        </div>
        <div style={{margin: "80px"}}>
        </div>
        {onlyDangerous ?
            asteroids.filter((item)=>item.isDangerous).map((item)=><AsteroidCard {...item}/>) :
            asteroids.map((item)=><AsteroidCard {...item}/>)
        }
    </div>
}

const generateAsteroids = ()=>{
    const month = [
        'января',
        'февраля',
        'марта',
        'апреля',
        'мая',
        'июня',
        'июля',
        'августа',
        'сентября',
        'октября',
        'ноября',
        'декабря'];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];
    for (let i = 0; i < 10; i++){
        const name = characters[(Math.random()*25).toFixed(0)] + characters[(Math.random()*25).toFixed(0)] + [(Math.random()*25).toFixed(0)] + [(Math.random()*25).toFixed(0)];
        const date = `${(Math.random()*27 + 1).toFixed(0)} ${month[(Math.random()*12).toFixed(0)]} 2024`;
        const size = (Math.random()*1000 + 158).toFixed(0);
        const distance = (Math.random()*98033000).toFixed(0);
        const isDangerous = Math.random() >= 0.5;
        result.push({name,date, size, distance, isDangerous});
    }
    return result;
}