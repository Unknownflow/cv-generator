export default function CustomInput({type = "text", label, name, value, onChange, placeholder}) {
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
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  )
}