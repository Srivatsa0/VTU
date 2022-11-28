import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function UpdateStudent() {

    const [studentName, setStudentName] = useState()
    const [studentUsn, setStudentUsn] = useState()
    const [emailid, setEmailid] = useState()
    const [studentContact, setStudentContact] = useState()
    const [studentEngineering, setStudentEngineering] = useState()
    const [studentCourse, setStudentCourse] = useState()
    const [studentPuc, setStudentPuc] = useState()
    const [studentSslc, setStudentSslc] = useState()
    const [studentPhoto, setStudentPhoto] = useState()
    const [dob,setDob] = useState()
    const [sslcpercentage, setSslcpercentage] = useState()
    const [sslcYop, setSslcYop] = useState()
    const [pucyop, setPucyop] = useState()
    const [pucPercentage, setPucPercentage] = useState()

    useEffect(()=>{ 
      fetch(`http://localhost:4000/studentDetails/${id}`)
      .then((response)=>{return response.json()})
      .then((data)=>{
        setStudentName(data.studentName);
        setStudentUsn(data.studentUsn);
        setEmailid(data.emailid);
        setStudentContact(data.studentContact);
        setStudentEngineering(data.studentEngineering)
        setDob(data.dob);
        setStudentCourse(data.studentCourse);
        setStudentPuc(data.studentPuc);
        setStudentSslc(data.studentSslc);
        setStudentPhoto(data.studentPhoto);
        setSslcpercentage(data.sslcpercentage);
        setSslcYop(data.sslcYop);
        setPucyop(data.pucyop);
        setPucPercentage(data.pucPercentage);
        })
      .catch((error)=>{console.log(error);})
    } , [])

    let history = useHistory()

    let {id} = useParams()

    let handleSubmit = (e) =>{
      e.preventDefault();

      let student = {studentName,studentUsn,emailid,studentContact,studentEngineering,studentCourse,
        studentPuc,studentSslc,studentPhoto,dob,pucPercentage,pucyop,sslcYop,sslcpercentage
      }

      fetch(`http://localhost:4000/studentDetails/${id}`,
      {
        method : "PUT",
        headers :{
          "ACCEPT" : "application/json",
          "CONTENT-TYPE" : "application/json"
        },
        body : JSON.stringify(student)
      })
      .then(()=>{history.push("/studentscorner")})
      alert("succesfully updated Details")
    }
  

  return (
    <div className=' update-student'>
        <h1 align="center" id='update'>Upadte The Student Details </h1>
        <form onSubmit={handleSubmit} >
            <div className="college-form">
              
               <label> Student Name :</label>
                <input type="text" id="student-name" placeholder='Enter Student Name...' value={studentName}onChange={(e)=>{setStudentName(e.target.value)}}   />
                <label > USN :</label>
                <input type="text"  id="student-usn" placeholder='Enter usn Number...' value={studentUsn}onChange={(e)=>{setStudentUsn(e.target.value)}}/>
                <label >Email Id :</label>
                <input type="email"  id="student-email" placeholder='Enter Student Email' value={emailid}onChange={(e)=>{setEmailid(e.target.value)}}/>
                <label >Contact Number :</label>
                <input type="number" placeholder='Enter Student Contact...' value={studentContact}onChange={(e)=>{setStudentContact(e.target.value)}} />
                <label >Date Of Birth :</label>
                <input type="text" value={dob}onChange={(e)=>{setDob(e.target.value)}} />
                <label >Engineering College : </label>
                <input type="text"  id="Student-eng-college" placeholder='Student Engineering Colege...'value={studentEngineering}onChange={(e)=>{setStudentEngineering(e.target.value)}} />
                <label >Course Selected :</label>
                <input type="text" placeholder='Enter student Course Selected...' value={studentCourse}onChange={(e)=>{setStudentCourse(e.target.value)}} />
                <label >Puc College :</label>
                <input type="text"   placeholder='Enter Puc College...' value={studentPuc}onChange={(e)=>{setStudentPuc(e.target.value)}}  />
                <label > SSLC : </label>
                <input type="text"  placeholder='Enter sslc School...' value={ studentSslc}onChange={(e)=>{setStudentSslc(e.target.value)}}/>
                <label>Upload Student Photo : </label>
                <input type="url"  placeholder='Enter Url Of Students Photo...' value={studentPhoto}onChange={(e)=>{setStudentPhoto(e.target.value)}}/>
                <label > SSLC  Yop: </label>
                <input type="number"  placeholder='Enter sslc Yop...' value={ sslcYop}onChange={(e)=>{setSslcYop(e.target.value)}}/>
                <label > SSLC  Percentage : </label>
                <input type="text"  placeholder='Enter sslc Percentage...' value={ sslcpercentage}onChange={(e)=>{setSslcpercentage(e.target.value)}}/>
                <label > Puc  yop : </label>
                <input type="number"  placeholder='Enter Puc Yop...' value={ pucyop}onChange={(e)=>{setPucyop(e.target.value)}}/>
                <label > Puc  percentage : </label>
                <input type="text"  placeholder='Enter Puc percentage...' value={ pucPercentage}onChange={(e)=>{setPucPercentage(e.target.value)}}/>
              </div>
              <div className="student-details-submit">
                    <button>Submit</button>
                </div> 
        </form>
    </div>
  )
}

export default UpdateStudent