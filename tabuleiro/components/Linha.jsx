import Quadrado from "./Quadrado";

export default function Linha(props){

    const comeco = props.branco ? "white":"black";

    return comeco == "white" ?(<>
      
      <div style={{display:"flex"}}>
         <Quadrado></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado></Quadrado>
         <Quadrado preta></Quadrado>
      </div>
    </>):(<>
    <div style={{display:"flex"}}><Quadrado preta></Quadrado>
         <Quadrado ></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado  ></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado  ></Quadrado>
         <Quadrado preta></Quadrado>
         <Quadrado  ></Quadrado></div>
        
    </>)

}