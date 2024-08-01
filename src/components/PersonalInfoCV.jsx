function PersonalInfoCV(personalInfo) {
  personalInfo = personalInfo["personalInfo"]
  
  return(
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
  )
}

export default PersonalInfoCV;