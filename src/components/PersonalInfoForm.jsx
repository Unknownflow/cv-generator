import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "./CustomInput";
import { useState } from "react";
import { faClipboardUser, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export default function PersonalInfoForm({ onChange, name, email, phoneNo }) {
  const [isShown, setIsShown] = useState(true);

  const toggleShown = () => {
    setIsShown(!isShown);
  }

  return (
    <form id="personalInfoForm">
      <div className="sectionHeader">
        <h2><FontAwesomeIcon icon={faClipboardUser} /> Personal info</h2>
        <div className="subHeadingIcons">
          {isShown && 
            <div 
              className="eyeSlashIcon" 
              onClick={toggleShown}
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </div>
          }
          {!isShown && 
            <div 
              className="eyeSlashIcon" 
              onClick={toggleShown}
            >
              <FontAwesomeIcon icon={faEye} />
            </div>
          }
        </div>
      </div>
      {isShown &&
        <>
          <CustomInput 
            label="Name: " 
            name="name" 
            value={name} 
            onChange={onChange} 
            placeholder="Enter full name"
          />
          <CustomInput 
            label="Email: " 
            name="email" 
            value={email} 
            onChange={onChange} 
            placeholder="Enter email"
          />
          <CustomInput 
            label="Phone Number: " 
            name="phoneNo" 
            value={phoneNo} 
            onChange={onChange} 
            placeholder="Enter phone number"
          />
        </>
      }
      
    </form>
  )
}