import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateCollege() {

  const [collegeName, setCollegeName] = useState()
  const [contactEmail,setContactEmail] = useState();
  const [collegeNumber, setCollegeNumber] = useState()
  const [collegeAltNumber,setCollegeAltNumber] = useState();
  const [collegePrinicipal,setCollegePrinicipal] = useState()
  const [collegeAddress,setCollegeAddress] = useState();
  const [pincode,setPincode] = useState();
  const [photo,setPhoto] = useState();
  const [courseOffered,setCourseOffered] = useState();
  const [mechanical,setMechanical] = useState()
  const [computer,setComputer] = useState();
  const [electrical , setElectrical] = useState();
  const [civil,setCivil] = useState();
  const [ type,setType] = useState()

  useEffect(()=>{
    fetch(`http://localhost:4000/collegeDetails/${id}`)
    .then((response)=>{
      return response.json()
    })
    .then((data)=>{
      setCollegeName(data.collegeName)
      setContactEmail(data.contactEmail);
      setCollegeNumber(data.collegeNumber)
      setCollegeAltNumber(data.collegeAltNumber);
      setCollegePrinicipal(data.collegePrinicipal);
      setCollegeAddress(data.collegeAddress);
      setPincode(data.pincode);
      setPhoto(data.photo);
      setCourseOffered(data.courseOffered);
      setMechanical(data.mechanical);
      setElectrical(data.electrical);
      setComputer(data.computer);
      setCivil(data.civil);
      setType(data.type);
    })
    .catch((error)=>{console.log(error);})
  },[])

  let history  = useHistory();

  var {id} = useParams();

  let handleSubmit = e => {
    e.preventDefault();

    let college = {collegeName,contactEmail,collegeNumber,collegeAltNumber,collegePrinicipal,
      collegeAddress,pincode,photo, courseOffered,mechanical,computer,
      electrical,civil, type }

      fetch(`http://localhost:4000/collegeDetails/${id}`,
      {
        method: "PUT",
        headers : {
          "Accept" : "application/json",
          "Content-Type" : "application/json"
        },
        body :JSON.stringify(college)
      })
      .then(()=>{history.push("/institutions")})
      alert("college details updated successfully")
  }


   return (
    <div className=' update-student'>
        <h1 align="center" id='update'>Upadte The College Details </h1>
        <form onSubmit={handleSubmit} >
            <div className="college-form">
               <label> College Name :</label>
                <input type="text" id="student-name" placeholder='Enter College Name...' value={collegeName}onChange={(e)=>{setCollegeName(e.target.value)}}   />
                <label >Email Id :</label>
                <input type="email"  id="student-email" placeholder='Enter College Email' value={contactEmail}onChange={(e)=>{setContactEmail(e.target.value)}}/>
                <label >Contact Number :</label>
                <input type="number" placeholder='Enter College Contact...' value={collegeNumber}onChange={(e)=>{setCollegeNumber(e.target.value)}} />
                <label >Alternate Number :</label>
                <input type="number" value={collegeAltNumber}onChange={(e)=>{setCollegeAltNumber(e.target.value)}} />
                <label >Current Principal : </label>
                <input type="text"   placeholder='Current College Principal...'value={collegePrinicipal}onChange={(e)=>{setCollegePrinicipal(e.target.value)}} />
                <label >Course Offered :</label>
                <input type="text" placeholder='Enter Course offered...' value={courseOffered}onChange={(e)=>{setCourseOffered(e.target.value)}} />
                <label >Mechanical :</label>
                <input type="number"   placeholder='Enter Mechanical strength...' value={mechanical}onChange={(e)=>{setMechanical(e.target.value)}}  />
                <label > Computer Science : </label>
                <input type="number"  placeholder='Enter Cs strength...' value={ computer}onChange={(e)=>{setComputer(e.target.value)}}/>
                <label > Elctronics : </label>
                <input type="number"  placeholder='Enter Electronics strength...' value={ electrical}onChange={(e)=>{setElectrical(e.target.value)}}/>
                <label > Civil : </label>
                <input type="number"  placeholder='Enter Civil Strength...' value={ civil}onChange={(e)=>{setCivil(e.target.value)}}/>
                <label>Upload College Photo : </label>
                <input type="url"  placeholder='Enter Url Of College Photo...' value={photo}onChange={(e)=>{setPhoto(e.target.value)}}/>   
                <label > Type of College : </label>
                <input type="text"  placeholder='Government or private...' value={ type}onChange={(e)=>{setType(e.target.value)}}/>
                <label > Address : </label>
                <input type="text"  placeholder='EnterCollege Address...' value={ collegeAddress}onChange={(e)=>{setCollegeAddress(e.target.value)}}/>
                <label > Pincode : </label>
                <input type="number"  placeholder='Enter College Pincode...' value={ pincode}onChange={(e)=>{setPincode(e.target.value)}}/>
              </div>
              <div className="student-details-submit">
                    <button>Submit</button>
                </div> 
        </form>
    </div>
  )
}

export default UpdateCollege