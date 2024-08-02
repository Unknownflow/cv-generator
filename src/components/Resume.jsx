import EducationCV from "./EducationCV";
import PersonalInfoCV from "./PersonalInfoCV";
import WorkExperienceCV from "./WorkExperienceCV";

function Resume({ personalInfo, educationInfo, workInfo }) {
  return (
    <>
      <PersonalInfoCV personalInfo={personalInfo} />
      <EducationCV educationInfo={educationInfo.data} />
      <WorkExperienceCV workInfo={workInfo.data} />
    </>
  )
}

export default Resume;