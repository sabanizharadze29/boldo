import "./App.css";
import AboutPage from "./pages/About/About";
import Homepage from "./pages/Homepage/Homepage";
import ServicesPage from "./pages/Services/Servicespage";
import { Routes, Route } from "react-router";
import Nav from "./Components/nav/Nav";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homepage />}></Route>
        <Route exact path="/about" element={<AboutPage />}></Route>
        <Route exact path="/services" element={<ServicesPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
