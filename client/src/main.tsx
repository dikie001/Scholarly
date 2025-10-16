import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.tsx'
import { SidebarProvider } from './components/ui/sidebar.tsx'
import './index.css'

createRoot(document.getElementById("root")!).render(
  <Router>
    <SidebarProvider>
      {" "}
      <App />
    </SidebarProvider>
  </Router>
);
