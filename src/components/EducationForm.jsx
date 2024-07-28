import { useState } from "react";
import CustomInput from "./CustomInput";
import SubmitButton from "./SubmitButton";

export default function EducationForm() {
  const [formData, setFormData] = useState({
    schoolName: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <div className="educationForm">
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
    </div>
  )
}