import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function WorkExperienceForm() {
  const [formData, setFormData] = useState({
    companyName: "",
    positionTitle: "",
    responsibilities: "",
    startDate: "",
    endDate: "",
  })

  const [isShown, setIsShown] = useState(false);

  const toggleForm = (e) => {
    setIsShown(!isShown);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
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
            value={formData.schoolName} 
            onChange={handleChange} 
            placeholder="Enter company"
          />
          <CustomInput 
            label="Position title: " 
            name="positionTitle" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="Enter position title"
          />
          <CustomInput 
            label="Start date: " 
            name="startDate" 
            type="date"
            value={formData.startDate} 
            onChange={handleChange} 
            placeholder="Enter start date"
          />
          <CustomInput 
            label="End date: " 
            name="endDate" 
            type="date"
            value={formData.endDate} 
            onChange={handleChange} 
            placeholder="Enter end date"
          />
          <CustomInput 
            label="Responsibilities: " 
            name="responsibilities" 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="Enter responsibilities"
          />
          <SubmitButton 
            formData={formData} 
          />
        </form>
      )}
    </div>
  )
}