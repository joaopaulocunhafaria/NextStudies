import React from "react"

interface Person{
    name:string
    age: number
}

export default function Person(props: Person){

     return (<>
        <h1>Name: {props.name}</h1>
        <h1>Age: {props.age}</h1>
     </>)

}