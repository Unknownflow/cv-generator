import './styles/styles.css'
import 'font-awesome/css/font-awesome.min.css';
import PersonalInfoForm from './components/PersonalInfoForm'
import EducationForm from './components/EducationForm'
import WorkExperienceForm from './components/WorkExperienceForm'

function App() {

  return (
    <div className="body">
      <div className='form'>
        <PersonalInfoForm />
        <EducationForm />
        <WorkExperienceForm />
      </div>
      <div className='resume'>
      </div>
    </div>
  )
}

export default App
