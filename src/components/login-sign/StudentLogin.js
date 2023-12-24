import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useContext } from 'react'
import { AccountContext } from '../context/AccountProvider'
import './Login.css'

function StudentLogin() {

    let { register, handleSubmit} = useForm();
    let result;
    let navigate = useNavigate()
    let { setSid } = useContext(AccountContext);

    async function onStudentLogin(loginCredential) {
        console.log(loginCredential);
        const response = await fetch('http://localhost:4000/student/login', {
            method: 'POST',
            body: JSON.stringify(loginCredential),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await response.text();
        if (result === 'match') {
            setSid(loginCredential.sid);
            navigate("/student-dashboard");
        } else {
            console.log("invalid username or password");
        }
    }
  return (
    <form onSubmit={handleSubmit(onStudentLogin)}>
            <div className='back d-flex align-items-center justify-content-center' style={{minHeight:"41rem"}}>
        <div className="rounded bg-light m-5 p-5 w-30">
            <h1 className="text-center text-danger font-weight-bold mb-3">
                Student Login
            </h1>
            <div className="row  p-3">
                <div className="col">
                    <input type="text" placeholder="Enter student roll no" className="rounded ps-2"  {...register("sid", {required:true})}/>
                </div>
            </div>
            <div className="row  p-3">
                <div className="col">
                    <input type="password" placeholder='Enter password' className="rounded ps-2" {...register("password",{required: true})} />
                </div>
            </div>
            <div className="row">
                {
                    result === "notmatch" &&(
                        <p className="text-danger">invalid username or password</p>
                    )
                }
            </div>
            <div className="row ">
                <div className="col ms-4 ps-4 mt-2">
                    <button className='btn btn-success' style={{width: 160}}> Login</button>
                </div>
            </div>
            <div className="row p-3">
                <p>Don't have account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    </div>
    </form>

  )
}

export default StudentLogin
