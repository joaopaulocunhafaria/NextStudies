export default function OnlyPair(props){


    if (props.number%2===0) {
        return <h1>{props.number}</h1>
    }else{
        return null
    }
}