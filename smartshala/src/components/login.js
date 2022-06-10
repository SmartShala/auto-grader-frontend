import React from "react"
import axios from "axios"
import "../styles/login.css"
export default function Login(props){
    const[useremail,setUseremail]=React.useState("")
    // React.useEffect(()=>{
    //     const requestOptions={
    //         method:'POST',
    //         headers:{'Content-Type': 'application/json'},
    //         body: JSON.stringify({email:useremail})
    //     }
    //     async function getNew(){
    //     const res = await fetch('https://www.smartshala.live/api/login/',requestOptions)
    //     const data=await res.json()
    //     props.Data(data)
    //     }
    //     getNew()
    // },[])
    let handlesubmit=async(e)=>{
        e.preventDefault()
        const requestOptions={
            // mode: 'no-cors',
            // Origin:'http://localhost:3000',
            // method:'POST',
            headers:{'Content-Type': 'application/json'},
            // body: JSON.stringify({email:useremail})
        }
        const url='https://www.smartshala.live/api/login/'
        axios.post(url,{
            email : useremail
        },requestOptions)
        .then(response=>{
           props.Data(response.data)
        })
        .catch(err=>{
            console.log(err.message)
        })
        } 

    function handleChange(event){
        setUseremail(event.target.value)
    }
    
    
    return(
        <form onSubmit={handlesubmit}>
        <div className="land"> 
           <input
               type="text"
               placeholder="Email"
               onChange={handleChange}
               name="useremail"
               value={useremail}
               className="land-in"
            />
            <button className="land-btn">Next</button> 
            </div>     
       </form>  
    )
}