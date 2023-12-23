import React from 'react'

function IdCardPreview({idCardData, handleCloseIdCardPreview}) {
  return (
    <div style={{minWidth:"90%"}}>
      <div className='mt-2'>
        <h1 className='mt-5 text-center text-secondary'>Student Details</h1>
      </div>
      <div className='container'>
        <div className='d-flex justify-content-center align-items-start'>
        <img
            src={`data:image/png;base64,${idCardData.photo}`} // Assuming the photo is in base64 format
            alt="User Photo"
            style={{ maxWidth: '200px', maxHeight: '200px', borderRadius:"50%", border:"1px solid black" }}
          />
        </div>
        <div className="row m-3">
          <div className="col">Roll Number</div>
          <div className="col">:</div>
          <div className="col">{idCardData.rollnumber}</div>
        </div>
        <div className="row m-3">
          <div className="col">Full Name</div>
          <div className="col">:</div>
          <div className="col">{idCardData.fullname}</div>
        </div>
        <div className="row m-3">
          <div className="col">Branch</div>
          <div className="col">:</div>
          <div className="col">{idCardData.branch}</div>
        </div>
        <div className="row m-3">
          <div className="col">Address</div>
          <div className="col">:</div>
          <div className="col">{idCardData.address}</div>
        </div>
        <div className="row">
          <button className='btn btn-primary mt-4' style={{width:"200px", marginLeft:"25%"}}
           onClick={handleCloseIdCardPreview}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default IdCardPreview
