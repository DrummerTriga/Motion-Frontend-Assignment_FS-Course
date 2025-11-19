import FriendRequests from './FriendRequests'
import { useState } from 'react'

const NotificationDropdown = () => {
   //We need the results Array from the API
   //JTI todo this needs to be our own ID for the loggedin user
   const ownId = 1
   const [friendRequests, setfriendRequests] = useState([
      {
         id: 1,
         requester: {
            id: 21,
            email: 'marco.stern@example.com',
            first_name: 'Marco',
            last_name: 'Stern',
            username: 'marcost',
            job: 'Software Engineer',
            avatar: 'https://picsum.photos/seed/marco/200',
            banner: 'https://picsum.photos/seed/marco-banner/600/200',
            location: 'Munich, Germany',
            phone_number: '+49 176 99887766',
            about_me: 'Full-stack developer with passion for TypeScript.',
            things_user_likes: ['Coding', 'Gaming', 'Hiking'],
         },
         receiver: {
            id: 1,
            email: 'jan.tillmann@example.com',
            first_name: 'Jan',
            last_name: 'Tillmann',
            username: 'jant',
            job: 'Frontend Developer',
            avatar: 'https://picsum.photos/seed/jan/200',
            banner: 'https://picsum.photos/seed/jan-banner/600/200',
            location: 'Hamburg, Germany',
            phone_number: '+49 176 11111111',
            about_me: 'Loves React, Design Systems & Coffee.',
            things_user_likes: ['React', 'Design', 'Gaming'],
         },
         status: 'P',
         created: '2025-01-20T10:15:00Z',
      },
      {
         id: 2,
         requester: {
            id: 31,
            email: 'sofia.rossi@example.com',
            first_name: 'Sofia',
            last_name: 'Rossi',
            username: 'sofrossi',
            job: 'Content Creator',
            avatar: 'https://picsum.photos/seed/sofia/200',
            banner: 'https://picsum.photos/seed/sofia-banner/600/200',
            location: 'Milan, Italy',
            phone_number: '+39 331 5566778',
            about_me: 'Lifestyle content creator.',
            things_user_likes: ['Fashion', 'Makeup', 'Vlogging'],
         },
         receiver: {
            id: 1,
            email: 'jan.tillmann@example.com',
            first_name: 'Jan',
            last_name: 'Tillmann',
            username: 'jant',
            job: 'Frontend Developer',
            avatar: 'https://picsum.photos/seed/jan/200',
            banner: 'https://picsum.photos/seed/jan-banner/600/200',
            location: 'Hamburg, Germany',
            phone_number: '+49 176 11111111',
            about_me: 'Loves React, Design Systems & Coffee.',
            things_user_likes: ['React', 'Design', 'Gaming'],
         },
         status: 'P',
         created: '2025-01-19T09:50:00Z',
      },
      {
         id: 3,
         requester: {
            id: 1,
            email: 'jan.tillmann@example.com',
            first_name: 'Jan',
            last_name: 'Tillmann',
            username: 'jant',
            job: 'Frontend Developer',
            avatar: 'https://picsum.photos/seed/jan/200',
            banner: 'https://picsum.photos/seed/jan-banner/600/200',
            location: 'Hamburg, Germany',
            phone_number: '+49 176 11111111',
            about_me: 'Loves React, Design Systems & Coffee.',
            things_user_likes: ['React', 'Design', 'Gaming'],
         },
         receiver: {
            id: 45,
            email: 'amelia.wood@example.com',
            first_name: 'Amelia',
            last_name: 'Wood',
            username: 'ameliaw',
            job: 'Marketing Manager',
            avatar: 'https://picsum.photos/seed/amelia/200',
            banner: 'httpsum.photos/seed/amelia-banner/600/200',
            location: 'London, UK',
            phone_number: '+44 7444 111222',
            about_me: 'Passionate about branding & storytelling.',
            things_user_likes: ['Branding', 'Books', 'Tea'],
         },
         status: 'P',
         created: '2025-01-18T14:32:00Z',
      },
      {
         id: 4,
         requester: {
            id: 58,
            email: 'liam.santos@example.com',
            first_name: 'Liam',
            last_name: 'Santos',
            username: 'liam.codes',
            job: 'Backend Developer',
            avatar: 'https://picsum.photos/seed/liam/200',
            banner: 'https://picsum.photos/seed/liam-banner/600/200',
            location: 'São Paulo, Brazil',
            phone_number: '+55 11 9988 7766',
            about_me: 'Python & Go backend enthusiast.',
            things_user_likes: ['APIs', 'Football', 'Music'],
         },
         receiver: {
            id: 92,
            email: 'noah.schmidt@example.com',
            first_name: 'Noah',
            last_name: 'Schmidt',
            username: 'noah_s',
            job: 'Data Scientist',
            avatar: 'https://picsum.photos/seed/noah/200',
            banner: 'https://picsum.photos/seed/noah-banner/600/200',
            location: 'Zurich, Switzerland',
            phone_number: '+41 79 222 8899',
            about_me: 'Finding meaning in data.',
            things_user_likes: ['Machine Learning', 'Running', 'Science'],
         },
         status: 'A',
         created: '2025-01-15T11:20:00Z',
      },
      {
         id: 5,
         requester: {
            id: 76,
            email: 'hana.cho@example.com',
            first_name: 'Hana',
            last_name: 'Cho',
            username: 'h_cho',
            job: 'Photographer',
            avatar: 'https://picsum.photos/seed/hana/200',
            banner: 'https://picsum.photos/seed/hana-banner/600/200',
            location: 'Seoul, South Korea',
            phone_number: '+82 10 4444 9898',
            about_me: 'Capturing everyday beauty.',
            things_user_likes: ['Photography', 'Travel', 'Art'],
         },
         receiver: {
            id: 33,
            email: 'luna.miller@example.com',
            first_name: 'Luna',
            last_name: 'Miller',
            username: 'luna_m',
            job: 'Designer',
            avatar: 'https://picsum.photos/seed/luna/200',
            banner: 'https://picsum.photos/seed/luna-banner/600/200',
            location: 'Berlin, Germany',
            phone_number: '+49 152 1234567',
            about_me: 'Loves UI/UX and traveling.',
            things_user_likes: ['UI/UX', 'Photography', 'Coffee'],
         },
         status: 'R',
         created: '2025-01-14T08:10:00Z',
      },
   ])

   return (
      <div className="dropdownwrapper w-[380px] bg-white rounded-b-lg absolute right-15 top-17 mt-2 p-5">
         <div className="reveivedrequests">
            <p className="text-xl">Received requests</p>

            {friendRequests.map((user) => {
               if (user.receiver.id !== ownId && user.requester.id !== ownId) {
                  return (
                     <FriendRequests
                        key={user.requester.id}
                        first_name={user.requester.first_name}
                        last_name={user.requester.last_name}
                        location={user.requester.location}
                        avatar={user.requester.avatar}
                     />
                  )
               }
            })}
         </div>

         <div className="reveivedrequests">
            <p className="text-xl">Sent requests</p>
            {friendRequests.map((user) => {
               if (user.requester.id === ownId) {
                  return (
                     <FriendRequests
                        key={user.receiver.id}
                        first_name={user.receiver.first_name}
                        last_name={user.receiver.last_name}
                        location={user.receiver.location}
                        avatar={user.receiver.avatar}
                        type={'request'}
                     />
                  )
               }
            })}
         </div>
      </div>
   )
}

export default NotificationDropdown
