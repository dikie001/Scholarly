
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
  );
}

export default AppRoutes