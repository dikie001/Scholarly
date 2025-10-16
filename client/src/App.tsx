import { SidebarProvider } from "@/components/ui/sidebar";
import AppRoutes from "./routes";
import {Toaster} from "sonner"
import { useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation()
  const isAuth = location.pathname === "/login" || location.pathname ==="/signup"
  return (
    <SidebarProvider>
      <Toaster richColors position={isAuth ? "top-center" :"bottom-right"} />
      <AppRoutes/>
    </SidebarProvider>
  );
};

export default App