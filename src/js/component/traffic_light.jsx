import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");

    const getRandomColor = () => {
        const colors = ["red", "yellow", "green"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    return (
        <div className="container">
            <div className="paloSemaforo"></div>
            <div className="semaforo">
                <button className={color === "red" ? "red glow" : "red"} onClick={() => setColor("red")}></button>
                <button className={color === "yellow" ? "yellow glow" : "yellow"} onClick={() => setColor("yellow")}></button>
                <button className={color === "green" ? "green glow" : "green"} onClick={() => setColor("green")}></button>
                <button className={color === "especialMorado" ? "purple glow" : "especialMorado"} onClick={() => setColor("especialMorado")}>Morado</button>
            </div>
            <div className="alternador">
                <button className="btn btn-outline-success" onClick={getRandomColor}>Botón alternador</button>
            </div>
        </div>
    );
};

export default TrafficLight;
