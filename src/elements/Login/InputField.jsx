const InputField = ({
   label,
   placeholder,
   type = 'text',
   id,
   value,
   handleInputChange,
   className,
   wrapperClassName,
   error,
}) => {
   return (
      <div
         className={`flex flex-col justify-between h-[42px] w-72 ${wrapperClassName}`}
      >
         <label className="text-[12px] ml-1 text-gray-500">{label}</label>
         <div className="flex justify-start items-center">
            <input
               className={`w-full h-8 placeholder:text-black text-[16px] ml-1 focus:outline-0 ${className}`}
               placeholder={placeholder}
               type={type}
               id={id}
               value={value}
               onChange={handleInputChange}
            />
         </div>
         <hr className="w-full opacity-30" />
      </div>
   )
}

export default InputField
