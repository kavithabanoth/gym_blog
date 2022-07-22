import TopBar from "./components/topbar/TopBar";
import { BrowserRouter as Router, Routes, Route,Navigate, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

import Single from "./pages/single/Single"




function App() {
  const user = false;
  return (
    <Router>
     <TopBar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route path="/register" element={user ? <Navigate to="/"/>: <Register />}/>
      <Route path="/login" element={user ? <Navigate to="Home"/> : <Login/>}/>
      <Route path="/write" element={user ? <Navigate to="Write"/> : <Register />}/>
      <Route path="/settings" element={user ? <Navigate to="Settings" /> : <Register />}/>
      <Route path="/post/:postId" element={<Single/>}/>
      
     </Routes>
    </Router>

  );
}

export default App;
