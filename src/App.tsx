import { Route, Routes } from "react-router";
import RootLayout from "./_root/RootLayout";
import Home from "./_root/pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
