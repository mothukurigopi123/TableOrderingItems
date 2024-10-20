import './Sample.css'
import {useState} from 'react'
let a="Apple"
let b="Good"
let c="banana"
const Man=()=>{
let [state,stateFunction]=useState("Guntur")
console.log(state)
stateFunction("America")
console.log(state)
    
}
const Mangoes=()=>{
    return (
        <h1>Mangoes and {c} are {b}</h1>
    )
}
const Grapes=()=>{
    return(
        <>
        <h1>Grapes are {b}</h1>
        <img src="/Pictures/banner.jpeg"></img>
        </>
        
    )
}
function Sample(){
    return (
        <div><Mangoes/>
        <Grapes/>
        <Man/>
        </div>
        
    )
}
export default Sample