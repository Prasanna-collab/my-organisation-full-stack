import React from 'react'
import "./updateemployee.css"
import {useState} from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const UpdateEmployee = () => {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params)
  const id = params.id
  useEffect(() => {
    axios.get(`https://my-ord-emp-back-end.onrender.com/api/employees/${id}`).then(response=>{
      setEmployee(response.data.data);
    }).catch(error =>{
      console.log(error)
    })
     
   
  }, [id]);
  
  const [employee, setEmployee] = useState([{
    name:"",
    email:"",
    designation:"",
    mobileNumber:"",
    address:"",
    bloodGroup:""
  }]);
  const handleInput= (value)=>{
    return setEmployee((employ)=>{
      return {...employ, ...value}
    })
  }
  const handleSubmit = async(e)=>{
      e.preventDefault();
      try {
        const response = await axios.put(`${process.env.REACT_APP_BASE_URL}/employees/${id}`, employee)
          if(response){
            setEmployee({
              name:"",
              email:"",
              designation:"",
              mobileNumber:"",
              address:"",
              bloodGroup:""
            })
          }
          navigate('/')
      } catch (error) {
        console.log(error)
      }
  }
  return (
    <div className='update-employee'>
      <h2>UpdateEmployee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input id="name" className="form-control" type="text" value={employee.name}
          onChange={(e)=>handleInput({name: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input id="email" className="form-control" type="text" value={employee.email}
          onChange={(e)=>handleInput({email: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="designation">Designation</label>
          <input id="designation" className="form-control" type="text" value={employee.designation}
          onChange={(e)=>handleInput({designation: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input id="address" className="form-control" type="text" value={employee.address}
          onChange={(e)=>handleInput({address: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input id="mobile" className="form-control" type="text" value={employee.mobileNumber}
          onChange={(e)=>handleInput({mobileNumber: e.target.value})}/>
        </div>
        <div className="form-group">
          <label htmlFor="blood">Blood Group</label>
          <input id="blood" className="form-control" type="text" value={employee.bloodGroup}
          onChange={(e)=>handleInput({bloodGroup: e.target.value})}/>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit">Submit</button>
        </div>
      </form>
      </div>
  )
}

export default UpdateEmployee