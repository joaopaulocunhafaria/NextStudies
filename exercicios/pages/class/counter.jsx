import Counter from "@/components/Counter";
import { Component } from "react";

export default class CounterPage extends Component {



    render() {
        return (<>
            <div>
                <Counter></Counter>
                <h1>Teste de componente com classe</h1>
            </div>
        </>)
    }
}