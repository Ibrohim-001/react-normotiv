import { Route, Routes } from "react-router";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import Cart from "./_root/pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
