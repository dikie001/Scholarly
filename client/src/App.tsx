import { SidebarProvider } from "@/components/ui/sidebar";
import AppRoutes from "./routes";
import {Toaster} from "sonner"
import { useLocation } from "react-router-dom";

const App = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation()
  const isAuth = location.pathname === "/login" || location.pathname ==="/signup"
  return (
    <SidebarProvider>
      <Toaster richColors position={isAuth ? "top-center" :"bottom-right"} />
      <AppRoutes/>
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default App