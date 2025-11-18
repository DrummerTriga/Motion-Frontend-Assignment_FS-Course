// (eG SignUp with color)
//Example how to use the PrimaryButton: <PrimaryButton label={"test"} onClickHandler={() => console.log("hellooo")}/>

const PrimaryButton = ({ label, onClickHandler }) => {
  return (
    <div
      className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white text-xl rounded-4xl inline-flex w-fit py-4 px-20"
      onClick={onClickHandler}
    >
      {label}
    </div>
  )
}

export default PrimaryButton
