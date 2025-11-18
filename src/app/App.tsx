import { AppFooter, AppHeader } from "@/components/common";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <div className="page">
      <AppHeader />

      <main className="main_container">
        <AppRoutes />
      </main>

      <AppFooter />
    </div>
  );
}

export default App;
