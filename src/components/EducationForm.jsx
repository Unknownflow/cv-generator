import CustomInput from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export default function EducationForm({ educationInfo, onChange, removeEducationInfo, addEducationForm }) {
  return (
    <div id="educationForm">
      <div className="sectionHeader">
        <h2><FontAwesomeIcon icon={faGraduationCap} /> Education</h2>
      </div>
      
      {
        educationInfo.map((education, index) => (
          <div className="educationContainer" key={education.id}>
            {educationInfo.length >= 1 && 
              <div className="subHeading">
                <div>
                  <h3>Education {index+1}</h3>
                </div>
                <div onClick={(e) => removeEducationInfo(education.id)}>
                  <FontAwesomeIcon icon={ faTrashCan } />
                </div>
              </div>
            }

            <CustomInput 
              label="School: " 
              name="schoolName" 
              value={education.schoolName} 
              onChange={(e) => onChange(e, education.id)} 
              placeholder="Enter school / university"
            />
            <CustomInput 
              label="Title of Study: " 
              name="title" 
              value={education.title} 
              onChange={(e) => onChange(e, education.id)} 
              placeholder="Enter title of study"
            />
            <CustomInput 
              label="Location: " 
              name="location" 
              value={education.location} 
              onChange={(e) => onChange(e, education.id)} 
              placeholder="Enter location"
            />
            <CustomInput 
              label="Start date: " 
              name="startDate" 
              type="date"
              value={education.startDate} 
              max={education.endDate}
              onChange={(e) => onChange(e, education.id)} 
              placeholder="Enter start date"
            />
            <CustomInput 
              label="End date: " 
              name="endDate" 
              type="date"
              value={education.endDate} 
              min={education.startDate}
              onChange={(e) => onChange(e, education.id)} 
              placeholder="Enter end date"
            />
          </div>
        
      ))} 
      <div className="addEducation">
        <button 
          className="addEducationButton"
          onClick={addEducationForm}
        >
          Add Education
        </button>
      </div>
    </div>
  )
}