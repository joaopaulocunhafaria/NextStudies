import styles from "./Titulo.module.css"


export default function titulo(props){
    const titulo = props["titulo"]
    const subtitulo = props["subtitulo"]


   if (props.pequeno==true) {
    return (
        <>
          <h1 className={styles.titulo}>{titulo}</h1>
          <h2 className={styles.subtitulo}>{subtitulo}</h2>
        </>
     )
   }else{
    return <>
      <p>{titulo}</p>
      <p>{subtitulo}</p>
    </>
   }
    
}