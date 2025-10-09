import { SidebarProvider } from "@/components/ui/sidebar";
import AppRoutes from "./routes";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppRoutes/>
      <main>
        {children}
      </main>
    </SidebarProvider>
  );
};

export default App