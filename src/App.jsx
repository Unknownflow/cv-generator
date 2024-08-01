import './styles/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'
import { useState } from 'react';
import Resume from './components/Resume';

function App() {
  const [personalInfo, setPersonalInfo] = useState(
    {
      name: "",
      email: "",
      phoneNo: "",
    }
  )

  const [educationInfo, setEducationInfo] = useState(
    {
      schoolName: "",
      location: "",
      schoolStartDate: "",
      schoolEndDate: "",
      educationTitle: "",
    }
  )

  const [workInfo, setWorkInfo] = useState(
    {
      companyName: "",
      positionTitle: "",
      workStartDate: "",
      workEndDate: "",
      responsibilities: "",
    }
  )

  const handlePersonalInfoChange = (e) => {
    const key = e.target.id;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
    console.log(personalInfo)
  }

  const handleEducationInfoChange = (e) => {
    const key = e.target.id;
    setEducationInfo({ ...educationInfo, [key]: e.target.value });
  }

  const handleWorkInfoChange = (e) => {
    const key = e.target.id;
    setWorkInfo({ ...workInfo, [key]: e.target.value });
  }

  return (
    <div className="body">
      <div className='form'>
        <PersonalInfoForm 
          onChange={handlePersonalInfoChange} 
          name={personalInfo.name} 
          email={personalInfo.email} 
          phoneNo={personalInfo.phoneNo} 
        />
        <EducationForm 
          onChange={handleEducationInfoChange}
          schoolName={educationInfo.schoolName}
          location={educationInfo.location}
          schoolStartDate={educationInfo.schoolStartDate}
          schoolEndDate={educationInfo.schoolEndDate}
          educationTitle={educationInfo.educationTitle}
        />
        <WorkExperienceForm 
          onChange={handleWorkInfoChange}
          companyName={workInfo.companyName}
          positionTitle={workInfo.positionTitle}
          workStartDate={workInfo.workStartDate}
          workEndDate={workInfo.workEndDate}
          responsibilities={workInfo.responsibilities}
        />
      </div>
      <div className='resume'>
        <Resume 
          personalInfo={personalInfo}
          educationInfo={educationInfo}
          workInfo={workInfo}
        />
      </div>
    </div>
  )
}

export default App
