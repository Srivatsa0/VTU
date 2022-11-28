import React, { useEffect, useState } from 'react'

function Home() {

  let [college,setCollege] = useState(null)
  const [students, setStudents] = useState(0)

  useEffect(()=>{
    fetch("http://localhost:4000/collegeDetails")
    .then((response)=>{return response.json()})
    .then((data)=>{let array =data.length
      setCollege(array)
      })
    .catch((error)=>{console.log(error);})
    
  },[college])

  useEffect(()=>{
    fetch("http://localhost:4000/studentDetails")
    .then((response)=>{return response.json()})
    .then((data)=>{
      let array1 = data.length
      setStudents(array1)
    })
    .catch((error)=>{console.log(error);})
  },[])



  return (
    <div className='home-page'>
      <img className='home-image' src="https://vtu.ac.in/wp-content/uploads/2022/08/vtu-banner-1a-1516x552-1-1516x552.jpg" alt="" />
      <div className="home-info">
        <div className="vtu-strength">
           <div className="college-strength">
            <span id='numbers'>{ college }</span>
            <span className='strength'>Engeering colleges</span>
          </div>
          <div className="vtu-started">
            <span id='numbers'>28</span>
            <span className='strength'>Years proud</span>
          </div>
          <div className="student-strength">
              <span id='numbers'>{ students }</span>
              <span className='strength'>Students</span>
            </div>
        </div>
      </div>
      <div className="vtu-moto">
        <div className="vtu-mission">
          <div className="image">
            <img height="100px" width="100px" src="https://vtu.ac.in/wp-content/uploads/2019/02/vision-vtu.png" alt="" />
          </div>
          <div className="mission-details">
          <span>ಉದ್ದೇಶ/ವಿಷನ್</span>
            <p>“ವಿಜ್ಞಾನ ಹಾಗೂ ತಂತ್ರಜ್ಞಾನ ವಿಷಯಗಳಲ್ಲಿ ಮುಂಚೂಣಿಯಲ್ಲಿದ್ದು, ಜಗತ್ತಿನ ಶ್ರೇಷ್ಟ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯಗಳಲ್ಲಿ ಒಂದಾಗಿದ್ದು. ಜಾಗತಿಕ ಮಟ್ಟದಲ್ಲಿ ಗುರುತಿಸಲ್ಪಟ್ಟ ಜ್ಞಾನದ ಪ್ರಸರಣ, ಸಂಶೋಧನಾ ವ್ಯಾಸಂಗದ ವಿಸ್ತಾರಣೆ ಹಾಗೂ ತಂತ್ರಜ್ಞಾನದ ಆವಿಷ್ಕಾರದಲ್ಲಿ ನಾಯಕತ್ವವನ್ನು ವಹಿಸುವುದು”.</p>
          </div>
        </div>
        <div className="vtu-orders">
          <div className="order">
            <img height="100px" width="100px" src="https://vtu.ac.in/wp-content/uploads/2019/09/images-1.png" alt="" />
          </div>
          <div className="orders-details">
            <span>ಆದೇಶ/ಮ್ಯಾಂಡೇಟ್</span>
            <p>“ರಾಜ್ಯದ ಹಾಗೂ ರಾಷ್ಟ್ರೀಯ ನೀತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣದ ಯೋಜಿತ ಮತ್ತು ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿಗೆ ಉತ್ತೇಜನ ನೀಡುವ ಸಲುವಾಗಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯವನ್ನು ಸ್ಥಾಪಿಸಿದೆ</p>
          </div>
        </div>
        <div className="vtu-goal">
          <div className="goal">
            <img height="100px" width="100px" src="https://vtu.ac.in/wp-content/uploads/2019/02/mission-vtu.png" alt="" />
          </div>
          <div className="goal-details">
              <span>ಗುರಿ/ಮಿಷನ್</span>
            <p>“ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣದ ಅಭಿವೃದ್ಧಿಗಾಗಿ ಯೋಜಿಸುವುದು, ಅರ್ಹ, ಸಮರ್ಥ ಹಾಗೂ ಪ್ರತಿಕ್ರಿಯಾಶೀಲರಾದ ತಾಂತ್ರಿಕ ವೃತ್ತಿಪರರನ್ನು ಉತ್ಪಾದಿಸಲು, ಅಗತ್ಯತೆಗೆ ಅನುಗುಣವಾಗಿ ಮೌಲ್ಯಾಧಾರಿತ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣ ಹಾಗೂ ತರಬೇತಿಯನ್ನು ಸ್ಥಾಪಿಸುವುದು</p>
          </div>
        </div>
      </div>
      <div className="home-button">
        <button>ಮುಂದೆ ಹೆಚ್ಚು ಓದಿ</button>
      </div>
      <div className="about-vidyashankar">
        <div className="vidyashankar">
          <img height="300px" src="https://vtu.ac.in/wp-content/uploads/2022/10/vcnew.jpg" alt="" />
        </div>
        <div className="vidyashankar-about">
          <span>ಮಾನ್ಯ ಕುಲಪತಿಗಳ ಸಂದೇಶ</span>
          <p>“ರಾಜ್ಯದ ಹಾಗೂ ರಾಷ್ಟ್ರೀಯ ನೀತಿಗಳಿಗೆ ಅನುಗುಣವಾಗಿ ತಾಂತ್ರಿಕ ಶಿಕ್ಷಣದ ಯೋಜಿತ ಮತ್ತು ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿಗೆ ಉತ್ತೇಜನ ನೀಡುವ ಸಲುವಾಗಿ ಕರ್ನಾಟಕ ಸರ್ಕಾರವು ವಿಶ್ವೇಶ್ವರಯ್ಯ ತಾಂತ್ರಿಕ ವಿಶ್ವವಿದ್ಯಾಲಯವನ್ನು ಸ್ಥಾಪಿಸಿದೆ
* ಅರ್ಹ ಹಾಗೂ ಸೂಕ್ತವಾದ ಮಾನವ ಸಂಪನ್ಮೂಲವನ್ನು ತಯಾರಿಸುವ ಸಲುವಾಗಿ ಅಗತ್ಯತೆಗೆ ಆಧಾರಿತ ಕೋರ್ಸ್ ಗಳನ್ನು ವಿನ್ಯಾಸ ಮಾಡುವುದು.
* ವಿದ್ಯಾರ್ಥಿಗಳು, ಕೋರ್ಸ್ಗಳು ಹಾಗೂ ಸಂಸ್ಥೆಗಳಿಗೆ ವಸ್ತುನಿಷ್ಠ ಮೌಲ್ಯಮಾಪನ ಮತ್ತು ಪ್ರಮಾಣೀಕರಣ ವ್ಯವಸ್ಥೆಯನ್ನು ಸ್ಥಾಪಿಸುವುದು.
* ರಾಷ್ಟ್ರೀಯ ಹಾಗೂ ಅಂತರರಾಷ್ಟ್ರೀಯ ಸಂಸ್ಥೆಗಳು, ಸಂಶೋಧನಾ ಸಂಸ್ಥೆಗಳು ಶಾಸನಬದ್ಧ ಸಂಸ್ಥೆಗಳಾದ AICTE,MHRD,UGC ಮುಂತಾದವುಗಳೊಂದಿಗೆ ಸಹಭಾಗಿತ್ವವನ್ನು ಏರ್ಪಡಿಸುವುದು.”.</p>
        </div>
      </div>
    </div>
  )
}

export default Home