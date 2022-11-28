import React from 'react';
import { useState,useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import UpdateStudent from './UpdateStudent';

function StudentDetails() {

    const [about, setAbout] = useState(null)
    const [update, setUpdate] = useState(false)
    const [loader, setLoader] = useState(true)

    let {id} = useParams();

    let history = useHistory();

    useEffect(()=>{
        setTimeout(() => {
          fetch(`http://localhost:4000/studentDetails/${id}`)
        .then((response)=>{return response.json()})
        .then((data)=>{setAbout(data);setLoader(false)})
        .catch((error)=>{console.log(error);})
        }, 3000);
    },[])

    let handleDelete = (id) =>{
  
        fetch(`http://localhost:4000/studentDetails/${id}`,
        {
          method:"DELETE"
        })
        .then(()=>{history.push("/studentscorner")})
        alert("successfully Deleted Student details")
        window.location.reload();
      }
  


  return (
    <div className='about-student'>
      { loader && <div className="lds-facebook"><div></div><div></div><div></div></div>}
        {  about &&
            
           <div className="student">
            <h1 align="center">{about.studentName}</h1>
               <div className="student-flex">
               <div className="single-student-details">
                
                <h2>Usn : {about.studentUsn}</h2>
                <h2>Email id : {about.emailid}</h2>
                <h2>Number : {about.studentContact}</h2>
                <h2>
                    Course : {about.studentCourse}
                </h2>
                <h2>Date of Birth : {about.dob}</h2>
                <h2>College  : {about.studentEngineering}</h2>
                </div>
                <div className="student-updates">
                <div className="student-image">
                  <img src={about.studentPhoto} heigh="200px" width="200px" alt="no image found" />
                </div>
                <div className="delete-sudent">
                     <button id='delete-sudent' onClick={()=>{ handleDelete(about.id) }}>Delete </button>
                     <Link to={`/updatestudent${about.id}`}>update</Link>
                </div>
                </div>
               </div>
           </div>
        }
        {about && 
          <table align='center' border="1px" className='student-table'>
            <thead >
              <tr>
                <th>Serial no</th>
                <th>Education</th>
                <th>yop</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{1}</td>
                <td>{about.studentSslc}</td>
                <td>{about.sslcYop}</td>
                <td>{about.sslcpercentage}</td>
              </tr>
              <tr>
                <td>{2}</td>
                <td>{about.studentPuc}</td>
                <td>{about.pucyop}</td>
                <td>{about.pucPercentage}</td>
              </tr>
            </tbody>
          </table>
        }
          
            { update && about && <UpdateStudent previousDetails = {about}/>}
    </div>
  )
}



export default StudentDetails