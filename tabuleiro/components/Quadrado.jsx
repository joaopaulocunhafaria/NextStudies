export default function Quadrado(props){
    const color = props.preta ? "black":"white";
 
    return (<>
     
     <div style={{ height:"50px", width:"50px",backgroundColor:color}}></div>
    
    </>)
}