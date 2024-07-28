export default function Resume(props) {
  return (
    <>
      <div className="resumeHeader">
        <h2>{props.name}</h2>
        <div>
          <div>{props.email}</div>
          <div>{props.phoneNo}</div>
        </div>
      </div>
      <div className="resumeEducation"></div>
      <div className="resumeWork"></div>
    </>
  )
}