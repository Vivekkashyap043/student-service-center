import React from 'react'
import './AdminDashboard.css';
import { useContext, useEffect, useState } from 'react'
import {AccountContext} from "../../context/AccountProvider";
import BonafidePreview from './BonafidePreview';
import { Dialog, styled } from '@mui/material';
import IdCardPreview from './IdCardPreview';

const BonafidePreviewDialog = {
  height: '80%',
  width: "30%",
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  alignItems: 'center',
  overflow: 'hidden'
}

const IdCardPreviewDialog = {
  height: '80%',
  width: "30%",
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  alignItems: 'center',
  overflow: 'hidden'
}


function AdminDashboardHome() {

    let {eid} = useContext(AccountContext);
    let [adminName, setAdminName] = useState('')
    let [bonafides, setBonafides] = useState([]);
    let [idcards, setIdCards] = useState([]);

    const [openBonafidePreview, setOpenBonafidePreview] = useState(false);
    const [openIdCardPreview, setOpenIdCardPreview] = useState(false);

    const [selectedBonafide, setSelectedBonafide] = useState(null);
    const [selectedIdCard, setSelectedIdCard] = useState(null);

    const handleOpenBonafidePreview = (bonafideData) => {
      setSelectedBonafide(bonafideData);
      setOpenBonafidePreview(true);
    };
  
    const handleCloseBonafidePreview = () => {
      setOpenBonafidePreview(false);
    };
    const handleOpenIdCardPreview = (idcardData) => {
      setSelectedIdCard(idcardData);
      setOpenIdCardPreview(true);
    };
  
    const handleCloseIdCardPreview = () => {
      setOpenIdCardPreview(false);
    };

    useEffect(()=>{
        const getAdmin = async () =>{
         const res = await  fetch(`http://localhost:4000/admin?eid=${eid}`, {
            method: 'GET'
          });
          setAdminName(await res.text());
          console.log(adminName)
        }
        getAdmin();
      },[eid]);

      
      useEffect(()=>{
        const getBonafides = async () =>{
           const response = await fetch('http://localhost:4000/get-bonafides',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setBonafides(data);
        }
        getBonafides();
       },[eid])
       
       useEffect(() => {
        console.log("bonafides are : ", bonafides);
       }, [bonafides]);

       useEffect(()=>{
        const getIdCards = async () =>{
           const response = await fetch('http://localhost:4000/get-idcards',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setIdCards(data);
        }
        getIdCards();
       },[eid])
       
       useEffect(() => {
        console.log("idcards are : ", idcards);
       }, [idcards]);

  return (
    <div>
          <div className="marquee-container">
              <div className="marquee-content">
                  Welcome back, {adminName}
              </div>
          </div>
          <div className='rounded d-flex m-2' 
          style={{minWidth:'83rem', minHeight:"32rem", border:"2px solid black", background: "#E0E0E0"}}>
            <div className='col'>
                <h1 className='txt'>Id card applications</h1>
                <div className="row ms-2 mt-4 me-5" style={{fontWeight:700, fontSize:24}}>
                <div className="col">Roll No.</div>
                <div className="col ps-5">Preview</div>
                <div className="col ps-5">Reject</div>
                <div className="col ms-4">Accept</div>
              </div>
            <div style={{maxHeight: "25rem",minHeight: "25rem", overflow: 'auto', margin:"20px",}}>
              {idcards.map((object) => (
              <div className="row" key={object.rollnumber}>
                <div className="col">{object.rollnumber}</div>
                <div className="col"><button className='btn btn-primary' onClick={() => handleOpenIdCardPreview(object)}>Preview</button></div>
                <div className="col"><button className='btn btn-danger'>Reject</button></div>
                <div className="col"><button className='btn btn-success'>Accept</button></div>
                <hr className='mt-1'/>
              </div>
            ))}
          </div>
            </div>
            <div className="col" style={{minWidth:"50%", borderLeft: "2px solid black"}}>
            <h1 className='txt'>Bonafide applications</h1>
            <div className="row ms-2 mt-4 me-5" style={{fontWeight:700, fontSize:24}}>
                <div className="col">Roll No.</div>
                <div className="col ps-4">Preview</div>
                <div className="col ps-5">Reject</div>
                <div className="col ms-4">Accept</div>
              </div>
            <div style={{maxHeight: "25rem",minHeight: "25rem", overflow: 'auto', margin:"20px",}}>
              {bonafides.map((object) => (
              <div className="row" key={object.rollnumber}>
                <div className="col">{object.rollnumber}</div>
                <div className="col"><button className='btn btn-primary' onClick={() => handleOpenBonafidePreview(object)}>Preview</button></div>
                <div className="col"><button className='btn btn-danger'>Reject</button></div>
                <div className="col"><button className='btn btn-success'>Accept</button></div>
                <hr className='mt-1'/>
              </div>
            ))}
          </div>
            </div>
          </div>
          <Dialog open={openBonafidePreview} onClose={handleCloseBonafidePreview}
              PaperProps={{sx: BonafidePreviewDialog,style:{backgroundSize: 'cover'}}} hideBackdrop={false}>
                <BonafidePreview bonafideData={selectedBonafide} handleCloseBonafidePreview={handleCloseBonafidePreview}/>
          </Dialog>
          <Dialog open={openIdCardPreview} onClose={handleCloseIdCardPreview}
              PaperProps={{sx: IdCardPreviewDialog,style:{backgroundSize: 'cover'}}} hideBackdrop={false}>
                <IdCardPreview idCardData={selectedIdCard} handleCloseIdCardPreview={handleCloseIdCardPreview}/>
          </Dialog>
    </div>
  )
}

export default AdminDashboardHome
