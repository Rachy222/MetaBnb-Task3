import "./App.css";
import Places from "./pages/Places";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

    <div className="App">
        <Routes>
        <Route index element={<Home />} />
        <Route path="/locations" element={<Places />} />
        </Routes>

    </div>

    </Router>
  );
}


export default App;
