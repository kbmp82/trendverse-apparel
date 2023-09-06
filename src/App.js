import "./App.css";
import { UserProvider } from "./context/user.context";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

//components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./routes/Home/Homepage";
import NotFound from "./components/Layout/NotFound";
import Account from "./routes/Account/Account";

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<Homepage />} />
            <Route path="/account" element={<Account />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
