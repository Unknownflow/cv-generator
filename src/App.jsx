import './styles/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'
import { useState } from 'react';

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
    console.log(educationInfo);
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
        <div className='personalInfoCV'>
          <div className='personalName'>
            <h2>{personalInfo.name}</h2>
          </div>
          <div className='personalContact'>
            <span className='personalEmail'>{personalInfo.email}</span>
            {personalInfo.email && personalInfo.phoneNo && (
              <span>, </span>
            )}
            <span className='personalPhoneNo'> {personalInfo.phoneNo}</span>
          </div>
        </div>
        <div className='educationInfoCV'>
          <h3>Education</h3>
          <div className='educationHeader'>
            <span>{educationInfo.schoolName}</span>
            <div className='educationTime'>
              <span>{educationInfo.schoolStartDate}</span>
              {educationInfo.schoolStartDate &&
                <span> - </span> 
              }
              <span>{educationInfo.schoolEndDate}</span>
            </div>
          </div>
          <div className='educationTitle'>
            <span>{educationInfo.educationTitle}</span>
            {educationInfo.educationTitle && educationInfo.location && 
              <spam>, </spam> 
            }
            <span>{educationInfo.location}</span>
          </div>
        </div>
        <div className='workExperienceCV'>
          <h3>Work experience</h3>  
          <div className='workExperienceHeader'>
            <span>{workInfo.companyName}</span>
            <div className='workExperienceTime'>
              <span>{workInfo.workStartDate}</span>
              {workInfo.workStartDate &&
                <span> - </span>
              }
              <span>{workInfo.workEndDate}</span>
            </div>
          </div>
          <div className='workExperienceTitle'>{workInfo.positionTitle}</div>
          <div className='workResponsibilities'>{workInfo.responsibilities}</div>
        </div>
      </div>
    </div>
  )
}

export default App
