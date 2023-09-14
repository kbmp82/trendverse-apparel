import "./App.css";
import { UserProvider } from "./context/user.context";
import { ProductsProvider } from "./context/products.context";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { CartProvider } from "./context/cart.context";

//components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./routes/Home/Homepage";
import NotFound from "./components/Layout/NotFound";
import Account from "./routes/Account/Account";
import Shop from "./routes/Shop/Shop";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <UserProvider>
          <ProductsProvider>
            <Header />
            <main>
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/products" element={<Shop />} />
                <Route path="/account" element={<Account />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </ProductsProvider>
        </UserProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
