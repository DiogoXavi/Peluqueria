import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Services } from "./../pages";
// import Contact from "../pages/Contact";
import Header from "../components/Header";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/services" element={<Services />} />
       {/* <Route path="/contacto" element={<Contact />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
