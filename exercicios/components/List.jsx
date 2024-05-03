import Item from "./Item";

export default function List(props) {



    return (
        <>

            <h1>List of foods</h1>

            <ul>
                {props.children}
            </ul>

        </>)
}