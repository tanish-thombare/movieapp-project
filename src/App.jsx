import "./Components/style.css";
import Home from "./Components/Home";
import MainMenu from "./Components/MainMenu";
import { Link, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route path="/mainmenu" element={<MainMenu />} />
      </Routes>
      <Home></Home>
    </>
  );
}

export default App;
