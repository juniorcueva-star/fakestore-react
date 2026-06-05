import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { Contact } from "../pages/Contact";
import { Entities } from "../pages/Entities";
import { Home } from "../pages/Home";

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="entities" element={<Entities />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
