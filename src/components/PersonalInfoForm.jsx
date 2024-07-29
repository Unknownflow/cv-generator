import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons'

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
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
    <div id="personalInfoForm">
      <div className="sectionHeader">
        <div>
          <h2>Personal info</h2>
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
        <form className="personalInfo">
        <CustomInput 
          label="Name: " 
          name="name" 
          value={formData.name} 
          onChange={handleChange} 
          placeholder="Enter full name"
        />
        <CustomInput 
          label="Email: " 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          placeholder="Enter email"
        />
        <CustomInput 
          label="Phone Number: " 
          name="phoneNo" 
          value={formData.phoneNo} 
          onChange={handleChange} 
          placeholder="Enter phone number"
        />
        <SubmitButton 
          formData={formData} 
        />
      </form>
      )}
    </div>
  )
}