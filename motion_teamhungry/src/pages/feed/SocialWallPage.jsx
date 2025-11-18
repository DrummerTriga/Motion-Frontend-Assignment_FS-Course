import { useState } from 'react'
import Post from '../../components/Feed/Post'

const SocialWallPage = () => {
   const [posts, setposts] = useState([
      {
         id: 1001,
         author: {
            id: 1,
            username: 'jant',
            first_name: 'Jan',
            last_name: 'Tillmann',
            avatar: 'https://picsum.photos/seed/jan/200',
         },
         created: '2025-01-20T08:15:00Z',
         content: 'Heute mal richtig produktiv am Frontend weitergebaut! 🎨⚛️',
         images: [],
         shared_post: null,
         likes: 12,
         comments: 3,
      },

      {
         id: 1002,
         author: {
            id: 1,
            username: 'jant',
            first_name: 'Jan',
            last_name: 'Tillmann',
            avatar: 'https://picsum.photos/seed/jan/200',
         },
         created: '2025-01-19T17:42:00Z',
         content:
            'Wer hat noch Tipps für ein minimalistisches Dashboard-Design?',
         images: [],
         shared_post: null,
         likes: 7,
         comments: 0,
      },

      {
         id: 1003,
         author: {
            id: 21,
            username: 'marcost',
            first_name: 'Marco',
            last_name: 'Stern',
            avatar: 'https://picsum.photos/seed/marco/200',
         },
         created: '2025-01-18T14:01:00Z',
         content: 'Kleines Dev-Setup Update 👨‍💻🔥',
         images: ['https://picsum.photos/seed/devsetup1/600'],
         shared_post: null,
         likes: 34,
         comments: 10,
      },

      {
         id: 1004,
         author: {
            id: 31,
            username: 'sofrossi',
            first_name: 'Sofia',
            last_name: 'Rossi',
            avatar: 'https://picsum.photos/seed/sofia/200',
         },
         created: '2025-01-17T10:25:00Z',
         content: 'New reel dropping tomorrow! 💜🎥',
         images: ['https://picsum.photos/seed/sofia-reel/600'],
         shared_post: null,
         likes: 52,
         comments: 4,
      },

      {
         id: 1005,
         author: {
            id: 45,
            username: 'ameliaw',
            first_name: 'Amelia',
            last_name: 'Wood',
            avatar: 'https://picsum.photos/seed/amelia/200',
         },
         created: '2025-01-16T09:40:00Z',
         content: 'Moodboard für ein neues Branding-Projekt ✨',
         images: [
            'https://picsum.photos/seed/mb1/600',
            'https://picsum.photos/seed/mb2/600',
            'https://picsum.photos/seed/mb3/600',
            'https://picsum.photos/seed/mb4/600',
            'https://picsum.photos/seed/mb5/600',
            'https://picsum.photos/seed/mb6/600',
         ],
         shared_post: null,
         likes: 89,
         comments: 16,
      },

      {
         id: 1006,
         author: {
            id: 58,
            username: 'liam.codes',
            first_name: 'Liam',
            last_name: 'Santos',
            avatar: 'https://picsum.photos/seed/liam/200',
         },
         created: '2025-01-18T20:32:00Z',
         content: 'Das musste einfach geteilt werden! 🤯',
         images: [],
         shared_post: {
            id: 1003,
            author: {
               id: 21,
               username: 'marcost',
               first_name: 'Marco',
               last_name: 'Stern',
               avatar: 'https://picsum.photos/seed/marco/200',
            },
            created: '2025-01-18T14:01:00Z',
            content: 'Kleines Dev-Setup Update 👨‍💻🔥',
            images: ['https://picsum.photos/seed/devsetup1/600'],
            shared_post: null,
         },
         likes: 14,
         comments: 2,
      },
   ])

   const sortedPosts = posts.toSorted(
      (a, b) => new Date(b.created) - new Date(a.created)
   )

   return (
      <div className=" bg-zinc-100 py-15 flex justify-center">
         <div className="flex gap-5">
            {posts.map((post) => {
               return (
                  <div>
                     <Post
                        id={post.id}
                        author_id={post.author.id}
                        author_first_name={post.author.first_name}
                        author_last_name={post.author.last_name}
                        author_avatar={post.author.avatar}
                        created={post.created}
                        content={post.content}
                        images={post.images} // Array
                        shared_post={post.shared_post}
                        likes={post.likes}
                        comments={post.comments}
                     />
                  </div>
               )
            })}
         </div>
      </div>
   )
}

export default SocialWallPage
