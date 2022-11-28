import React from 'react'
import { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'

function StudentList() {

    const [stud, setStud] = useState(null)
    const [header, setHeader] = useState(false)
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(true)
    const [next, setNext] = useState(false)

    useEffect(()=>{

        setTimeout(()=>{
            fetch("http://localhost:4000/studentDetails")
            .then((response)=>{return response.json()})
            .then((data)=>{setStud(data); setLoader(false); setNext(true) ;setHeader(true)})
            .catch((error)=>{console.log(error);setError(true);setLoader(false)})
        },3000)

    },[])

  return (
    
    <div className='students-data'>
        { error && <div className="error">
       
          <img src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/error-500_f9bbb4.png" alt="" />
        
          <p>Please Check Your Systems internet or Wifi..</p>
          <Link to="/">Return To Home</Link>
        </div>  }
        { loader &&  <div className="lds-facebook"><div></div><div></div><div></div></div>}
         { header && <h1 align="center">List of Students</h1>}
        {stud &&
            <table border="1px">
                <thead>
                    <tr>
                        <th id='student-serial'>Serial no</th>
                        <th>  Name</th>
                        <th>USN</th>
                        <th>Email Id</th>
                        <th>Number</th>
                        <th>Course</th>
                        <th>Pre-University</th>
                        <th>Secondary Education</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    stud.map((student,i)=>{
                        return (
                            <tr key={student.id}>
                            <td>{i+1}</td>
                            <td>{student.studentName}</td>
                            <td>{student.studentUsn}</td>
                            <td>{student.emailid}</td>
                            <td>{student.studentContact}</td>
                            <td>{student.studentCourse}</td>
                            <td>{student.studentPuc}</td>
                            <td>{student.studentSslc}</td>
                            <td> <Link id='link-add-student' to={`studentdetails${student.id}`}>View</Link>
                            </td>
                        </tr>
                        )
                    })
                }
            </table>
        }
        { next && <Link id='student-add' to="/addstudents">Add Student Details</Link>}
    </div>
  )
}

export default StudentList