//JTI: Implement the component with the variable "label" to display the content inside the label

const Tag = ({ label }) => {
  return (
    <div className="bg-zinc-100 rounded-4xl inline-flex w-fit py-2 px-4 text-">
      {label}
    </div>
  )
}

export default Tag
