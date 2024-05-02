export default function Estilo(props){
   
    


    return (<>
    <div style={{ backgroundColor: props.numero == 10 ? "white":"blue", color:props.numero == 10 ? "black":"blue"}}>
        <h1>{props.numero+10}</h1>
    </div>
    </>)
}