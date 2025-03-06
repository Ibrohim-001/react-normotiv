import { Route, Routes } from "react-router";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Login from "./_root/pages/Login";
import SignUp from "./_root/pages/Sign-up";
import Cart from "./_root/pages/Cart";
import Wishlist from "./_root/pages/Wishlist";
import Checkout from "./_root/pages/checkout";
import Accaunt from "./_root/pages/Account";
import About from "./_root/pages/About";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/wishlist" element={<Cart />} />
          <Route path="/cart" element={<Wishlist />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/accaunt" element={<Accaunt />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
