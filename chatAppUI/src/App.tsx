import "./App.css";
import ChatComponent from "./components/ChatComponent";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat" element={<ChatComponent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
