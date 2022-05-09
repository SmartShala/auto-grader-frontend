import React from "react"
export default function Signup(){
    const[password,setPassword]=React.useState("")
    function handlesubmit(){
        console.log(password)
    }
    
    function handleChange(event){
        setPassword(event.target.value)
    }
    return(
    <form onSubmit={handlesubmit}>
        <input
            type="text"
            placeholder="Email"
            name="useremail"
            //value={useremail}
        />
        <input
            type="text"
            placeholder="New password"
            onChange={handleChange}
            value= {password}
            name="password"
        />  
        <input
            type="text"
            placeholder="Confirm password"
            value={password}
            name="confrirmpass"
        /> 
        <button>Signup</button>
    </form> 
    )
}