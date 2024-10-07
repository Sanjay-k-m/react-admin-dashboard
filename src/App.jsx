import { Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";
import Sidebar from "./Pages/components/Sidebar";

function App() {
  return (
    <>
      <div className="flex h-screen bg-grey-900 text-grey-100 overflow-hidden">
        {/* BG */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80" />
          <div className="absolute inset-0 backdrop-blur-sm" />
        </div>
        <Sidebar />
        <Routes>
          <Route path="/" element={<OverviewPage />} />
          <Route path="/products" element={<div>Products Page</div>} />

          <Route path="*" element={<div>404</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
