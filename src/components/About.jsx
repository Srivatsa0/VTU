import React from 'react';
import { useState } from 'react';

function About() {
    
    return (
        <div className='about-page'>
             
            <h1 align="center">Visvesvaraya Technological University (VTU)</h1>
<div className='about-vtu'>
           <div className="about-history">
                <h2>History</h2>
                <hr />
                <p><b>Visvesvaraya Technological University (VTU)</b> was established by the Government of Karnataka on <b>1 April 1998 </b> with its headquarters at 
                    Belagavi, as per the provisions of the <b>Visvesvaraya Technological University Act, 1994</b>, an Act to establish and incorporate a university 
                    in the State of Karnataka for the development of engineering, technology and allied sciences. For effective administration, 
                    four regional offices at the four revenue divisional headquarters, namely,<b>Belagavi, Bangalore, Mysore and Gulbarga </b> were established. 
                    VTU was established by the Government in order to promote planned and sustainable development of technical education consistent with state 
                    and national policies and bringing various colleges affiliated earlier to different universities, with different syllabi, different procedures 
                    and different traditions under one umbrella.</p>
            </div>
            <div className="about-campus">
                <h2>Campus</h2>
                <hr />
                <p>As per the provisions of the VTU Act 1994, the headquarters of the university is at <b>Belagavi</b>, Karnataka. The VTU headquarters is named <b>“Jnana Sangama”</b>. Additionally, the university has three regional centres in Bangalore, Kalaburagi and Mysore. Visvesvaraya Institute of Advanced Technology,
                     also known as <b>VIAT</b>, is a research institute being constructed near Muddenahalli, Karnataka.</p>
                <table border="1px" align="center" id='campus-table' >
                    <thead>
                        <tr >
                            <th>Campus</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Campus Area</th>
                        </tr>
                    </thead>
                    <tbody id='campus-table-body'>
                        <tr >
                            <td >VTU Main Campus - Belagavi</td>
                            <td>	Jnana Sangama, Machhe, Belagavi - 590018</td>
                            <td>Semi-Urban</td>
                            <td>120 acres (0.49 km2)</td>
                        </tr>
                        <tr>
                            <td>VTU Regional Center - Bangalore</td>
                            <td>RHCS Layout, Annapoorneshwarinagar, Nagarbhavi, Bangalore - 560091.</td>
                            <td>Urban</td>
                            <td>1 acre (0.0040 km2)</td>
                        </tr>
                        <tr>
                            <td>VTU Regional Center - Mysore</td>
                            <td>Hanchya Sathagally Layout, Ring Road, Mysore - 570019.</td>
                            <td>Urban</td>
                            <td>42 acres (0.17 km2)</td>
                        </tr>
                        <tr>
                            <td>VTU Regional Center - Gulbarga</td>
                            <td>Rajapura, Kusnoor Road, Gulbarga - 585106</td>
                            <td>Urban</td>
                            <td>15 acres (0.061 km2)</td>
                        </tr>
                        <tr>
                            <td>Visvesvaraya Institute of Advanced Technology (VIAT)</td>
                            <td>Muddenahalli, Singadikadirenahalli - 562103</td>
                            <td>Rural</td>
                            <td>200 acres (0.81 km2)</td>
                        </tr>
                    </tbody>
                </table>
                <p>The university also has 13 Quality Improvement Programme (QIP) centers in various affiliated colleges and 16 extension centers for offering postgraduate programs. It has around 2,305 departments recognised as research centres which are spread across its affiliated institutions in Karnataka.[12][13] The Jnana Sangama, Belagavi campus and the regional and extension centres of VTU at 
                    Bangalore, Davangere, Gulbarga and Mysore offer M.Tech, MBA, MCA and PhD programs</p>
            </div>
            <div className="about-academics">
                <h2>Academics</h2>
                <hr />
                <div className="academics">
                    <h3>Academic programmes</h3>
                    <p>TU offers undergraduate engineering programs that award a Bachelor of Engineering (BE) or Bachelor of Technology (B.Tech.) degree. The university offers postgraduate programs that lead to Master of Technology (M.Tech.),Master of Architecture (M.Arch) Master of Science (MSc) by research, Master of Business Administration (MBA), Master of Computer Applications (MCA) and doctorate (PhD). 
                        The MSc and PhD are research degrees while the rest are taught degrees.</p>
                </div>
                <div className="academics-courses">
                    <h3>Undergraduate courses</h3>
                    <p className="academics-courses-p1">The university has 12 undergraduate boards which offer Bachelor of Engineering (B.E.) 
                        programs and one undergraduate board which offers Bachelor of Architecture (BArch) course:</p>
                        <table border="1px" className='academics-courses-table'>
                            <thead>
                                <tr>
                                    <th>Board</th>
                                    <th>Undergraduate courses in English medium</th>
                                </tr>
                            </thead>
                            <tbody id='academic-courses-data'>
                                <tr>
                                    <td>Architecture‡</td>
                                    <td>Architecture</td>
                                </tr>
                                <tr>
                                    <td>Automobile Engineering</td>
                                    <td>Automobile Engineering</td>
                                </tr>
                                <tr>
                                    <td>Biotechnology</td>
                                    <td>Bio-technology</td>
                                </tr>
                                <tr>
                                    <td>Civil Engineering</td>
                                    <td>	Ceramics & Cement Technology, Civil Engineering, Environmental Engineering</td>
                                </tr>
                                <tr>
                                    <td>Chemical / Polymer Engineering</td>
                                    <td>Chemical Engineering, Silk Technology, Textile Technology, Polymer Science & Technology</td>
                                </tr>
                                <tr>
                                    <td>CSE / ISE</td>
                                    <td>	Computer Science & Engineering and Information Science & Engineering</td>
                                </tr>
                                <tr>
                                    <td>Electrical Engineering</td>
                                    <td>Electrical & Electronics Engineering</td>
                                </tr>
                                <tr>
                                    <td>Electronics & Communication Engineering</td>
                                    <td>Electronics & Communication Engineering, Telecommunication Engineering</td>
                                </tr>
                                <tr>
                                    <td>IPE / IEM / MA</td>
                                    <td>Industrial & Production Engineering, Industrial Engineering & Management, Manufacturing Science & Engineering</td>
                                </tr>
                                <tr>
                                    <td>IT / BM / ML</td>
                                    <td>Biomedical Engineering, Instrumentation Technology, Medical Electronics</td>
                                </tr>
                                <tr>
                                    <td>Mechanical Engineering</td>
                                    <td>Aeronautical Engineering, Mechanical Engineering, Mining Engineering, Precision Engineering, Printing Technology, Tool Engineering</td>
                                </tr>
                                <tr>
                                    <td>Mechatronics Engineering</td>
                                    <td>Mechatronics Engineering</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className='academics-courses-p2'>The Architecture board offers the Batch course.</p>
                </div>
                <div className="academics-syllabus">
                    <h3>Scheme and syllabus</h3>
                    <p>Visvesvaraya Technological University accomplished its primary task of setting a common syllabus across the state in 1998. The university regularly revises the syllabus keeping in view technology upgrades around the world. The syllabus has been updated in 2002, 2006, 2010, 2014, 2015, 2017, 2018 and 2021. VTU adopted a Choice Based Credit System (CBCS) for students admitted to the university from the academic year 2015–2016.[20] The CBCS provides a choice for students to select from the prescribed courses (i.e. core, elective, foundation and mandatory non-credit courses). As part of the new CBCS scheme, VTU also moved to a Cumulative Grade Point Average (CGPA) grading system from the previous system of awarding percentage and class to students. 
                        VTU has also made an internship of eight weeks mandatory for undergraduate and postgraduate engineering students in affiliated colleges.</p>
                </div>
                <div className="academics-grading">
                    <h3>Grading</h3>
                    <p>For students matriculating since the academic year 2015–2016, VTU adopts an absolute grading system wherein the marks are converted to grades, and every semester results are declared with a semester grade point average (SGPA) and a Cumulative Grade Point Average (CGPA). To obtain a degree, in addition to clearing all the subjects, 
                        a student must also obtain a minimum CGPA of five (5.0).</p>
                </div>
                <h3 className="grading-table" align="center">
                VTU Grade Points Scale
                </h3>
                <table id='grading-table' border="2px" >
                    <thead>
                        <tr>
                            <th>Level</th>
                            <th>OutStanding</th>
                            <th>Excellent</th>
                            <th>Very Good</th>
                            <th>Good</th>
                            <th>Above Average</th>
                            <th>Average</th>
                            <th>Poor</th>
                            <th>Fail</th>
                        </tr>
                    </thead>
                    <tbody id='grading-table-body'>
                        <tr>
                            <td>Letter Grade</td>
                            <td>O</td>
                            <td>S</td>
                            <td>A</td>
                            <td>B</td>
                            <td>C</td>
                            <td>D</td>
                            <td>E</td>
                            <td>F</td>
                        </tr>
                        <tr>
                            <td>Grade Points</td>
                            <td>10</td>
                            <td>9</td>
                            <td>8</td>
                            <td>7</td>
                            <td>6</td>
                            <td>5</td>
                            <td>4</td>
                            <td>3</td>
                        </tr>
                        <tr><td>Score (Marks) Range (%)</td>
                        <td>≥ 90</td>
                        <td> 90 ≥ 80</td>
                        <td> 80 ≥ 70</td>
                        <td> 70 ≥ 60</td>
                        <td> 60 ≥ 50</td>
                        <td> 50 ≥ 45</td>
                        <td> 45 ≥ 40</td>
                        <td> 40</td></tr>
                    </tbody>
                </table>
                <p className='percentage-cal'>Prior to the introduction of the Choice Based Credit System, students were awarded a percentage and a class, as defined:</p>
                <ol className='grading-details' type='1'>
                    <li>First class with distinction (FCD): Not less than 70% of the aggregate marks in first attemp</li>
                    <li>First class (FC): Less than 70% but not less than 60% of the aggregate marks in first attempt</li>
                    <li>Second class (SC): Less than 60% of the aggregate marks in first attem</li>
                </ol>
            </div>
           </div>
        </div>
    )
}

export default About