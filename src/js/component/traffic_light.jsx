import React, { useState } from "react";




const TrafficLight = () => {
    const [color, setColor] = useState("red");
    return (
        <div className="container">
            <div className="semaforo col">

                <button className={color === "red" ? "red glow": "red"} onClick={() => {
                    setColor("red" 
                    );
                }}></button>


                <button className={color === "yellow" ? "yellow glow": "yellow"} onClick={() => {
                    setColor("yellow");
                }}></button>


                <button className={color === "green" ? "green glow": "green"} onClick={() => {
                    setColor("green");
                }}></button>

            </div>
            <div className="paloSemaforo col">

            </div>
        </div>
    );
};
export default TrafficLight;
