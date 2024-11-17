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
  const log = sessionStorage.getItem("logged");                          // using sessionstorage to login the user
  const [isLogged, setIsLogged] = useState(log ? true : false);

  function auth(username, password) {                                    // authenticating the user
    if (username === "mern-stack" && password === "mern-stack@123") {
      sessionStorage.setItem("logged", "true");
      setIsLogged(true);
    } else {
      window.alert("Invaild Login");
    }
  }

  return (                                                                  // Defining all the Routes
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
          path="/api/edit/:id"
          element={isLogged ? <Editpage /> : <Navigate replace to={"/login"} />}
        />
        <Route
          path="/login"
          element={
            isLogged ? <Navigate replace to={"/"} /> : <Loginpage auth={auth} />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
