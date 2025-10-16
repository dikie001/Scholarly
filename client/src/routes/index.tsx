import Login from "@/pages/Auth/Login";
import Signup from "@/pages/Auth/Signup";
import AdminDashboard from "@/dashboards/adminDashboard/AdminDashboard";
import FacultyDashboard from "@/dashboards/facultyDashboard/facultyDashboard";
import ParentDashboard from "@/dashboards/parentDashboard/parentDashboard";
import PrincipalDashboard from "@/dashboards/principalDashboard.tsx/Dashboard";
import StudentDashboard from "@/dashboards/studentDashboard/Dashboard";
import { Route, Routes } from "react-router-dom";
import Students from "@/dashboards/adminDashboard/pages/students/StudentsPage";
import TeachersPage from "@/dashboards/adminDashboard/pages/teachers/TeachersPage";
import ClassesPage from "@/dashboards/adminDashboard/pages/classes/ClassesPage";
import AdmissionsPage from "@/dashboards/adminDashboard/pages/admissions/AdmissionsPage";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/student_dashboard" element={<StudentDashboard />} />
      <Route path="/faculty_dashboard" element={<FacultyDashboard />} />
      <Route path="/parent_dashboard" element={<ParentDashboard />} />
      <Route path="/admin_dashboard" element={<AdminDashboard />} />
      <Route path="/admin/students" element={<Students />} />{" "}
      <Route path="/admin/teachers" element={<TeachersPage />} />
      <Route path="/admin/classes" element={<ClassesPage />} />
      <Route path="/admin/admissions" element={<AdmissionsPage />} />
      <Route path="/principal_dashboard" element={<PrincipalDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
