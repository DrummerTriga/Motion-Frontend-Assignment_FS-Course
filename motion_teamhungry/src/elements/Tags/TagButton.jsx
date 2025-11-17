//JTI: Implement the component with the variable "label" to display the content inside the label
import xIcon from "../../assets/x-button.svg"

const TagButton = ({ label }) => {
  const onClickHandler = () => {
    //todo define a function to delete a tag
  }

  return (
    <button
      type="button"
      className="bg-zinc-100 rounded-4xl inline-flex w-fit py-2 px-4 items-center gap-3 justify-between hover:bg-zinc-200 cursor-pointer"
      onClick={onClickHandler}
    >
      {label} <img className="h-3" src={xIcon} />
    </button>
  )
}

export default TagButton
