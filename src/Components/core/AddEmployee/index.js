import React from "react";
import "./addemployee.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [employeedetails, setEmployeeDetails] = useState({
    name: "",
    email: "",
    designation: "",
    mobileNumber: "",
    address: "",
    bloodGroup: "",
  });
  const handleInput = (value) => {
    return setEmployeeDetails(employee => {
      return { ...employee, ...value };
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://my-ord-emp-back-end.onrender.com/api/employees",
        employeedetails
      )
      if (response) {
        setEmployeeDetails({
          name: "",
          email: "",
          designation: "",
          mobileNumber: "",
          address: "",
          bloodGroup: "",
        });
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="update-employee">
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            className="form-control"
            type="text"
            value={employeedetails.name}
            onChange={(e) => handleInput({name: e.target.value})}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className="form-control"
            type="text"
            value={employeedetails.email}
            onChange={(e) => handleInput({ email: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input
            id="designation"
            className="form-control"
            type="text"
            value={employeedetails.designation}
            onChange={(e) => handleInput({ designation: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            id="address"
            className="form-control"
            type="text"
            value={employeedetails.address}
            onChange={(e) => handleInput({ address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input
            id="mobile"
            className="form-control"
            type="text"
            value={employeedetails.mobileNumber}
            onChange={(e) => handleInput({ mobileNumber: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="blood">Blood Group</label>
          <input
            id="blood"
            className="form-control"
            type="text"
            value={employeedetails.bloodGroup}
            onChange={(e) => handleInput({ bloodGroup: e.target.value })}
          />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddEmployee;
