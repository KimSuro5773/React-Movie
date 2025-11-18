import { Footer, Header } from "@/components/layout";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <div className="page">
      <Header />

      <main className="main_container">
        <AppRoutes />
      </main>

      <Footer />
    </div>
  );
}

export default App;
