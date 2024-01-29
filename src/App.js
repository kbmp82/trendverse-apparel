import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/cart.context";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils";

import "./App.css";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/user.action";

//components
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Homepage from "./routes/Home/Homepage";
import NotFound from "./components/Layout/NotFound";
import Account from "./routes/Account/Account";
import Shop from "./routes/Shop/Shop";
import Checkout from "./routes/Checkout/Checkout";

function App() {
  const dispatch = useDispatch();

  //initiate user
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      console.log({ user });
      if (user) createUserDocumentFromAuth(user);
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {});
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
