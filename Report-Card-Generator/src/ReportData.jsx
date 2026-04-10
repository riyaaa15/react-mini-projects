import "./ReportData.css";

export default function ReportData({
    name, age, math, science, english}){

    let total = Number(math) + Number(science) + Number(english);
    let percentage = (total / 300) * 100;

    let grade = "";

    if(percentage >= 90) grade="A";
    else if(percentage >= 75) grade = "B";
    else if(percentage >= 60) grade = "C";
    else if(percentage >= 40) grade = "D";
    else grade = "F";

    let result = percentage >= 40 ? "Pass" : "Fail";
    return(
        <div className="report-container"> 
            <h3>{name}</h3>
            <p className="age">Age: {age}</p>


           <div className="stats">
            <div>
                <p className="stats-label">Total Marks</p>
                <p className="stats-value">{total}/300</p>
            </div>
            <div>
                <p className="stats-label">Percentage</p>
                <p className="stats-value">{percentage.toFixed(1)}%</p>
            </div>
        </div>

        <div className="subjects">
            <div className="subject-row">
                <span>Math</span>
                <span>{math}</span>
            </div>
            <div className="subject-row">
                <span>Science</span>
                <span>{science}</span>
            </div>
            <div className="subject-row">
                <span>English</span>
                <span>{english}</span>
           </div>
        </div>    

            <div className="grade-result">
                <span>Grade {grade}</span>
                <span>{result}</span>
            </div>
            
        </div>
    )
}