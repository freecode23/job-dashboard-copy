
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  if (localStorage.getItem("savedJobs") == null) {
    localStorage.setItem("savedJobs", JSON.stringify([]))
  }


  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div><Home /></div>}
        />
        <Route
          path="/dashboard"
          element={<div><Dashboard /></div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
