import React, { useState } from 'react'
import { useEffect, useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import './HomeDashboard.css'

function StudentDashboardHome() {

  let {sid} = useContext(AccountContext);
  let [studentData, setStudentData] = useState({});
  console.log(sid);

  useEffect(()=>{
    const getStudent = async () =>{
     const res = await  fetch(`http://localhost:4000/student/details?sid=${sid}`, {
        method: 'GET'
      });
      let data = await res.json();
      console.log("data is ",data);
      setStudentData(data);
      console.log("data", data.sid, " ", data.name)
    }
    getStudent();
  },[sid]);

  return (
    <div className='rounded d-flex m-3' style={{minWidth:'83rem', minHeight:"34rem", border:"2px solid black"}}>
      <div className='rounded col p-5' style={{minWidth:"30rem", background: "#E0E0E0"}}>
        <h1 className="welcome">Welcome back</h1>
        <p style={{marginLeft:"70px", marginTop:"30px", fontSize:24, color:"#3F51B5"}}>Here is your details</p>
        <div className='data'>
          <h4><span className='red'>Roll No </span>: <span className='green'>{studentData.sid} </span></h4>
          <h4><span className='red'>Name </span>: <span className='green'>{studentData.name} </span></h4>
          <h4><span className='red'>Gender </span>: <span className='green'>{studentData.gender} </span></h4>
          <h4><span className='red'>Email </span>: <span className='green'>{studentData.email} </span></h4>
          <h4><span className='red'>Phone </span>: <span className='green'>{studentData.phone} </span></h4>
        </div>
        <div>
          <h3 className='text-center mt-4 mb-4 text-primary' style={{marginRight: "300px"}}>status</h3>
          <p style={{color:"navy"}}>id card status : {studentData.idcardStatus}</p>
          <p style={{color:"navy"}}>Bonafide status : {studentData.bonafideStatus}</p>
        </div>
      </div>
      <div className='rounded col' style={{minWidth:"53rem", background: "#E0E0E0", borderLeft: "2px solid black"}}>
        <div className="m-5 p-5" style={{minWidth:"50rem", background: "#E0E0E0", borderRight: "2px solid black"}}>
        <h1 className='apply'>Apply for</h1>
         <h1 className='applynext'>New id card or Bonafide</h1>
         <h5 className='mt-5 text-danger'>Terms and condition</h5>
         <ul>
          <li>Be sure your entered data are valid</li>
          <li>Apply for id card only when you really lost you id card</li>
          <li>For new id card ₹100/- will charge at counter</li>
          <li>Apply for bonafide only when you required</li>
          <li>Missuse of bonafide will leads to take serious action</li>
          <li>you need to collect your id card or bonafide at counter</li>
         </ul>
        </div>
          
      </div>
    </div>
  )
}

export default StudentDashboardHome
