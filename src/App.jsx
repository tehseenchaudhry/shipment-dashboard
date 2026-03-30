import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

import Analysis from "./pages/Analysis";
import Shipments from "./pages/Shipments";
import Invoices from "./pages/Invoices";
import Payments from "./pages/Payments";
import Report from "./pages/Report";
import TrackingUpdates from "./pages/TrackingUpdates";
import User from "./pages/User";

function App() {
  return (
    <BrowserRouter>

      <Routes>
       
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Analysis />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="payments" element={<Payments />} />
          <Route path="tracking" element={<TrackingUpdates />} />
          <Route path="user" element={<User />} />
          <Route path="report" element={<Report />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
