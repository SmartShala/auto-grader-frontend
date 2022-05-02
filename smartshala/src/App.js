import React from "react"
import Login from "./components/login"

function App() {
const[userData,setUserData]=React.useState({})
 console.log(userData)
  if(!userData.is_new){
    return(
      <Login Data={setUserData} />
    )
  }
  else if(userData.is_new && userData){
    alert("password");
  }
}

export default App;
