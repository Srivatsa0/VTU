import React from 'react'
import{ useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddColleges() {

    const [colleges, setColleges] = useState(null)
  const [collegeName, setCollegeName] = useState()
  const [contactEmail,setContactEmail] = useState();
  const [collegeNumber, setCollegeNumber] = useState()
  const [collegeAltNumber,setCollegeAltNumber] = useState();
  const [collegePrinicipal,setCollegePrinicipal] = useState()
  const [collegeAddress,setCollegeAddress] = useState();
  const [pincode,setPincode] = useState();

    let history = useHistory()

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/collegeDetails")
            .then((response)=>{return response.json()})
            .then((data)=>{setColleges(data)})
            .catch((err)=>{console.log(err);})
        },3000)
    },[])

   
    let handleSubmit = (e) =>{
        e.preventDefault();

        var duplicate = colleges.some((col)=>{ return col.collegeName === collegeName})
        
        let college = {
            collegeName,contactEmail,collegeNumber,collegeAltNumber,collegePrinicipal,collegeAddress,pincode
        }
            if(duplicate === false)
            {
    
                     fetch("http://localhost:4000/collegeDetails",
                    {
                            method :"POST",
                            headers : {"Content-Type" : "application/json"},
                            body : JSON.stringify(college)
                    })
                    .then(()=>{history.push("/institutions")})
                    alert("collge details submitted successfully")
            }
              else
              {
                alert("college already existed")
              }      
    }
  return (
    <div className="college-adding">
          <h1>Add Colleges</h1>
        <form onSubmit={handleSubmit} >
            <div className="college-form">
            <label>College Name : </label>
            <input type="text" id="add-collge" placeholder='Enter College Name'  value={collegeName}onChange={(e)=>{setCollegeName(e.target.value)}}/>
            <label> Email Id :</label>
            <input type="email" id="coolege-email" placeholder='Enter College Email id...'  value={contactEmail}onChange={(e)=>{setContactEmail(e.target.value)}}  />
            <label htmlFor="">Contact Number :</label>
            <input type="number"  id="college-number" placeholder='Enter Contact Number...' value={collegeNumber}onChange={(e)=>{setCollegeNumber(e.target.value)}}  />
            <label >Alternate Number :</label>
            <input type="number"  id="college-alt-number" placeholder='Enter Alternate Number...' value={collegeAltNumber}onChange={(e)=>{setCollegeAltNumber(e.target.value)}}  />
            <label>Current principal :</label>
            <input type="text" id="college-prinicial" placeholder='Enter Prinicipal Name...' value={collegePrinicipal}onChange={(e)=>{setCollegePrinicipal(e.target.value)}} />
            <label > Address :</label>
            <input type="text" id="college-address" placeholder='Enter College Address... ' value={ collegeAddress}onChange={(e)=>{setCollegeAddress(e.target.value)}}  />
            <label >Pincode :</label>
            <input type="number" id="college-pincode" placeholder='Enter College pincode ....' value={ pincode}onChange={(e)=>{setPincode(e.target.value)}} />
            </div>
           <div className="college-add-submit">
             
           <button>Submit</button>
           </div>
        </form>
    </div>
  )
}

export default AddColleges