import "./App.css";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./routes/Home/Homepage";
import NotFound from "./components/Layout/NotFound";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Account from "./routes/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/account" element={<Account />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
