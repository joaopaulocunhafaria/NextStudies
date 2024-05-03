export default function Children(props){
    return (<>
     <div>
        <h1>Children Component</h1>
        <button onClick={()=> props.method("I went weel", "in the", "math test")}>Click Here</button>
     </div>
    </>)
}