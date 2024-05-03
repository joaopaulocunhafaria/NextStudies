import { useState } from "react"

export default function form() {
    const [value, setValue] = useState("Digite algo")


    return (<>

        <div
        style={{
            display:"flex",
            flexDirection:"column",
            justifyContent:"center",
            alignItems:"center"
        }}
        >
            <h1>{value}</h1>
            <input type="text" name="in" id="in" value={value} onChange={e => setValue(e.target.value)} />
        </div>
    </>)
}