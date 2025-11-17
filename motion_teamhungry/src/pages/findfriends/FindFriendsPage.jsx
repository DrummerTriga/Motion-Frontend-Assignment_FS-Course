import UserCard from "../../components/Feed/UserCard"
import { useState } from "react"

const FindFriendsPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      email: "luna.miller@example.com",
      first_name: "Luna",
      last_name: "Miller",
      username: "luna_m",
      job: "Product Designer",
      avatar: "https://picsum.photos/seed/luna/200",
      banner: "https://picsum.photos/seed/luna-banner/600/200",
      location: "Berlin, Germany",
      phone_number: "+49 152 1234567",
      about_me: "I love designing clean interfaces and exploring new tools.",
      things_user_likes: ["UI/UX", "Travel", "Art", "Coffee"],
    },
    {
      id: 2,
      email: "marco.stern@example.com",
      first_name: "Marco",
      last_name: "Stern",
      username: "marcost",
      job: "Software Engineer",
      avatar: "https://picsum.photos/seed/marco/200",
      banner: "https://picsum.photos/seed/marco-banner/600/200",
      location: "Munich, Germany",
      phone_number: "+49 176 99887766",
      about_me: "Full-stack dev with passion for TypeScript and DevOps.",
      things_user_likes: ["Coding", "Hiking", "Gaming"],
    },
    {
      id: 3,
      email: "hana.cho@example.com",
      first_name: "Hana",
      last_name: "Cho",
      username: "h_cho",
      job: "Photographer",
      avatar: "https://picsum.photos/seed/hana/200",
      banner: "https://picsum.photos/seed/hana-banner/600/200",
      location: "Seoul, South Korea",
      phone_number: "+82 10 4444 9898",
      about_me: "Capturing the beauty of everyday moments.",
      things_user_likes: ["Photography", "Fashion", "Travel"],
    },
    {
      id: 4,
      email: "liam.santos@example.com",
      first_name: "Liam",
      last_name: "Santos",
      username: "liam.codes",
      job: "Backend Developer",
      avatar: "https://picsum.photos/seed/liam/200",
      banner: "https://picsum.photos/seed/liam-banner/600/200",
      location: "São Paulo, Brazil",
      phone_number: "+55 11 9988 7766",
      about_me: "Go / Python backend enthusiast.",
      things_user_likes: ["APIs", "Soccer", "Music"],
    },
    {
      id: 5,
      email: "amelia.wood@example.com",
      first_name: "Amelia",
      last_name: "Wood",
      username: "ameliaw",
      job: "Marketing Manager",
      avatar: "https://picsum.photos/seed/amelia/200",
      banner: "https://picsum.photos/seed/amelia-banner/600/200",
      location: "London, UK",
      phone_number: "+44 7444 111222",
      about_me: "Storytelling & branding is my passion.",
      things_user_likes: ["Branding", "Books", "Tea"],
    },
    {
      id: 6,
      email: "noah.schmidt@example.com",
      first_name: "Noah",
      last_name: "Schmidt",
      username: "noah_s",
      job: "Data Scientist",
      avatar: "https://picsum.photos/seed/noah/200",
      banner: "https://picsum.photos/seed/noah-banner/600/200",
      location: "Zurich, Switzerland",
      phone_number: "+41 79 222 8899",
      about_me: "Trying to find meaning in chaos through data.",
      things_user_likes: ["Machine Learning", "Running", "Science"],
    },
    {
      id: 7,
      email: "sofia.rossi@example.com",
      first_name: "Sofia",
      last_name: "Rossi",
      username: "sofrossi",
      job: "Content Creator",
      avatar: "https://picsum.photos/seed/sofia/200",
      banner: "https://picsum.photos/seed/sofia-banner/600/200",
      location: "Milan, Italy",
      phone_number: "+39 331 5566778",
      about_me: "Creating lifestyle content and connecting with people.",
      things_user_likes: ["Fashion", "Makeup", "Vlogging", "Food"],
    },
  ])

  console.log(users)

  return (
    <div className="Pagewrapper bg-zinc-100 py-10 px-15 flex justify-center">
      <div className="  inline-grid grid-cols-3 gap-10">
        {users.map((user) => {
          return (
            <UserCard
              key={user.id}
              first_name={user.first_name}
              last_name={user.last_name}
              location={user.location}
              about_me={user.about_me}
              things_user_likes={user.things_user_likes}
              avatar={user.avatar}
            />
          )
        })}
      </div>
    </div>
  )
}

export default FindFriendsPage
