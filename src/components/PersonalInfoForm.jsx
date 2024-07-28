import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

export default function PersonalInfoForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="personalInfoForm">
      <form>
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
    </div>
  )
}