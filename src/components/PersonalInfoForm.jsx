import CustomInput from "./CustomInput";

export default function PersonalInfoForm({ onChange, name, email, phoneNo }) {
  return (
    <form id="personalInfoForm">
      <h2>Personal info</h2>
      
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