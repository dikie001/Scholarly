
import Login from "@/pages/Auth/Login"
import Signup from "@/pages/Auth/Signup";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes