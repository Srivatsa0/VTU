import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function CollegeList() {

   let [colleges,setColleges] = useState(null)
   const [loader, setLoader] = useState(true)
    const [add, setAdd] = useState(false)
    const [header, setHeader] = useState(false)
    const [error, setError] = useState(false)

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/collegeDetails")
            .then((response)=>{return response.json()})
            .then((data)=>{setColleges(data);setAdd(true);setLoader(false);setHeader(true)})
            .catch((err)=>{console.log(err);setError(true)})
        },3000)
    },[])
    

   
  return (
    <div className='collegelist-display'>
      {  error  && <div className="error">
        
        <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt="" />
      
        <p>Please Check Your Systems internet or Wifi..</p>
        <Link to="/">Return To Home</Link>
      
    </div>   }
      { loader &&  <div className="lds-facebook"><div></div><div></div><div></div></div>}
      { header && <h1 align="center">List Of Engineering Colleges</h1>}
      
        {colleges && 
         
           <table align='center' border="1px">
              <thead>
                  <tr>
                    <th>Serial.no</th>
                    <th>College Name</th>
                    <th>Prinicipal</th>
                    <th>Contact Number</th>
                    <th>Alternative Number</th>
                    <th>Email Id</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
              </thead>
              {
                colleges.map((college,i)=>{
                  return(
                    
                     <tr>
                        <td>{i+1}</td>
                        <td>{college.collegeName}</td>
                        <td>{college.collegePrinicipal}</td>
                        <td>{college.collegeNumber}</td>
                        <td>{college.collegeAltNumber}</td>
                        <td>{college.contactEmail}</td>
                        <td>{college.collegeAddress}{college.pincode}</td>
                        <td><Link to={`collegeDetails${college.id}`}>View</Link></td>
                    </tr>
                   
                  )
                })
              }
           </table>
         
        }
       { add && <Link to="/addcolleges" id='add-college'>Add New College Details</Link> }
    </div>
  )
}

export default CollegeList