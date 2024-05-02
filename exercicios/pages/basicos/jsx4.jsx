//jsx
export default function jsx4(){
   
    const subtitulo = "estou no javascript"

    return (
        <div align="center">
            <h1>Integracao js e jsx</h1>
            <h2>{subtitulo}</h2>
            <h4>{Math.max(1,2)}</h4>
            <h4>{entre(30,5,42)}</h4>
        </div>
    )
}

function entre(valor, min, max) {
    
     var counter = 1;
     setInterval(()=>{ counter +=1
    return {counter}}, 1000)
}