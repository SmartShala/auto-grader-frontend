import React from "react"
export default function Signin(){
    let password=""
    function handlesubmit(){
        console.log(password)
    }
    
    function handleChange(event){
       password=event.target.value
    }

    return(
        <form onSubmit={handlesubmit}>
            <input
                type="text"
                placeholder="Email"
                name="useremail"
                // value={useremail}
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value= {password}
                name="password"
            />  
            <button>Signin</button>
        </form>  

    )
}