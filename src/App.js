import "./App.css";
import Drawer from "./Components/menu-component/Drawer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./Components/register-component/Register";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<Drawer />} />
          <Route path="/register" element={<Register />} />
          {/*<Route path="/login" element={<Login />} />*/}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
