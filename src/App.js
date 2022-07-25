import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Home from "./pages/Home/Home";
import Write from "./pages/write/Write";
import Single from "./pages/single/Single";


function App() {
  const user = false;
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/register' element={user ? <Home/> : < Register />}></Route>
        <Route exact path='/login' element={user ? <Home/> : < Login />}></Route>
        <Route exact path='/settings' element={user ? <Settings/> : < Register />}></Route>
        <Route exact path='/write' element={user ? <Write/> : < Register />}></Route>
        <Route exact path='/post/:postId' element={< Single />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
