function EducationCV(educationInfo) {
  educationInfo = educationInfo["educationInfo"];

  return (
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
  )
}

export default EducationCV;