import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import styles from "./Asteroids.module.css";
import { AsteroidCard } from '../components/AsteroidCard/AsteroidCard';
import { useEffect, useState } from "react";
export const Asteroids = () => {
    const [asteroids, setAsteroids] = useState([]);
    const [onlyDangerous, setOnlyDangerous] = useState(false);
    const [distanceMode, setDistanceMode] = useState(false);
    useEffect(() => {
        try {
            const result = fetch("https://api.nasa.gov/neo/rest/v1/feed?api_key=RU9aORCzrAmwOsz9LZJoBgtbkqlcW5DM5XJcmjz1").then((res) => {
                return res.json();
            }).then((response) => {
                let rawAsteroids = [];
                for (const data in response.near_earth_objects) {
                    rawAsteroids = rawAsteroids.concat(response.near_earth_objects[data]);
                }
                console.log(rawAsteroids);
                const asteroids = rawAsteroids.map(item => {
                    const size = Math.trunc((item.estimated_diameter.meters.estimated_diameter_max + item.estimated_diameter.meters.estimated_diameter_min) / 2);
                    const close = item.close_approach_data[0];
                    return {
                        name: item.name,
                        date: close.close_approach_date,
                        size,
                        distanceK: Math.trunc(close.miss_distance.kilometers),
                        distanceL: Math.trunc(close.miss_distance.lunar),
                        isDangerous: item.is_potentially_hazardous_asteroid,
                        id: item.id
                    };
                });
                setAsteroids(asteroids);
            });
        }
        catch (err) {
            console.log(err);
            setAsteroids(generateAsteroids());
        }
    }, []);
    return _jsxs("div", { children: [_jsx("h3", { children: "Home" }), _jsxs("div", { className: styles.showDangerousOnly, children: [_jsx("input", { type: "checkbox", value: onlyDangerous, onChange: () => setOnlyDangerous(!onlyDangerous) }), "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u043E\u043F\u0430\u0441\u043D\u044B\u0435"] }), _jsxs("div", { className: styles.distanceMode, children: ["\u0420\u0430\u0441\u0441\u0442\u043E\u044F\u043D\u0438\u0435 ", _jsx("button", { onClick: () => setDistanceMode(true), className: styles.distanceChooser, children: " \u0432 \u043A\u0438\u043B\u043E\u043C\u0435\u0442\u0440\u0430\u0445" }), _jsx("button", { onClick: () => setDistanceMode(false), className: styles.distanceChooser, children: " \u0432 \u0434\u0438\u0441\u0442\u0430\u043D\u0446\u0438\u044F\u0445 \u0434\u043E \u043B\u0443\u043D\u044B" })] }), _jsx("div", { style: { margin: "80px" } }), onlyDangerous ?
                asteroids.filter((item) => item.isDangerous).map((item) => _jsx(AsteroidCard, { ...item, distanceMode: distanceMode }, item.id)) : asteroids.map((item) => _jsx(AsteroidCard, { ...item, distanceMode: distanceMode }, item.id))] });
};
const generateAsteroids = () => {
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
        'декабря'
    ];
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const result = [];
    for (let i = 0; i < 10; i++) {
        const name = characters[(Math.random() * 25).toFixed(0)] + characters[(Math.random() * 25).toFixed(0)] + [(Math.random() * 25).toFixed(0)] + [(Math.random() * 25).toFixed(0)];
        const date = `${(Math.random() * 27 + 1).toFixed(0)} ${month[(Math.random() * 12).toFixed(0)]} 2024`;
        const size = (Math.random() * 1000 + 158).toFixed(0);
        const distanceK = (Math.random() * 98033000).toFixed(0);
        const distanceL = Math.trunc((distanceK) / 384399);
        const isDangerous = Math.random() >= 0.5;
        result.push({ name, date, size, distanceK, distanceL, isDangerous, id: name });
    }
    return result;
};
