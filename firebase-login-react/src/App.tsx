import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginView from "./views/LoginView";
import HomeView from "./views/HomeView";
import NewAccount from "./views/NewAccount";
function App() {
  return (
    <>
      <h2>Welcome</h2>
      <Routes>
        <Route index element={<LoginView />} />
        <Route path="/newAcct" element={<NewAccount />} />
        <Route path="/home/:byWayOf" element={<HomeView />} />
      </Routes>
    </>
  );
}

export default App;
