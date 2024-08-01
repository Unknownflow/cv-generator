export default function CustomInput({type = "text", label, name, value, onChange, placeholder, min , max}) {
  return (
    <div className="inputContainer">
      <label htmlFor={name}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}