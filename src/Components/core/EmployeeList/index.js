import React from "react";
import "./employeelist.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";

const EmployeeList = () => {
 

  const [employees,setEmployees] = useState([]);
  useEffect(() => {
    getEmployee();
  }, []);
  const handleDelete = async(empID)=>{
    await axios.delete(`https://my-ord-emp-back-end.onrender.com/api/employees/${empID}`);
    getEmployee();
}
  const getEmployee = async() => {
    try {
      const response = await axios.get("https://my-ord-emp-back-end.onrender.com/api/employees")
      setEmployees(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>Our Employees</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th>Blood Group</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{employees.length && employees.map((employee,index) => {
          return (<tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.designation}</td>
                <td>{employee.address}</td>
                <td>{employee.mobileNumber}</td>
                <td>{employee.bloodGroup}</td>
                <td><Link to={`/employees/${employee._id}/update`} className="btn btn-link">Edit</Link>
                <button className="btn btn-link" onClick={()=>handleDelete(employee._id)}>Delete</button></td>
              </tr>
            )})}
      
        </tbody>
          
      </table>
    </div>
  );
};

export default EmployeeList;
