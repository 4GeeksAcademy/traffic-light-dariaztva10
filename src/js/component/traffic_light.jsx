import React, { useState } from "react";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [purple, setPurple] = useState(false);

    const getRandomColor = () => {
        const colors = ["red", "yellow", "green", "purple",];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        setColor(randomColor);
    };

    const getMorado = () => {
        setPurple(!purple);
    };

    return (
        <div className="container">
            <div className="paloSemaforo"></div>
            <div className="semaforo">
                <button className={color === "red" ? "red glow" : "red"} onClick={() => setColor("red")}></button>
                <button className={color === "yellow" ? "yellow glow" : "yellow"} onClick={() => setColor("yellow")}></button>
                <button className={color === "green" ? "green glow" : "green"} onClick={() => setColor("green")}></button>
                {purple && (
                    <button className="purple"></button>
                )}
            </div>
            <div className="alternador">
                <button className="btn btn-success" onClick={getRandomColor}>Botón alternador</button>
            </div>
            <button className="btn btn-success" onClick={(getMorado)}>Botón morado</button>
            
        </div>
    );
};

export default TrafficLight;
