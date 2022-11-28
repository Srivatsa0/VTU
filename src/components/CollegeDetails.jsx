import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import UpdateCollege from './UpdateCollege';
import { Link } from 'react-router-dom';

function CollegeDetails() {

   let[details,setDetails] = useState(null)
    const [loader, setLoader] = useState(true)
   const [update, setUpdate] = useState(false)
   const [error, setError] = useState(false)

   let {id} = useParams()

   let history = useHistory();

   useEffect(()=>{
    
    setTimeout(()=>{
      fetch(`http://localhost:4000/collegeDetails/${id}`)
    .then((response)=>{return response.json()})
    .then((data)=>{setDetails(data);setLoader(false)})
    .catch((error)=>{console.log(error);setError(true);setLoader(false)})
    },3000)
   },[])

   let handleDelete = id =>{

    fetch(`http://localhost:4000/collegeDetails/${id}`,
    {
      method:"DELETE"
    })
    .then(()=>{history.push("/institutions")})
    alert("college details successfully deleted")
   }

  return (
    <div className='single-collegedetails'>
      {  error  && <div className="error">
        
          <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt="" />
        
          <p>Please Check Your Systems internet or Wifi..</p>
          <Link to="/">Return To Home</Link>
        
      </div>   }
       { loader && <div className="lds-facebook"><div></div><div></div><div></div></div>}
        { details && 
        <div className="display-college-details" key={details.id}>
            <div className="college-name">
          <h2 align="center">College : {details.collegeName}</h2>
        </div>
        <div className="college-flex">
        <div className="college-fulldetails">
          <h2>Principal : {details.collegePrinicipal}</h2>
          <h2>Contact : {details.collegeNumber}</h2>
          <h2>Alt Number : {details.collegeAltNumber}</h2>
          <h2>Email Id : {details.contactEmail}</h2>
          <p>Address : {details.collegeAddress}</p>
          <h2>Pincode : {details.pincode}</h2>
          <h2>Type : {details.type}</h2>
        </div>
        <div className="update-delete-college">
          <div className="college-image">
            <img src={details.photo} width="200px" height="200px" alt="image not found" />
          </div>
          <div className="college-buttons">
            <Link to={`UpdateCollege${details.id}`} className='college-update-link'>Update</Link>
            <button onClick={()=>{handleDelete(details.id)}}>Delete</button>
          </div>
        </div>
        </div>
        <h1 align="center" className='college-student-strength'>Student Strength</h1>
          <table border="1px" className='student-strength-table'>
            <thead>
              <tr>
                <th>Courses</th>
                <td>Mechanical</td>
                <td>Civil</td>
                <td>E&C</td>
                <td>Computer Science</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Strength</th>
                <td>{details.mechanical}</td>
                <td>{details.civil}</td>
                <td>{details.electrical}</td>
                <td>{details.computer}</td>
              </tr>
            </tbody>
          </table>
        </div>
        }

       { update && <UpdateCollege/>}
    </div>
  )
}

export default CollegeDetails