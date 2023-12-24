import React from 'react'
import {useForm} from 'react-hook-form'
import { Link } from 'react-router-dom';
import { useState } from 'react';

function StudentRegister() {

  let { register, handleSubmit, formState: { errors }} = useForm();
  let [result, setResult] = useState('');

  async function onStudentRegister(stdObj){
    const response = await fetch('http://localhost:4000/student/signup',{
      method: 'POST',
      body:JSON.stringify(stdObj),
      headers:{
        'Content-Type':'application/json'
      }
    })
    setResult(await response.text());
    console.log(result);
  }

  return (
    <div className="back">
        <div className="container d-flex justify-content-center">
          <div className="col-sm-7 mt-5 mb-5">
      <form
        className="rounded w-100 mx-auto mt-5 mb-5 border p-4 bg-light"
        onSubmit={handleSubmit(onStudentRegister)}
      >
            <h1 className="display-5 text-center text-primary">
              Student  Registration
            </h1>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="firstname" className="form-label">
                      Roll number
                    </label>
                    <input type="text"  className="form-control" {...register("sid", { required: true})} />
                    {/* validation error message of firstname */}
                    {errors.sid?.type === "required" && (
                      <p className="text-danger">Roll number is required</p>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Full Name
                    </label>
                    <input type="text"  className="form-control" {...register("name", { required: true, })} />
                    {/* validation error message of lastname */}
                    {errors.name?.type === "required" && (
                      <p className="text-danger">Name is required</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="dof" className="form-label">
                    Password
                    </label>
                    <input type="password" id="password" className="form-control" {...register("password", { required: true})} />
                    {/* validation error message of dob */}
                    {errors.password?.type === "required" && (
                      <p className="text-danger">Password is required</p>
                    )}
                  </div>
                </div>
                <div className="col">
                  <div className="mb-3">
                    <label>Gender</label>
                    {/* male */}
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: 7 }}>
                      <div className="form-check">
                        <input type="radio" id="m" className="form-check-input" value="male" {...register("gender")} />
                        <label htmlFor="m" className="form-check-label">Male</label>
                      </div>
                      <div className="form-check ms-3">
                        <input type="radio" id="f" className="form-check-input" value="female" {...register("gender")} />
                        <label htmlFor="f" className="form-check-label">Female</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input type="email" id="email" className="form-control" {...register("email", { required: true })} />
                    {/* validation error message of email */}
                    {errors.email?.type === "required" && (
                      <p className="text-danger">Email is required</p>
                    )}
                  </div>

                </div>
                <div className="col">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">
                      Mobile number
                    </label>
                    <input type="tel" id="phone" className="form-control" {...register("phone", { required: true, minLength: 10, maxLength: 10 })} />
                    {/* validation error message of mobile number */}
                    {errors.phone?.type === "required" && (
                      <p className="text-danger">Mobile number is required</p>
                    )}
                       {errors.phone?.type === "minLength" && (
                      <p className="text-danger">Mobile number should contains 10 digits</p>
                    )}
                    {errors.phone?.type === "maxLength" && (
                      <p className="text-danger">Mobile number should contains 10 digits</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {result==="unsuccess" && (
                      <p className="text-danger text-center">You have Already registered</p>
              )}
              {result==="success" && (
                      <p className="text-success text-center">Registered Successfully</p>
              )}
        <button className="btn btn-primary m-2">Register</button>
        <div className="row p-3">
                <p>Already register? <Link to="/login">Login</Link></p>
          </div>
      </form>
          </div>
        </div>
    </div>
  )
}

export default StudentRegister
