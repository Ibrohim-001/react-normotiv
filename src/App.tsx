import { Route, Routes } from "react-router";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";
import SignUp from "./_root/pages/Sign-up";
import Login from "./_root/pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/sign-up" element={<SignUp/>}/>
          <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
