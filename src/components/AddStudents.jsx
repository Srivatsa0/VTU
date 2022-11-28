import React from 'react'
import  { useEffect, useState } from 'react';
import { set, useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

function AddStudents() {

    const [students, setStudents] = useState(null)
   const [studentName, setStudentName] = useState();
   const [studentUsn, setStudentUsn] = useState();
   const [emailid, setEmailid] = useState();
   const [studentContact, setStudentContact] = useState();
   const [dob, setDob] = useState();
   const [studentCourse, setStudentCourse] = useState();
   const [studentPuc, setStudentPuc] = useState();
   const [studentSslc, setStudentSslc] = useState();
   const [studentPhoto, setStudentPhoto] = useState();
   const [joiningYear, setJoiningYear] = useState();
   const [pucPercentage, setPucPercentage] = useState();
   const [pucyop, setPucyop] = useState();
   const [sslcYop, setSslcYop] = useState();
   const [sslcpercentage, setSslcpercentage] = useState();

    let history = useHistory();

    
    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/studentDetails")
            .then((response)=>{return response.json()})
            .then((data)=>{setStudents(data)})
            .catch((error)=>{console.log(error);})
        },3000)
    },[])

    let handleSubmit = (e) => {
        e.preventDefault();

        let student = {
            studentName,studentUsn,emailid,studentContact,dob,studentCourse,studentPuc,studentSslc,studentPhoto,
            joiningYear,pucPercentage,pucyop,sslcYop,sslcpercentage
        }

        var duplicate = students.some((student)=>{return student.studentName === studentName})

       if(duplicate === false)
       {
        fetch("http://localhost:4000/studentDetails",
        {
            method : "POST",
            headers :{  "Content-Type" :"application/json"},
            body:JSON.stringify(student)
        })
        .then(()=>{history.push("/studentscorner")})
        alert("student details Successfully submit")
       }
       else
       {
        alert("Student data already present,please try to insert new Student data")
        window.location.reload();
       }
        
    }
  return (
    <div className='college-adding'>
        <h1 >Add Student Details</h1>
        <form onSubmit={handleSubmit} >
            <div className="college-form">
                <label> Student Name :</label>
                <input type="text" id="student-name" placeholder='Enter Student Name...' value={studentName} onChange={(e)=>{setStudentName(e.target.value)}}  />
                <label > USN :</label>
                <input type="text"  id="student-usn" placeholder='Enter usn Number...' value={studentUsn } onChange={(e)=>{setStudentUsn(e.target.value)}}/>
                <label >Email Id :</label>
                <input type="email"  id="student-email" placeholder='Enter Student Email' value={ emailid}  onChange={(e)=>{setEmailid(e.target.value)}}/>
                <label >Contact Number :</label>
                <input type="number"  id="student-number" placeholder='Enter Student Contact...' value={studentContact} onChange={(e)=>{setStudentContact(e.target.value)}}/>
                <label > Date Of Birth : </label>
                <input type="Date"  id="dob"  value={dob} onChange={(e)=>{setDob(e.target.value)}} />
                <label >Course Selected :</label>
                <input type="text" placeholder='Enter student Course Selected...' value={studentCourse} onChange={(e)=>{setStudentCourse(e.target.value)}} />
                <label >Puc College :</label>
                <input type="text"   placeholder='Enter Puc College...' value={studentPuc} onChange={(e)=>{setStudentPuc(e.target.value)}}   />
                <label > SSLC : </label>
                <input type="text"  placeholder='Enter sslc college...' value={studentSslc} onChange={(e)=>{setStudentSslc(e.target.value)}}/>
                <label>Upload Student Photo : </label>
                <input type="url"  id="student-photo" placeholder='Enter students Photo..' value={studentPhoto} onChange={(e)=>{setStudentPhoto(e.target.value)}} />
                <label> Year Of Joining : </label>
                <input type="number"  placeholder='Year of joining' value={joiningYear} onChange={(e)=>{setJoiningYear(e.target.value)}} />
                <label > Puc Percentage : </label>
                <input type="text" id="pucpercentage" placeholder='Enter Students Puc Percentage...' value={ pucPercentage} onChange={(e)=>{setPucPercentage(e.target.value)}}/>
                <label > Puc yop : </label>
                <input type="number"  id="pucYop" placeholder='puc Year of Passout...' value={pucyop} onChange={(e)=>{setPucyop(e.target.value)}} />
                <label > Sslc yop : </label>
                <input type="number"  placeholder='sslc Year of Passout...' value={sslcYop} onChange={(e)=>{setSslcYop(e.target.value)}} />
                <label > sslc Percentage : </label>
                <input type="text"  id="pucYop" placeholder='sslc Year of Percentage...' value={sslcpercentage} onChange={(e)=>{setSslcpercentage(e.target.value)}} />
            </div>
            <div className="student-details-submit">
                    <button>Submit</button>
                </div>  
        </form>
    </div>
  )
}

export default AddStudents