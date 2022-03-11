import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GlobalSyle from "./globalStyles";

import { Home, Ourservices, HowWeWork, Error } from "./pages";
function App() {
  return (
    <BrowserRouter>
      <GlobalSyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/ourservices" element={<Ourservices />} />
        <Route path="/howwework" element={<HowWeWork />} />
        <Route path="/*" element={<Error />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
