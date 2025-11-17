import "./App.css"
import axios from "axios" //todo test to import axios
import InputFieldIcon from "./elements/Login/InputFieldIcon"
import InputField from "./elements/Login/InputField"

function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-100 border">
        <InputFieldIcon
          placeholder={"Email"}
          icon={"../../../public/avatar.svg"}
        />
        <InputField placeholder={"Username"} label={"Username"} />
      </div>
    </>
  )
}

export default App
