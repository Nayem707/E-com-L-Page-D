import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Invoices from "./invoices";
import Invoice from "./incoice";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./page/Cart";
// import TestPage from './components/test/TestPage'

import SignUpPage from "./components/LoginPage/SignUpPage";
import LogingPage from "./components/LoginPage/LogingPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="cart" element={<Cart />} />
        <Route path="signuppage" element={<SignUpPage />} />
        <Route path="logingpage" element={<LogingPage />} />

        <Route path="invoices" element={<Invoices />}>
          <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
          />

          <Route path=":invoiceId" element={<Invoice />} />
        </Route>

        <Route path="*" element={<p>404 not</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
