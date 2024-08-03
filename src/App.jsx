import './styles/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'
import { useState } from 'react';
import Resume from './components/Resume';
import { v4 as uuidv4 } from 'uuid';
import SaveAsPdf from './components/SaveAsPdf';

function App() {
  const educationObj = {
    id: uuidv4(),
    schoolName: "",
    title: "",
    location: "",
    startDate: "",
    endDate: "",
    isShown: true,
  }

  const workObj = {
    id: uuidv4(),
    companyName: "",
    positionTitle: "",
    startDate: "",
    endDate: "",
    responsibilities: "",
    isShown: true,

  }

  const [personalInfo, setPersonalInfo] = useState(
    {
      name: "John Doe",
      email: "johndoe@gmail.com",
      phoneNo: "(123) 456 789",
    }
  )

  const [educationInfo, setEducationInfo] = useState({
    data: [{
      id: uuidv4(),
      schoolName: "Massachusetts Institute of Technology",
      title: "Computer Science Degree",
      location: "USA",
      startDate: "2020-01-01",
      endDate: "2024-12-31",
      isShown: true,
    }]
  })
  
  const [workInfo, setWorkInfo] = useState({
    data: [{
      id: uuidv4(),
      companyName: "Google",
      positionTitle: "Software Engineer",
      startDate: "2022-06-01",
      endDate: "2022-09-31",
      responsibilities: "Aided Google in the development of their website as an internship",
      isShown: true,
    }]}
  )

  const handlePersonalInfoChange = (e) => {
    const key = e.target.id;
    setPersonalInfo({ ...personalInfo, [key]: e.target.value });
  }

  const addEducationForm = () => {
    var newEducationInfo = educationInfo["data"];
    newEducationInfo.push({...educationObj})
    setEducationInfo({data: newEducationInfo})
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

  const toggleEducation = (id) => {
    setEducationInfo({...educationInfo, 
      educationInfo: educationInfo.data.map(educationInfoData => {
        if (educationInfoData.id === id) {
          const isShown = educationInfoData["isShown"]
          educationInfoData["isShown"] = !isShown;
        
        return educationInfoData;
        }
    })})
  } 

  const removeEducationInfo = (id) => {
    // if there is only 1 education info, clear the data
    if (educationInfo["data"].length === 1) {
      setEducationInfo({data: [{...educationObj}]
      })
    } else {
      // remove education info
      const newEducationInfo = educationInfo["data"].filter(
        education => education.id !== id
      );
      setEducationInfo({
        data: newEducationInfo
      });
    }
  }

  const addWorkForm = () => {
    var newWorkInfo = workInfo["data"];
    newWorkInfo.push({...workObj})
    setWorkInfo({"data": newWorkInfo})
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

  const toggleWork = (id) => {
    setWorkInfo({...workInfo, 
      workInfo: workInfo.data.map(workInfoData => {
        if (workInfoData.id === id) {
          const isShown = workInfoData["isShown"]
          workInfoData["isShown"] = !isShown;
        
        return workInfoData;
        }
    })})
  } 

  const removeWorkInfo = (id) => {
    // if there is only 1 work info, clear the data
    if (workInfo["data"].length === 1) {
      setWorkInfo({data: [{...workObj}],
      })} else {
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
          removeEducationInfo={removeEducationInfo}
          addEducationForm={addEducationForm}
          toggleEducation={toggleEducation}
        />
        <WorkExperienceForm 
          workInfo={workInfo.data}
          onChange={handleWorkInfoChange}
          removeWorkInfo={removeWorkInfo}
          addWorkForm={addWorkForm}
          toggleWork={toggleWork}
        />
        <SaveAsPdf />
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
