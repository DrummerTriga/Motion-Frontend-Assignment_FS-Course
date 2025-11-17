import PrimaryButton from "../../elements/Buttons/PrimaryButton"

const SignupCongratulationsForm = () => {
  return (
    <div className="flex flex-col items-center h-full w-[60%]">
      <div className="flex flex-col justify-between items-center h-[467px] w- mt-auto mb-auto">
        <div className="flex flex-col w-[390px] items-center">
          <h1 className="text-[40px] mb-10">Congratulations!</h1>
          <div className="flex justify-center items-center border-4 border-purple-400 rounded-full h-20 w-20">
            <img className="fill-purple-500" src="/check.svg" />
          </div>
          <p className="text-center mt-15  text-[16px] text-gray-900 opacity-90">
            We’ve sent a confirmation code to your email
            -----johnsmith@gmail.com------ {/*Login to be added here*/}
          </p>
        </div>
        <PrimaryButton
          label="CONTINUE"
          onClickHandler={() => console.log("Sign Up was clicked")}
        />
      </div>
      {/* the dots still need to be added */}
    </div>
  )
}

export default SignupCongratulationsForm
