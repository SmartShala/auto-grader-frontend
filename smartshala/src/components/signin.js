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
            <div className="land">
            <input
                type="text"
                placeholder="Email"
                name="useremail"
                // value={useremail}
                className="land-in"
            />
            <input
                type="password"
                placeholder="Password"
                onChange={handleChange}
                value= {password}
                name="password"
                className="land-in"
            />  
            <button className="land-btn">Signin</button>
            </div>
        </form>  

    )
}