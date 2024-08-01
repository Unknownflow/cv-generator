function WorkExperienceCV(workInfo) {
  workInfo = workInfo["workInfo"];

  return (
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
  )
}

export default WorkExperienceCV;