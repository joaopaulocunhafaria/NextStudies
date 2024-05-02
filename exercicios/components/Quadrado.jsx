export default function Quadrado(props){
  const color = props.color ? "black": "white"

  return (
    <div style={{height: "100px", width:"100px", color:color}}></div>
  )




}