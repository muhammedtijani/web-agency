import { BrowserRouter, Routes, Route } from "react-router-dom";
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
    </BrowserRouter>
  );
}

export default App;
