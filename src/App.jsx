import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starred from "./pages/Starred";
import MainLayout from "./components/MainLayout";
import Show from "./pages/Show";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="starred" element={<Starred />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Route>
        <Route path="/show/:showId" element={<Show/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
