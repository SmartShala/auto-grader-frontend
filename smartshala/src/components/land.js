import React from "react"
import Login from "./login"
import Signup from "./signup"
import Signin from "./signin"

function Land() {
const[userData,setUserData]=React.useState()
 console.log(userData)
  if(!userData){
    return(
      <Login Data={setUserData} />
      )
  }
  else if(userData.is_new){
    return(
    <Signup/>
    )
  }
   else if(!userData.is_new){
     return(
       <Signin/>  ) }
}

export default Land;