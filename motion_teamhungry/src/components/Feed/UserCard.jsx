import Tag from "../../elements/Tags/Tag"

const UserCard = ({
  first_name,
  last_name,
  location,
  about_me,
  things_user_likes,
  avatar,
}) => {
  return (
    <div className="bg-white flex flex-col items-center w-95 p-10 gap-4 rounded-lg">
      <div></div>
      <img width="85px" src={avatar} />
      <p className="text-2xl">
        {first_name} {last_name}
      </p>
      <p className="">{location}</p>
      <div className="flex gap-5">
        {/* JTI todo add secondaryButtons */}
        <button className="bg-amber-200">Hello</button>
        <button className="bg-amber-200">Hello</button>
      </div>

      <div>
        <p className="text-center min-h-15">{about_me}</p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2 ">
        {things_user_likes.map((item, index) => {
          return <Tag key={index} label={item} />
        })}
      </div>
    </div>
  )
}

export default UserCard
