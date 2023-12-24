import React from 'react'
import './AdminDashboard.css';
import { useContext, useEffect, useState } from 'react'
import {AccountContext} from "../../context/AccountProvider";
import BonafidePreview from './BonafidePreview';
import { Dialog } from '@mui/material';
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

    let {ename} = useContext(AccountContext);
    let [bonafides, setBonafides] = useState([]);
    let [idcards, setIdCards] = useState([]);
    let [bonafideFlag, setBonafideFlag] = useState(false);
    let [idcardFlag, setIdcardFlag] = useState(false);
    let [bonafideAFlag, setBonafideAFlag] = useState(false);
    let [idcardAFlag, setIdcardAFlag] = useState(false);

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
///// id card rejected
    const onIdCardReject = async (idCardData)=>{
      console.log(idCardData.rollnumber,"  rejected");
      let rollnumber = idCardData.rollnumber;
      try {
        const response = await fetch(`http://localhost:4000/idcard/reject-idcard?rollnumber=${rollnumber}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          console.log("Some error occured");
        }
        setIdcardFlag(!idcardFlag);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error deleting idcard', error);
      }
    };

    // Id card accepted
    const onIdCardAccept= async (idCardData)=>{
      console.log(idCardData.rollnumber,"  rejected");
      let rollnumber = idCardData.rollnumber;
      try {
        const response = await fetch(`http://localhost:4000/idcard/accept-idcard?rollnumber=${rollnumber}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          console.log("Some error occured");
        }
        setIdcardAFlag(!idcardAFlag);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error deleting idcard', error);
      }
    };

    // bonafide reject
    const onBonafideReject = async (bonafideData)=>{
      console.log(bonafideData.rollnumber,"  rejected");
      let rollnumber = bonafideData.rollnumber;
      try {
        const response = await fetch(`http://localhost:4000/bonafide/reject-bonafide?rollnumber=${rollnumber}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          console.log("Some error occured");
        }
        setBonafideFlag(!bonafideFlag);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error deleting bonafide', error);
      }
    }

// bonafide accepted
    const onBonafideAccept = async (bonafideData)=>{
      console.log(bonafideData.rollnumber,"  rejected");
      let rollnumber = bonafideData.rollnumber;
      try {
        const response = await fetch(`http://localhost:4000/bonafide/accept-bonafide?rollnumber=${rollnumber}`, {
          method: 'DELETE',
        });
  
        if (!response.ok) {
          console.log("Some error occured");
        }
        setBonafideAFlag(!bonafideAFlag);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error('Error deleting bonafide', error);
      }
    }

      
      useEffect(()=>{
        const getBonafides = async () =>{
           const response = await fetch('http://localhost:4000/bonafide/all-bonafides',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setBonafides(data);
        }
        getBonafides();
       },[])

       useEffect(()=>{
        const getBonafides = async () =>{
           const response = await fetch('http://localhost:4000/bonafide/all-bonafides',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setBonafides(data);
        }
        getBonafides();
       },[bonafideFlag, bonafideAFlag]);
      

       useEffect(()=>{
        const getIdCards = async () =>{
           const response = await fetch('http://localhost:4000/idcard/all-idcards',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setIdCards(data);
        }
        getIdCards();
       },[idcardFlag, idcardAFlag]);

       useEffect(()=>{
        const getIdCards = async () =>{
           const response = await fetch('http://localhost:4000/idcard/all-idcards',{
             method: 'GET'
           })
           const data = await response.json();
           console.log("data =",data)
           setIdCards(data);
        }
        getIdCards();
       },[])
       

  return (
    <div>
          <div className="marquee-container">
              <div className="marquee-content">
                  Welcome back, {ename} to your dashboard
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
                <div className="col"><button className='btn btn-danger' onClick={() => onIdCardReject(object)}>Reject</button></div>
                <div className="col"><button className='btn btn-success' onClick={() => onIdCardAccept(object)}>Accept</button></div>
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
                <div className="col"><button className='btn btn-danger' onClick={() => onBonafideReject(object)}>Reject</button></div>
                <div className="col"><button className='btn btn-success' onClick={() => onBonafideAccept(object)}>Accept</button></div>
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
