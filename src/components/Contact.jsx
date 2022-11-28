import React from 'react';
import map from "../images/map.png"

function Enquiry() {
  return (
    <div className='Enquiry'>
        <div className="enquiry-title">
            <h1>CONTACT</h1>
        </div>
        <div className="helpline">
          <div className="helpline-numbers">
            <span>  General helpline numbers of Examination Section</span>
            <span>0831-2498147, 0831-2498196</span>
            <span>0831-2498131, 0831-2498136</span>
            <div className="work-hours">
              <span>Working hours :- 10.00 A.M. to 1.30 P.M.  -  2.30 P.M. to 5.30 P.M.</span>
              <span>1.30 P.M. to 2.30 P.M. ( Lunch Break )</span>
              <span>Second Saturday Holiday</span>
            </div>
          </div>
          <div className="map">
            <img src={map} height="400px" width="600px" alt="" />
          </div>
        </div>
        <div className="chancellor">
          <div className="chancellor-details">
            <span id='chancelor'>Vice Chancellor</span>
            <p>Visvesvaraya Technological University</p>
            <span>“Jnana Sangama”</span>
            <span>Belagavi : 590018</span>
            <span>Karnataka, India.</span>
            <span>Tel: 0831-2498225 ,2405454</span>
          </div>
        </div>
        <div className="Register">
          <div className="register-details">
            <span id='register'>The Registrar</span>
            <p>Visvesvaraya Technological University</p>
            <span>“Jnana Sangama”</span>
            <span>Belagavi : 590018</span>
            <span>Karnataka, India.</span>
            <div className="register-tele">
              <span>Tel: 0831-2498100</span>
              <span>E-mail : registrar@vtu.ac.in</span>
              <p>Note: For issues related to admission, academic matters and migration certificate etc.</p>
            </div>
          </div>
        </div>
        <div className="registrar-evaluation">
          <div className="registrar-details">
            <span className='evaluation'>The Registrar(Evaluation) </span>
            <p>Visvesvaraya Technological University</p>
            <span>“Jnana Sangama”</span>
            <span>Belagavi : 590018</span>
            <span>Karnataka, India.</span>
            <div className="evaluation-tele">
            <span>Tel: 0831-2498100</span>
            <span>E-mail : re@vtu.ac.in</span>
            <p>Note: For issues related to examination, results etc.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Enquiry