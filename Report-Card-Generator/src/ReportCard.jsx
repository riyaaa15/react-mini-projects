import {  useState } from "react";
import ReportData from "./ReportData";
import "./ReportCard.css";

export default function ReportCard() {

  let [formData, setFormData] = useState({
    name: "",
    age: "",
    math: "",
    science: "",
    english: "",
    hindi: "",
    socialScience: "",
    computerScience: "",
  });

  let [reportData, setReportData] = useState(null);
  
  let handleChange = (e) => {
    setFormData({...formData,  [e.target.name]: e.target.value});
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    setReportData(formData);
    setFormData({name: "", age: "", math: "", science: "", english: "", hindi: "", socialScience: "", computerScience: ""});
  };
  
  return(
    <div className="container">
      <form onSubmit={handleSubmit}>

        <div className="name-age">
          
            <label htmlFor="name">Student Name</label>
           <input type="text" placeholder="Enter name..." value={formData.name} id="name" onChange={handleChange} name="name"/>
        
            <label htmlFor="age">Age</label>
            <input type="text" placeholder="Enter Age..." value={formData.age} id="age" onChange={handleChange} name="age"/>
        
        </div>

        <p>Marks (out of 100) </p>

        <div className="marks-container">
          <div>
            <label htmlFor="math">Math</label>
            <input type="number" placeholder="0" value={formData.math} id="math" onChange={handleChange} name="math"/>
          </div>

          <div>
            <label htmlFor="science">Science</label>
            <input type="number" placeholder="0" value={formData.science} id="science" onChange={handleChange} name="science"/>
          </div>

          <div>
            <label htmlFor="english">English</label>
            <input type="number" placeholder="0" value={formData.english} id="english" onChange={handleChange} name="english"/>
          </div>

          <div>
            <label htmlFor="hindi">Hindi</label>
            <input type="number" placeholder="0" value={formData.hindi} id="hindi" onChange={handleChange} name="hindi"/>
          </div>
          
          <div>
            <label htmlFor="socialScience">Social Science</label>
            <input type="number" placeholder="0" value={formData.socialScience} id="socialScience" onChange={handleChange} name="socialScience"/>
          </div>

          <div>
            <label htmlFor="computerScience">Computer Science</label>
            <input type="number" placeholder="0" value={formData.computerScience} id="computerScience" onChange={handleChange} name="computerScience"/>
          </div>
        </div>

        <button  className="submit-btn" type="submit">Generate Report Card</button>
      </form>
      
      {reportData && <ReportData 
      name={reportData.name}
      age={reportData.age}
      math={reportData.math}
      science={reportData.science}
      english={reportData.english} 
      hindi={reportData.hindi}
      socialScience={reportData.socialScience}
      computerScience={reportData.computerScience}
      /> 
      }
     
    </div>
  );
};