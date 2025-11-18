// (eG SignUp with color)
//Example how to use the PrimaryButtonIcon: <PrimaryButtonIcon onClickHandler={() => console.log("hellooo")}/>

const PrimaryButtonIcon = ({ icon, onClickHandler }) => {
   console.log(icon)
   return (
      <div
         className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white text-xl rounded-4xl flex p-3 items-center justify-center hover:cursor-pointer"
         onClick={onClickHandler}
      >
         <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      </div>
   )
}

export default PrimaryButtonIcon
