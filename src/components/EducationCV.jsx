import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function EducationCV(educationInfo) {
  educationInfo = educationInfo['educationInfo'];

  return (
    <div className='educationInfoCV'>
      <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
      {
        educationInfo.map((education) => (
          <div className="educationContainer" key={education.id}>
            <div className='educationHeader' >
              <span>{education.schoolName}</span>
              <div className='educationTime'>
                <span>{education.startDate}</span>
                {education.startDate &&
                  <span> - </span> 
                }
                <span>{education.endDate}</span>
              </div>
            </div>
            <div className='educationTitle'>
              <span>{education.title}</span>
              {education.title && education.location && 
                <spam>, </spam> 
              }
              <span>{education.location}</span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default EducationCV;