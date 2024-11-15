import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Loginpage from "./Pages/Loginpage";
import Dashboardpage from "./Pages/Dashboardpage";
import Createpage from "./Pages/Createpage";
import Listpage from "./Pages/Listpage";
import Editpage from "./Pages/Editpage";
import NotFound from "./Pages/NotFound";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isLogged, setIsLogged] = useState(true);
  return (
    <div>
      {isLogged ? <Navbar /> : null}
      <Routes>
        <Route
          exact
          path="/"
          element={
            isLogged ? <Dashboardpage /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/employeelist"
          element={isLogged ? <Listpage /> : <Navigate replace to={"/login"} />}
        />
        <Route
          path="/create"
          element={
            isLogged ? <Createpage /> : <Navigate replace to={"/login"} />
          }
        />
        <Route
          path="/edit"
          element={isLogged ? <Editpage /> : <Navigate replace to={"/login"} />}
        />
        <Route path="/login" element={<Loginpage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
