import './logo.svg';
import './App.css';
import {Button} from "./button/Button";
import React from "react";

function App() {
    return (
        <div className="App">
            <h1 className="header" style={{backgroundColor: "darkblue"}}>Header level 1</h1>
            <div>Tets div</div>
            <Button/>
        </div>
    );
}

export default App;
