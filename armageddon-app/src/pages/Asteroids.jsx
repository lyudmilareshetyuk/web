import styles from "./Asteroids.module.css";
import {AsteroidCard} from '../components/AsteroidCard/AsteroidCard';
import {useEffect, useState} from "react";

export const Asteroids = ()=> {
    const [asteroids,setAsteroids] = useState([]);

    const [onlyDangerous, setOnlyDangerous] = useState(false);

    const [distanceMode, setDistanceMode] = useState(false);

    useEffect(() => {
        try{
             const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=RU9aORCzrAmwOsz9LZJoBgtbkqlcW5DM5XJcmjz1").then((res) => {
                return res.json()
            }).then((response) => {
                let rawAsteroids = []
                for (const data in response.near_earth_objects){
                    rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data])
                }
                console.log(rawAsteroids);
                const asteroids = rawAsteroids.map(item=>{
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min)/2);
                    const close = item.close_approach_data[0]
                    return{
                        name: item.name,
                        date: close.close_approach_date,
                        size,
                        distanceK: Math.trunc(close.miss_distance.kilometers),
                        distanceL: Math.trunc(close.miss_distance.lunar),
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id:item.id
                    }
                })
                setAsteroids(asteroids)
            })
        } catch (err){
            console.log(err);
            setAsteroids(generateAsteroids())
        }
    }, [])

    return <div>
        <h3>Home</h3>
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
            asteroids.filter((item)=>item.isDangerous).map((item)=>
                <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>) : asteroids.map((item)=>
                <AsteroidCard key={item.id} {...item} distanceMode={distanceMode}/>)
        }
    </div>
}

const generateAsteroids = x=>{
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
        const distanceK = (Math.random()*98033000).toFixed(0);
        const distanceL = Math.trunc((distanceK) / 384399);
        const isDangerous = Math.random() >= 0.5;
        result.push({name,date, size, distanceK, distanceL, isDangerous, id: name});
    }
    return result;
}