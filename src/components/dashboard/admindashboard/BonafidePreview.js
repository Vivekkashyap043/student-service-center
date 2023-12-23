import React from 'react'

function BonafidePreview({bonafideData, handleCloseBonafidePreview}) {
  return (
    <div style={{minWidth:"90%"}}>
      <div className='mt-5 '>
        <h1 className='mt-5 text-center text-secondary'>Student Details</h1>
      </div>
      <div className='container mt-5'>
        <div className="row m-3">
          <div className="col">Roll Number</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.rollnumber}</div>
        </div>
        <div className="row m-3">
          <div className="col">Full Name</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.fullname}</div>
        </div>
        <div className="row m-3">
          <div className="col">Father Name</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.fathername}</div>
        </div>
        <div className="row m-3">
          <div className="col">Academic year</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.academicyear}</div>
        </div>
        <div className="row m-3">
          <div className="col">Semester</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.semester}</div>
        </div>
        <div className="row m-3">
          <div className="col">Reason for bonafide</div>
          <div className="col">:</div>
          <div className="col">{bonafideData.reason}</div>
        </div>
        <div className="row">
          <button className='btn btn-primary mt-4' style={{width:"200px", marginLeft:"25%"}}
           onClick={handleCloseBonafidePreview}>OK</button>
        </div>
      </div>
    </div>
  )
}

export default BonafidePreview
