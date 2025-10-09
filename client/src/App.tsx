import { SidebarProvider } from "@/components/ui/sidebar";
import AppRoutes from "./routes";
import {Toaster} from "sonner"

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Toaster richColors/>
      <AppRoutes/>
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default App