
import Login from "@/pages/Auth/Login"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path="/login" element={<Login/>}/>
        </Routes>
        
    </Router>
  )
}

export default AppRoutes