import { useState } from "react";
import CustomInput from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function WorkExperienceForm({ onChange, companyName, positionTitle, workStartDate, workEndDate, responsibilities }) {
  const [isShown, setIsShown] = useState(false);

  const toggleForm = () => {
    setIsShown(!isShown);
  }

  return (
    <div id="workExperienceForm">
      <div className="sectionHeader">
        <div>
          <h2>Work experience</h2>
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
            label="Company: " 
            name="companyName" 
            value={companyName} 
            onChange={onChange} 
            placeholder="Enter company"
          />
          <CustomInput 
            label="Position title: " 
            name="positionTitle" 
            value={positionTitle} 
            onChange={onChange} 
            placeholder="Enter position title"
          />
          <CustomInput 
            label="Start date: " 
            name="workStartDate" 
            type="date"
            value={workStartDate}
            max={workEndDate}
            onChange={onChange} 
            placeholder="Enter start date"
          />
          <CustomInput 
            label="End date: " 
            name="workEndDate" 
            type="date"
            value={workEndDate} 
            min={workStartDate}
            onChange={onChange} 
            placeholder="Enter end date"
          />
          <CustomInput 
            label="Responsibilities: " 
            name="responsibilities" 
            value={responsibilities} 
            onChange={onChange} 
            placeholder="Enter responsibilities"
          />
        </form>
      )}
    </div>
  )
}