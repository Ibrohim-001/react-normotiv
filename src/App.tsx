import { Route, Routes } from "react-router";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Login from "./_root/pages/Login";
import SignUp from "./_root/pages/Sign-up";
import Cart from "./_root/pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
