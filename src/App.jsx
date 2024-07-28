import './styles/styles.css'
import SectionHeader from './components/SectionHeader'
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'
import Resume from './components/Resume'

function App() {

  return (
    <div className="body">
      <div className='form'>
        <SectionHeader title="Personal info" />
        <PersonalInfoForm />
        <SectionHeader title="Education" />
        <EducationForm />
        <SectionHeader title="Work experience" />
        <WorkExperienceForm />
      </div>
      <div className='resume'>
        <Resume />
      </div>
    </div>
  )
}

export default App
