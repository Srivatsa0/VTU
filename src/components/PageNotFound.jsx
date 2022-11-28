import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className='page-not-found'>
       <div className="pnt-messsage">
       <div className="error-type">
          <img height="80px" width="80px" src="https://cdn.icon-icons.com/icons2/2072/PNG/96/bug_danger_data_internet_malware_security_virus_icon_127084.png"  />
          <span>404</span>
        </div>
        <p>We're Sorry, The Page You Requested  Could Not Be Found. PLease Go Back To The Homepage  or Contact us at vtusupport@start.me</p>
        <Link to="/">Home</Link>
       </div>
    </div>
  )
}

export default PageNotFound