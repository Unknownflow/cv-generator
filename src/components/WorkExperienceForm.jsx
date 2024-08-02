import CustomInput from "./CustomInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";

export default function WorkExperienceForm({ workInfo, onChange, remove }) {
  return (
    <div id="workExperienceForm">
      <div className="sectionHeader">
          <h2>Work experience</h2>
      </div>

      {
        workInfo.map((work, index) => (
          <div className="workContainer" key={work.id}>
            {workInfo.length >= 1 &&
              <div className="subHeading">
                <div>
                  <h3>Work experience {index+1}</h3>
                </div>
                <div onClick={(e) => remove(e, work.id)}>
                  <FontAwesomeIcon icon={ faTrashCan } />
                </div>
              </div>
            }

            <CustomInput 
              label="Company: " 
              name="companyName" 
              value={work.companyName} 
              onChange={(e) => onChange(e, work.id)} 
              placeholder="Enter company"
            />
            <CustomInput 
              label="Position title: " 
              name="positionTitle" 
              value={work.positionTitle} 
              onChange={(e) => onChange(e, work.id)} 
              placeholder="Enter position title"
            />
            <CustomInput 
              label="Start date: " 
              name="startDate" 
              type="date"
              value={work.startDate}
              max={work.endDate}
              onChange={(e) => onChange(e, work.id)} 
              placeholder="Enter start date"
            />
            <CustomInput 
              label="End date: " 
              name="endDate" 
              type="date"
              value={work.endDate} 
              min={work.startDate}
              onChange={(e) => onChange(e, work.id)} 
              placeholder="Enter end date"
            />
            <CustomInput 
              label="Responsibilities: " 
              name="responsibilities" 
              value={work.responsibilities} 
              onChange={(e) => onChange(e, work.id)} 
              placeholder="Enter responsibilities"
            />
          </div>

      ))} 
    </div>
  )
}