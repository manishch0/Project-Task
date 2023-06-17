import "./App.css";
import AddressBookManager from "./AddDetalis";
import TaskManager from "./TaskManger";
import LearnForm from "./Components/Form";
import { useState } from "react";
import TestForm from "./Components/TestForm";
import Lodaer from "./Components/Lodaer";
import TestLoader from "./Components/TestLoader";
import ModalTest from "./Components/Modal";
import DatePickerLimit from "./Components/DatePickerLimit";
import TabelDyanmic from "./Components/TabelDyanmic";
import LoginForm from "./Components/PostAPi";
import Login from "./Components/check";
// import Pagination from "./Components/Pagation";

function App() {
  return (
    <div className="App">
      {/* <AddressBookManager /> */}
      {/* <TaskManager />  */}
      {/* <LearnForm /> */}
      {/* <TestForm /> */}
      {/* <Lodaer />
      <TestLoader />
      <ModalTest />
      <DatePickerLimit /> */}
      {/* <TabelDyanmic /> */}
      {/* <Pagination /> */}
      <LoginForm />
      {/* <Login /> */}
    </div>
  );
}

export default App;
