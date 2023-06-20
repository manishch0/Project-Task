import "./App.css";
// import AddressBookManager from "./AddDetalis";
// import TaskManager from "./TaskManger";
// import LearnForm from "./Components/Form";
// import { useState } from "react";
// import TestForm from "./Components/TestForm";
// import Lodaer from "./Components/Lodaer";
// import TestLoader from "./Components/TestLoader";
// import ModalTest from "./Components/Modal";
// import DatePickerLimit from "./Components/DatePickerLimit";
// import TabelDyanmic from "./Components/TabelDyanmic";
// import Login from "./Components/check";
// import Loginm from "./Components/Test123";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./Components/PostAPi";
import TableAntD from "./Components/TableAntD";
// import Pagination from "./Components/Pagation";

function App() {
  return (
    <div>
      {/* <LoginForm /> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/table" element={<TableAntD />} />
      </Routes>
    </div>
  );
}

export default App;
