import React from "react";
import { Link } from 'react-router-dom'
export function Header (props) {
    return (
        <header>
            <h1>ARMAGGEDON V</h1>
            <p>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к Земле.</p>
            <nav>
                <ul>
                    <li>
                        <Link to="/asteroids">Астероиды</Link>
                    </li>
                    <li>
                        <Link to="/destroyment">Уничтожение</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}