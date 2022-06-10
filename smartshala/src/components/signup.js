import React from "react"
export default function Signup(props){
    const[password,setPassword]=React.useState("")
    function handlesubmit(){
        console.log(password)
    }
    
    function handleChange(event){
        setPassword(event.target.value)
    }
    return(
    <div className="container">
    {props.isLoading && <div className="load">Loading......</div>}
    <form onSubmit={handlesubmit}>
        <div className="land">
        <input
            type="text"
            placeholder="Email"
            name="useremail"
            //value={useremail}
            className="land-in"
        />
        <input
            type="text"
            placeholder="New password"
            onChange={handleChange}
            value= {password}
            name="password"
            className="land-in"
        />  
        <input
            type="text"
            placeholder="Confirm password"
            value={password}
            name="confrirmpass"
            className="land-in"
        /> 
        <button className="land-btn">Signup</button>
        </div>
    </form> 
    </div>
    )
}