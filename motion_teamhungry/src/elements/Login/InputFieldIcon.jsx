const InputFieldIcon = ({ icon, placeholder, type = "text" }) => {
  return (
    <div className="flex flex-col justify-between h-[42px] w-72 ">
      <div className="flex justify-start items-center">
        <img className="h-5 w-5 mr-5" src={icon} />
        <input
          className="w-full h-8 placeholder:text-black text-[16px] focus:outline-0"
          placeholder={placeholder}
          type={type}
        />
      </div>
      <hr className="w-full opacity-30" />
    </div>
  )
}

export default InputFieldIcon
