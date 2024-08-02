function WorkExperienceCV(workInfo) {
  workInfo = workInfo["workInfo"];
  return (
    <div className='workExperienceCV'>
      <h3>Work experience</h3>  
      {
        workInfo.map((work) => {
          <div key={work.id}>
            <div className='workExperienceHeader'>
              <span>{work.companyName}</span>
              <div className='workExperienceTime'>
                <span>{work.startDate}</span>
                {work.startDate &&
                  <span> - </span>
                }
                <span>{work.endDate}</span>
              </div>
            </div>
            <div className='workExperienceTitle'>{work.positionTitle}</div>
            <div className='workResponsibilities'>{work.responsibilities}</div>
          </div>
        })
      }
    </div>
  )
}

export default WorkExperienceCV;