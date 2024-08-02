import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomInput from "./CustomInput";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

export default function PersonalInfoForm({ onChange, name, email, phoneNo }) {
  return (
    <form id="personalInfoForm">
      <div className="sectionHeader">
        <h2><FontAwesomeIcon icon={faClipboardUser} /> Personal info</h2>
      </div>
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
    </form>
  )
}