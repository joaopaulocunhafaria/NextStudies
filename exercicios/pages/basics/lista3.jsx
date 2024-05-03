
export default function lista3() {

    return (
        <div>
            <div>{gerarLista(10)}</div>
            <div>{gerarLista(20)}</div>
        </div>
    )
}

function gerarLista(final) {

    const lista = [];

    for (let index = 0; index < final; index++) {
        lista.push(<span>{index + 1},</span>)
    }

    return lista
}