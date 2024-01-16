import "./App.css";
import { UserProvider } from "./context/user.context";
import { CollectionsProvider } from "./context/collections.context";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CartProvider } from "./context/cart.context";

//components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./routes/Home/Homepage";
import NotFound from "./components/Layout/NotFound";
import Account from "./routes/Account/Account";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <CollectionsProvider>
            <Header />
            <main>
              <Routes>
                <Route index element={<Homepage />} />
                <Route path="shop/*" element={<Shop />} />
                <Route path="account" element={<Account />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </CollectionsProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
