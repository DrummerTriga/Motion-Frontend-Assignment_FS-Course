// (eG SignUp with color)

//Example how to use the SecondaryButton: <SecondaryButton label={"test"} onClickHandler={() => console.log("hellooo")}/>

const SecondaryButton = ({ label, onClickHandler }) => {
  return (
    <div
      className="bg-white text-black rounded-4xl border border-neutral-400 inline-flex w-fit py-2 px-5 items-center justify-center"
      onClick={onClickHandler}
    >
      {label}
    </div>
  )
}

export default SecondaryButton
