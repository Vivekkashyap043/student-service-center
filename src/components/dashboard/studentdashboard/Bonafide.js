import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react';

function Bonafide() {

  let { register, handleSubmit, formState: { errors }} = useForm();
  let [res, setRes] = useState('');

  async function onBonafideApply(bonafideObj){
    const response = await fetch('http://localhost:4000/bonafide/apply',{
      method: 'POST',
            body: JSON.stringify(bonafideObj),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    setRes(await response.text());
    console.log(res);
  }

  return (
    <div style={{minHeight:"100%", minWidth:"100%"}}>
      <div className="container d-flex justify-content-center">
        <form className='rounded mx-auto mt-5 mb-5 border p-4 bg-light' style={{minWidth:'30rem'}} onSubmit={handleSubmit(onBonafideApply)}>
          <h2 style={{textAlign:"center", color:"blue", marginBottom:"20px"}}>Fill the form for bonafide</h2>
          <div>
            <label htmlFor="htn" className='form-label'>
              Hall Ticket Number
            </label>
            <input type="text" className='form-control' {...register("rollnumber", { required: true })} />
            {errors.rollnumber?.type === "required" && (
              <p className="text-danger">H.T.No. is required</p>
            )}
            <label htmlFor="fullname" className='form-label'>
              Full Name
            </label>
            <input type="text" className='form-control' {...register("fullname", { required: true })} />
            {errors.fullname?.type === "required" && (
              <p className="text-danger">Name is required</p>
            )}
            <label htmlFor="fathername" className='form-label'>
              Father Name
            </label>
            <input type="text" className='form-control' {...register("fathername", { required: true })} />
            {errors.fathername?.type === "required" && (
              <p className="text-danger">Father Name is required</p>
            )}
            <label htmlFor="academicyear" className='form-label'>
              Academic year
            </label>
            <input type="text" className='form-control' {...register("academicyear", { required: true })} />
            {errors.academicyear?.type === "required" && (
              <p className="text-danger">Academic year is required</p>
            )}
            <label htmlFor="semester" className='form-label'>
              Semester
            </label>
            <input type="text" className='form-control' {...register("semester", { required: true })} />
            {errors.semester?.type === "required" && (
              <p className="text-danger">Semester is required</p>
            )}
            <label htmlFor="branch" className='form-label'>
              Branch
            </label>
            <input type="text" className='form-control' {...register("branch", { required: true })} />
            {errors.branch?.type === "required" && (
              <p className="text-danger">Branch is required</p>
            )}
            <label htmlFor="reason" className='form-label'>
              Reason for bonafide
            </label>
            <input type="text" className='form-control' {...register("reason", { required: true })} />
            {errors.reason?.type === "required" && (
              <p className="text-danger">Reason is required</p>
            )}
            {
              res === "success" && (
                <p className="text-success">Successfully applied</p>
            )}
            {
              res === "unsuccess" && (
                <p className="text-danger">You have already applied, your request is under process</p>
            )}
            <button className='btn btn-success mt-3' style={{minWidth:"10rem", display:"flex", justifyContent:"center", margin:"auto"}}>Apply</button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Bonafide
