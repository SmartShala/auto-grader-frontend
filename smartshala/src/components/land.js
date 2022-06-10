import React from "react"
import Login from "./login"
import Signup from "./signup"
import Signin from "./signin"

function Land() {
const[userData,setUserData]=React.useState()
const[loading,setLoading]=React.useState(false)
 console.log(userData)
//  console.log(loading)
  if(loading){
    return(
      <div className="load">
        Loading....
      </div>
    )
  }
  else if(!userData){
    return(
      <Login Data={setUserData} Load={setLoading} isLoading={loading}/>
      )
  }
  else if(userData.is_new){
    return(
    <Signup  isLoading={loading}/>
    )
  }
   else if(!userData.is_new){
     return(
       <Signin/>  ) }
}

export default Land;