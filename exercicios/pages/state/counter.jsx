import Button from "@/components/Button";
import { useState } from "react";

export default function counter() {

    const [counter, setCounter] = useState(0)
     var count = counter;

    function incresCounter(){
        setCounter(count++)
    }

    function decresCounter(){
        setCounter(count--)
    }

    const style = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        backgroundColor: "gray",
        color: "white"
    };
    return (<>

        <div style={style}
        >

            <h1>Counter { counter}</h1>
            <button style={{
                backgroundColor: "greenyellow",
                border: "none",
                borderRadius: "10px",
                height: "50px",
                width: "50px",
                color: "white"
            }}
            
            onClick={incresCounter}
            >Counter ++</button>
            <button style={{
                backgroundColor: "red",
                border: "none",
                borderRadius: "10px",
                height: "50px",
                width: "50px",
                color: "white"
            }}
            onClick={decresCounter}
            >Counter --</button>
        </div>

    </>)
}