import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./components/common/navbar";
import { Home } from "./pages/home";
import { Register } from "./pages/register";

function App() {
  return (
    <Box>


      <Router>
        <Box className="App">
          <Navbar />
          <Box className="content">
            <Routes>
              <Route exact path="/" element={<Home />}>

              </Route>
              <Route path="/Register" element={<Register />}>

              </Route>
            </Routes>
          </Box>
        </Box>
      </Router>

    </Box>
  );
}

export default App;
