import { AppHeader } from "./components/common";
import AppRoutes from "./routes/AppRoutes";

function App() {
  return (
    <div className="page">
      <AppHeader />

      <main className="main_container">
        <AppRoutes />
      </main>

      {/* AppFooter 들어갈 예정 */}
    </div>
  );
}

export default App;
