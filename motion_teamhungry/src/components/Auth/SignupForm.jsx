import InputFieldIcon from "../../elements/Login/InputFieldIcon"

const SignupForm = () => {
  return (
    <div className="flex flex-col items-center h-full w-[60%]">
      <div className="flex w-full justify-end gap-8 pr-10 pt-10">
        <h2>Already have an account?</h2>
        <button className="border">SIGN UP</button>
      </div>
      <form className="flex flex-col justify-between items-center h-[467px] w- border mt-auto mb-auto">
        <div className="flex flex-col items-center">
          <h1 className="text-[40px] mb-10">Sign Up</h1>
          <InputFieldIcon
            icon="/email.png"
            type="email"
            placeholder={"Email"}
          />
        </div>
        <button className="border">SIGN UP</button>
      </form>
    </div>
  )
}

export default SignupForm
