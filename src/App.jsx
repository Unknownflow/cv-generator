import './styles/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'
import { useState } from 'react';
import Resume from './components/Resume';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [personalInfo, setPersonalInfo] = useState(
    {
      name: "",
      email: "",
      phoneNo: "",
    }
  )

  const [educationInfo, setEducationInfo] = useState({
    data: [
      {
        id: uuidv4(),
        schoolName: "",
        title: "",
        location: "",
        startDate: "",
        endDate: "",
      },
      {
        id: uuidv4(),
        schoolName: "aa",
        title: "a",
        location: "a",
        startDate: "a",
        endDate: "a",
      },
  ]})
  
  const [workInfo, setWorkInfo] = useState({
    data: [
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        startDate: "",
        endDate: "",
        responsibilities: "",
      },
  ]})

  const handlePersonalInfoChange = (e) => {
    const key = e.target.id;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  const handleEducationInfoChange = (e, id) => {
    setEducationInfo({...educationInfo, 
      educationInfo: educationInfo.data.map(educationInfoData => {
        if (educationInfoData.id === id) {
          educationInfoData[e.target.name] = e.target.value;
        
        return educationInfoData;
        }
    })})
  }

  const removeEducationInfo = (e, id) => {
    // if there is only 1 education info, clear the data
    if (educationInfo["data"].length === 1) {
      setEducationInfo({data: [
        {
          id: uuidv4(),
          schoolName: "",
          title: "",
          location: "",
          startDate: "",
          endDate: "",
        },
      ]})} else {
        // remove education info
        const newEducationInfo = educationInfo["data"].filter(
          education => education.id !== id
        );
        setEducationInfo({
          data: newEducationInfo
        });
      }
  }

  const handleWorkInfoChange = (e, id) => {
    setWorkInfo({...workInfo, 
      workInfo: workInfo.data.map(workInfoData => {
        if (workInfoData.id === id) {
          workInfoData[e.target.name] = e.target.value;
        
        return workInfoData;
        }
    })})
  }

  const removeWorkInfo = (e, id) => {
    // if there is only 1 work info, clear the data
    if (workInfo["data"].length === 1) {
      setWorkInfo({data: [
        {
          id: uuidv4(),
          companyName: "",
          positionTitle: "",
          startDate: "",
          endDate: "",
          responsibilities: "",
        },
      ]})} else {
        // remove work info
        const newWorkInfo = workInfo["data"].filter(
          work => work.id !== id
        );
        setWorkInfo({
          data: newWorkInfo
        });
      }
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
          educationInfo={educationInfo.data}
          onChange={handleEducationInfoChange}
          remove={removeEducationInfo}
        />
        <WorkExperienceForm 
          workInfo={workInfo.data}
          onChange={handleWorkInfoChange}
          remove={removeWorkInfo}
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
