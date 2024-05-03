import { useState } from "react";

export default function mouse() {

    const [x,setX] = useState(0);
    

    const arrayY = useState(0)
    let y = arrayY[0];
    const setY = arrayY[1]




    const style = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        height:"100hv",
        backgroundColor:"gray",
        color:"white"
    };

    function onMouseMove(ev){
        setX(ev.pageX);
        setY(ev.pageY);

        console.log(ev.pageX);
        console.log(ev.pageY);
    }

    return (<>
        <div style={style} onMouseMove={onMouseMove}>
            <span>X: {x}</span>
            <span>Y: {y}</span>
        </div>
    </>)
}