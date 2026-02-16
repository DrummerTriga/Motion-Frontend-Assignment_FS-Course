//Example how to use the SecondaryButtonIcon: <SecondaryButtonIcon onClickHandler={() => console.log("hellooo")}/>

const SecondaryButtonIcon = ({ icon, onClickHandler }) => {
   console.log(icon)
   return (
      <div
         className="bg-neutral-200 text-white text-xl rounded-4xl flex p-3 items-center justify-center hover:cursor-pointer"
         onClick={onClickHandler}
      >
         <div className="w-5 h-5 flex items-center justify-center">{icon}</div>
      </div>
   )
}

export default SecondaryButtonIcon
