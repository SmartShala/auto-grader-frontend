import React from "react"
import { BrowserRouter as Router ,Routes,Route } from "react-router-dom"; 
import Land from "./components/land"

function App() {
return(
<Router>
  <Routes>
  <Route path="/" element={<Land/>} />
  </Routes>
</Router>
)
}

export default App;
