import { useState } from "react";
import CustomInput from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function EducationForm({ onChange, schoolName, location, schoolStartDate, schoolEndDate, educationTitle }) {
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  }

  return (
    <div id="educationForm">
      <div className="sectionHeader">
        <div>
          <h2>Education</h2>
        </div>
        {isShown && 
          <div className='dropdown-arrow'>
            <FontAwesomeIcon icon={faAngleUp} onClick={toggleForm} />
          </div>
        }
        {!isShown && 
          <div className='dropdown-arrow'>
            <FontAwesomeIcon icon={faAngleDown} onClick={toggleForm} />
          </div>
        }
      </div>

      {isShown && (
        <form>
          <CustomInput 
            label="School: " 
            name="schoolName" 
            value={schoolName} 
            onChange={onChange} 
            placeholder="Enter school / university"
          />
          <CustomInput 
            label="Title of Study: " 
            name="educationTitle" 
            value={educationTitle} 
            onChange={onChange} 
            placeholder="Enter title of study"
          />
          <CustomInput 
            label="Location: " 
            name="location" 
            value={location} 
            onChange={onChange} 
            placeholder="Enter location"
          />
          <CustomInput 
            label="Start date: " 
            name="schoolStartDate" 
            type="date"
            value={schoolStartDate} 
            onChange={onChange} 
            placeholder="Enter start date"
          />
          <CustomInput 
            label="End date: " 
            name="schoolEndDate" 
            type="date"
            value={schoolEndDate} 
            onChange={onChange} 
            placeholder="Enter end date"
          />
        </form>
      )}
    </div>
  )
}