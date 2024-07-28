export default function SubmitButton(formData) {
  const handleSubmit = (event) => {
    formData = formData["formData"];
    event.preventDefault();
    console.log(formData.name, formData.email, formData.phoneNo)
  }

  return (
    <button type="submit" onClick={handleSubmit}>Submit</button>
  )
}