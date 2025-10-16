
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import AdminDashboard from "@/dashboards/adminDashboard/AdminDashboard";
import FacultyDashboard from "@/dashboards/facultyDashboard/facultyDashboard";
import ParentDashboard from "@/dashboards/parentDashboard/parentDashboard";
import PrincipalDashboard from "@/dashboards/principalDashboard.tsx/Dashboard";
import StudentDashboard from "@/dashboards/studentDashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student_dashboard" element={<StudentDashboard />} />
      <Route path="/faculty_dashboard" element={<FacultyDashboard />} />
      <Route path="/parent_dashboard" element={<ParentDashboard />} />
      <Route path="/admin_dashboard" element={<AdminDashboard />} />
      <Route path="/principal_dashboard" element={<PrincipalDashboard />} />
    </Routes>
  );
}

export default AppRoutes