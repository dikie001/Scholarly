
import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import AdminDashboard from "@/pages/Dashboards/adminDashboard/adminDashboard";
import FacultyDashboard from "@/pages/Dashboards/facultyDashboard/facultyDashboard";
import ParentDashboard from "@/pages/Dashboards/parentDashboard/parentDashboard";
import PrincipalDashboard from "@/pages/Dashboards/principalDashboard.tsx/Dashboard";
import StudentDashboard from "@/pages/Dashboards/studentDashboard/Dashboard";
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