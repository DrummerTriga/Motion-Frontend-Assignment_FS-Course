// (eG SignUp with color)

//Example how to use the SecondaryButton: <SecondaryButton label={"test"} onClickHandler={() => console.log("hellooo")}/>

const SecondaryButton = ({ label, onClickHandler, className }) => {
   return (
      <div
         className={`bg-white text-black rounded-4xl border border-neutral-400 inline-flex w-fit py-1 px-5 items-center justify-center ${className}`}
         onClick={onClickHandler}
      >
         {label}
      </div>
   )
}

export default SecondaryButton
