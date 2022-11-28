import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route,Switch} from "react-router-dom"
import SecondNavbar from "./components/SecondNavbar";
import CollegeList from "./components/CollegeList";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AddColleges from "./components/AddColleges";
import CollegeDetails from "./components/CollegeDetails";
import StudentList from "./components/StudentList";
import AddStudents from "./components/AddStudents";
import StudentDetails from "./components/StudentDetails";
import UpdateStudent from "./components/UpdateStudent";
import PageNotFound from "./components/PageNotFound";
import UpdateCollege from "./components/UpdateCollege";
import Signup from "./components/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <SecondNavbar/>
        <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/institutions">
              <CollegeList/>
            </Route>

            <Route exact path="/addcolleges">
              <AddColleges/>
            </Route>

            <Route exact path="/studentscorner">
              <StudentList/>
            </Route>

            <Route exact path="/collegedetails:id">
              <CollegeDetails/>
            </Route>

            <Route exact path="/addstudents">
              <AddStudents/>
            </Route>

            <Route exact path="/about">
              <About/>
            </Route>

            <Route exact path="/contact">
              <Contact/>
            </Route>

            <Route exact path="/studentdetails:id">
              <StudentDetails/>
            </Route>

            <Route exact path="/updatestudent:id">
              <UpdateStudent/>
            </Route>

            <Route exact path="/UpdateCollege:id">
              <UpdateCollege/>
            </Route>

            <Route exact path="/signup">
              <Signup/>
            </Route>

            <Route exact path="*">
              <PageNotFound/>
            </Route>

        </Switch>
        
        <Footer/>
      </div>
    </Router>
      
  );
}

export default App;
