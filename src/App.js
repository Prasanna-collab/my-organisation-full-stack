import React from "react";
import "./App.css";
import Header from "./Components/core/Header";
import Footer from "./Components/core/Footer";
import AddEmployee from "./Components/core/AddEmployee";
import EmployeeList from "./Components/core/EmployeeList";
import UpdateEmployee from "./Components/core/UpdateEmployee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/employees/add" element={<AddEmployee />} />
          <Route path="employees/:id/update" element={<UpdateEmployee />} />
        </Routes>
        <Footer />
      </BrowserRouter>

   
    </div>
  );
};

export default App;
