import EducationCV from "./EducationCV";
import PersonalInfoCV from "./PersonalInfoCV";
import WorkExperienceCV from "./WorkExperienceCV";

function Resume({ personalInfo, educationInfo, workInfo }) {
  return (
    <>
      <PersonalInfoCV personalInfo={personalInfo} />
      <EducationCV educationInfo={educationInfo} />
      <WorkExperienceCV workInfo={workInfo} />
    </>
  )
}

export default Resume;