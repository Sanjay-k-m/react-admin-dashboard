import { Route, Routes } from "react-router-dom";
import OverviewPage from "./Pages/OverviewPage";

function App() {
  return (
    <>
      <div className="flex h-screen bg-grey-900 text-grey-100 overflow-hidden">
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
