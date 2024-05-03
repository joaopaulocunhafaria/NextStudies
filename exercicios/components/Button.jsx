export default function Button(props) {
    var show = false;

    function click() {
        show = !show;
        console.log("Clicou");
    }

    return (<>
        <div>
            <button style={{
                backgroundColor: "greenyellow",
                border: "none",
                borderRadius: "10px",
                height: "50px",
                width: "50px",
                color: "white"
                }}
                onClick={click} onPointerMove={()=>console.log("pass")}
            >{props.description}</button></div>
        <div>
            <h1> {show ? "" : "Click on the button"}</h1>
        </div>

    </>)
}