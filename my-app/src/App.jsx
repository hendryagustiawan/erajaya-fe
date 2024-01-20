import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";
import { ToastComponent } from "./components/ToastComponent";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <ToastComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
