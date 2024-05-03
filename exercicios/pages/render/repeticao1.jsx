import { render } from "react-dom";

export default function repeticao1() {

    const nomes = [
        "joao",
        "joao",
        "Mateus",
        "joao",
        "joao",
        "paulo",
        "joao",
        "joao",
    ]



    function renderizarComLaco() {

        const itens = [];

        for (let index = 0; index < nomes.length; index++) {
            itens.push(<li key={index}>{nomes[index]}</li>)
        }


        return itens;
    }

    function renderizarComMap() {
        return nomes.map((nome, index) => <li key={index}>{nome}</li>)



    }

    return (<>
        <div>{renderizarComLaco()}</div>
        <div>{renderizarComMap()} </div>
    </>)
}
