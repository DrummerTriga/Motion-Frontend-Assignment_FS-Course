import { useState } from 'react'
import DeletePost from '../../components/Feed/DeletePost'
import { useEffect } from 'react'
import Post from '../../components/Feed/Post'
import FilterAndSearchBar from '../../components/Feed/FilterAndSearchBar'
import { motion_api_auth } from '../../axios/axiosBase.js'
import CreatePost from '../../components/Feed/CreatePost'

const SocialWallPage = () => {
   //  const [posts, setPosts] = useState([
   //     {
   //        id: 1001,
   //        author: {
   //           id: 1,
   //           username: 'jant',
   //           first_name: 'Jan',
   //           last_name: 'Tillmann',
   //           avatar: 'https://picsum.photos/seed/jan/200',
   //        },
   //        created: '2025-01-20T08:15:00Z',
   //        content: 'Heute mal richtig produktiv am Frontend weitergebaut! 🎨⚛️',
   //        images: [],
   //        shared_post: null,
   //        likes: 12,
   //        comments: 3,
   //     },

   //     {
   //        id: 1002,
   //        author: {
   //           id: 1,
   //           username: 'jant',
   //           first_name: 'Jan',
   //           last_name: 'Tillmann',
   //           avatar: 'https://picsum.photos/seed/jan/200',
   //        },
   //        created: '2025-01-19T17:42:00Z',
   //        content:
   //           'Wer hat noch Tipps für ein minimalistisches Dashboard-Design?',
   //        images: [],
   //        shared_post: null,
   //        likes: 7,
   //        comments: 0,
   //     },

   //     {
   //        id: 1003,
   //        author: {
   //           id: 21,
   //           username: 'marcost',
   //           first_name: 'Marco',
   //           last_name: 'Stern',
   //           avatar: 'https://picsum.photos/seed/marco/200',
   //        },
   //        created: '2025-01-18T14:01:00Z',
   //        content: 'Kleines Dev-Setup Update 👨‍💻🔥',
   //        images: ['https://picsum.photos/seed/devsetup1/600'],
   //        shared_post: null,
   //        likes: 34,
   //        comments: 10,
   //     },

   //     {
   //        id: 1004,
   //        author: {
   //           id: 31,
   //           username: 'sofrossi',
   //           first_name: 'Sofia',
   //           last_name: 'Rossi',
   //           avatar: 'https://picsum.photos/seed/sofia/200',
   //        },
   //        created: '2025-01-17T10:25:00Z',
   //        content: 'New reel dropping tomorrow! 💜🎥',
   //        images: ['https://picsum.photos/seed/sofia-reel/600'],
   //        shared_post: null,
   //        likes: 52,
   //        comments: 4,
   //     },

   //     {
   //        id: 1005,
   //        author: {
   //           id: 45,
   //           username: 'ameliaw',
   //           first_name: 'Amelia',
   //           last_name: 'Wood',
   //           avatar: 'https://picsum.photos/seed/amelia/200',
   //        },
   //        created: '2025-01-16T09:40:00Z',
   //        content: 'Moodboard für ein neues Branding-Projekt ✨',
   //        images: [
   //           'https://picsum.photos/seed/mb1/600',
   //           'https://picsum.photos/seed/mb2/600',
   //           'https://picsum.photos/seed/mb3/600',
   //           'https://picsum.photos/seed/mb4/600',
   //           'https://picsum.photos/seed/mb5/600',
   //           'https://picsum.photos/seed/mb6/600',
   //        ],
   //        shared_post: null,
   //        likes: 89,
   //        comments: 16,
   //     },

   //     {
   //        id: 1006,
   //        author: {
   //           id: 58,
   //           username: 'liam.codes',
   //           first_name: 'Liam',
   //           last_name: 'Santos',
   //           avatar: 'https://picsum.photos/seed/liam/200',
   //        },
   //        created: '2025-01-18T20:32:00Z',
   //        content: 'Das musste einfach geteilt werden! 🤯',
   //        images: [],
   //        shared_post: {
   //           id: 1003,
   //           author: {
   //              id: 21,
   //              username: 'marcost',
   //              first_name: 'Marco',
   //              last_name: 'Stern',
   //              avatar: 'https://picsum.photos/seed/marco/200',
   //           },
   //           created: '2025-01-18T14:01:00Z',
   //           content: 'Kleines Dev-Setup Update 👨‍💻🔥',
   //           images: ['https://picsum.photos/seed/devsetup1/600'],
   //           shared_post: null,
   //        },
   //        likes: 14,
   //        comments: 2,
   //     },
   //  ])
   const [viewDeletePost, setViewDeletePost] = useState(false)

   const [posts, setPosts] = useState([])

   useEffect(() => {
      const fetchAllPosts = async () => {
         try {
            const response = await motion_api_auth.get('social/posts/')
            setPosts(response.data.results)
         } catch (error) {
            console.error('Failed to load users', error)
         }
      }
      fetchAllPosts()
   }, [])

   return (
      <div className=" bg-zinc-100 py-5 ">
         <FilterAndSearchBar />
         <div className="flex justify-center py-5">
            {viewDeletePost && (
               <DeletePost showDeletePostModal={setViewDeletePost} />
            )}
            <div className="Griddivider grid lg:grid-cols-2 gap-5">
               <div className="gridleft">
                  <div className="flex flex-col gap-5">
                     {posts.length > 0 ? (
                        posts.map((post, index) =>
                           index % 2 === 0 ? (
                              <div key={post.id}>
                                 <Post
                                    id={post.id}
                                    author_id={post.user.id}
                                    author_first_name={post.user.first_name}
                                    author_last_name={post.user.last_name}
                                    author_avatar={post.user.avatar}
                                    created={post.created}
                                    content={post.content}
                                    images={post.images}
                                    shared_post={post.shared_post}
                                    likes={post.amount_of_likes}
                                    comments={post.comments}
                                    showDeletePostModal={setViewDeletePost}
                                 />
                              </div>
                           ) : null
                        )
                     ) : (
                        <p>WAITING</p>
                     )}
                  </div>
               </div>
               <div className="gridright">
                  <div className="flex flex-col gap-5">
                     {posts.length > 0 ? (
                        posts.map((post, index) =>
                           index % 2 !== 0 ? (
                              <div key={post.id}>
                                 <Post
                                    id={post.id}
                                    author_id={post.user.id}
                                    author_first_name={post.user.first_name}
                                    author_last_name={post.user.last_name}
                                    author_avatar={post.user.avatar}
                                    created={post.created}
                                    content={post.content}
                                    images={post.images}
                                    shared_post={post.shared_post}
                                    likes={post.amount_of_likes}
                                    comments={post.comments}
                                    showDeletePostModal={setViewDeletePost}
                                 />
                              </div>
                           ) : null
                        )
                     ) : (
                        <p>WAITING</p>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SocialWallPage
