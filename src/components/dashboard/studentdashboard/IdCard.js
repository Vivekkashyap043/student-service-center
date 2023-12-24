import React from 'react'
import {useForm} from 'react-hook-form'
import { useState } from 'react';

function IdCard() {

  let { register, handleSubmit, formState: { errors }} = useForm();
  let [res, setRes] = useState('');

  async function onidCardApply(idCardObj){
    const formData = new FormData();
    formData.append('rollnumber', idCardObj.rollnumber);
    formData.append('fullname', idCardObj.fullname);
    formData.append('branch', idCardObj.branch);
    formData.append('photo', idCardObj.photo[0]); // Assuming photo is a FileList
    formData.append('address', idCardObj.address);
    const response = await fetch('http://localhost:4000/idcard/apply', {
      method: 'POST',
      body: formData,
    });
    setRes(await response.text());
    console.log(res);
  }

  return (
    <div style={{minHeight:"100%", minWidth:"100%"}}>
      <div className="container d-flex justify-content-center">
        <form className='rounded mx-auto mt-5 mb-5 border p-4 bg-light' style={{minWidth:'30rem'}} onSubmit={handleSubmit(onidCardApply)}>
          <h2 style={{textAlign:"center", color:"blue", marginBottom:"20px"}}>Fill the form for new Id card</h2>
          <div>
            <label htmlFor="htn" className='form-label'>
              Roll Number
            </label>
            <input type="text" className='form-control' {...register("rollnumber", { required: true })} />
            {errors.rollnumber?.type === "required" && (
              <p className="text-danger">Roll No. is required</p>
            )}
            <label htmlFor="fullname" className='form-label'>
              Full Name
            </label>
            <input type="text" className='form-control' {...register("fullname", { required: true })} />
            {errors.fullname?.type === "required" && (
              <p className="text-danger">Name is required</p>
            )}
            <div className="row">
              <div className="col">
                <label htmlFor="branch" className='form-label'>
                  Branch
                </label>
                <input type="text" className='form-control' {...register("branch", { required: true })} />
                {errors.branch?.type === "required" && (
                  <p className="text-danger">Branch is required</p>
                )}
              </div>
              <div className="col">
                <label htmlFor="photo" className='form-label'>
                  Passport Photo
                </label>
                <input type="file" className='form-control' {...register("photo", { required: true })} />
                {errors.photo?.type === "required" && (
                  <p className="text-danger">Photo is required</p>
                )}
              </div>
            </div>
            <label htmlFor="reason" className='form-label'>
              Address
            </label>
            <input type="text" className='form-control' {...register("address", { required: true })} />
            {errors.address?.type === "required" && (
              <p className="text-danger">Address is required</p>
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

export default IdCard
