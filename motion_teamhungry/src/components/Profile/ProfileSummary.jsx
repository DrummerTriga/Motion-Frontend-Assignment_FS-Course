const ProfileSummary = () => {
  const thisUser = [
    {
      id: 3,
      first_name: "Jennifer",
      last_name: "Aniston",
      avatar: "/users/jennifer.png",
      location: "Zurich, Switzerland",
      about_me:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore",
      email: "test@email.com",
      email: "123-456-7890",
      things_user_likes: ["Cooking", "Football", "Swimming"],
      amount_of_posts: "34",
      amount_of_likes: "35",
      amount_of_friends: "36",
      amount_of_followers: "37",
      amount_of_following: "38",
    },
  ]

  return (
    <div>
      <div
        className="grid grid-cols-[2fr_3fr] gap-4 border-1 bg-emerald-600 border-1 border-gray-300"
        key={thisUser.id}
      >
        <div className="flex flex-col text-sm align-middle items-center">
          <img
            src={thisUser[0].avatar}
            className={`20px rounded-full object-cover`}
          />
          <div>
            {thisUser[0].first_name} {thisUser[0].last_name}
          </div>
          <div className="text-xs">{thisUser[0].location}</div>
        </div>
        <div className="grid grid-cols-[1fr_3fr] gap-4 border-1">
          <div className="row-span-2">
            <img
              src={thisUser[0].avatar}
              className={`20px rounded-full object-cover`}
            />
          </div>
          <div>{/* {post.user[0].first_name} {post.user[0].last_name} */}</div>

          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSummary
