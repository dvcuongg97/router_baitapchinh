import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Router, Route } from "react-router-dom";
import Header from "./Header/Header";
import QuanLySinhVien from "./Pages/QuanLySinhVien/QuanLySinhVien";

function App() {
  return (
    <div className="m-5">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/quanlysinhvien" element={<QuanLySinhVien />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
