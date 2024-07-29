import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function EducationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    title: "",
    location: "",
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
            value={formData.schoolName} 
            onChange={handleChange} 
            placeholder="Enter school / university"
          />
          <CustomInput 
            label="Title of Study: " 
            name="title" 
            value={formData.title} 
            onChange={handleChange} 
            placeholder="Enter title of study"
          />
          <CustomInput 
            label="Location: " 
            name="location" 
            value={formData.location} 
            onChange={handleChange} 
            placeholder="Enter location"
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
          <SubmitButton 
            formData={formData} 
          />
        </form>
      )}
    </div>
  )
}