import {ColorModeContext, useMode} from "./theme";
import {CssBaseline, ThemeProvider} from "@mui/material";
import { Routes, Route} from "react-router-dom";
import Topbar from "./pages/global/Topbar";
import Sidebar from "./pages/global/Sidebar";
import Dashboard from "./pages/dashboard";
import Team from "./pages/team-page";
import Contacts from "./pages/contacts";
import Invoices from "./pages/invoices";
import Form from "./pages/form";
import Faq from "./pages/faq";
import BarGraphic from "./pages/bar";
import Line from "./pages/line";
import Pie from "./pages/pie";
import Geo from "./pages/geo";
//import Calendar from "./pages/calendar";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="App">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
            <Routes>
              <Route path="/team" element={<Team />} />
            </Routes>
            <Routes>
              <Route path="/contacts" element={<Contacts />} />
            </Routes>
            <Routes>
              <Route path="/invoices" element={<Invoices />} />
            </Routes>
            <Routes>
              <Route path="/form" element={<Form />} />
            </Routes>
            <Routes>
              <Route path="/faq" element={<Faq />} />
            </Routes>
            <Routes>
              <Route path="/bar" element={<BarGraphic />} />
            </Routes>
            <Routes>
              <Route path="/line" element={<Line />} />
            </Routes>
           { /*<Routes>
              <Route path="/pie" element={<Pie />} />
            </Routes>
            <Routes>
              <Route path="/geo" element={<Geo />} />
            </Routes> */}
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App
