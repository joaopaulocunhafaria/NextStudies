import Children from "./Children";

export default function Father(props) {


    function listenChildren(params1,params2,params3) {
        console.log(params1,params2,params3);
    }
    return (<>
        <Children method={listenChildren}></Children>
    </>)
}