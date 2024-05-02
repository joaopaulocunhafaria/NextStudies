import Titulo from "../../components/Titulo"

export default function usandoComponente(){


    return (
        <>
           <Titulo titulo="Meu titulo" 
           subtitulo="meu subtitulo" 
           pequeno={true}/> 
           <Titulo titulo="Meu titulo" 
           subtitulo="meu" 
            /> 
           <Titulo titulo="Meu titulo" 
           subtitulo="meu subtitulo" 
           pequeno /> 
        </>
    )
}