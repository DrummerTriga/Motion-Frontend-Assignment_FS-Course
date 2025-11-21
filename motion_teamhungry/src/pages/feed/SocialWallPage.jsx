import { useState } from 'react'
import DeletePost from '../../components/Feed/DeletePost'
import { useEffect } from 'react'
import Post from '../../components/Feed/Post'
import FilterAndSearchBar from '../../components/Feed/FilterAndSearchBar'
import { motion_api_auth } from '../../axios/axiosBase.js'
import CreatePost from '../../components/Feed/CreatePost'
import Spinner from '../../elements/Spinner.jsx'

const SocialWallPage = ({ hide_create_post, filterfromProfile }) => {
   const [filter, setFilter] = useState('')
   const [search, setSearch] = useState('')
   const [debouncedSearch, setDebouncedSearch] = useState('')
   const [posts, setPosts] = useState([])
   const [viewDeletePost, setViewDeletePost] = useState(false)
   const [isLoading, setIsLoading] = useState(false)
   const [error, setError] = useState(null)

   useEffect(() => {
      const handler = setTimeout(() => {
         setDebouncedSearch(search)
      }, 400)

      return () => clearTimeout(handler)
   }, [search])

   //Runs when filterformProfile is set. By returning directly, it skips the function and otherwise goes to the default fallback.
   useEffect(() => {
      if (!filterfromProfile) return
      let timeoutId

      const fetchFilteredPosts = async () => {
         setIsLoading(true)
         setError(null)
         timeoutId = setTimeout(() => {
            setError('Server not responding – please try again later.')
         }, 10_000)

         try {
            const response = await motion_api_auth.get(
               `social/posts/${filterfromProfile}?search=${debouncedSearch}`
            )
            setPosts(response.data.results)
         } catch {
            setError('Posts could not be loaded')
         } finally {
            clearTimeout(timeoutId)
            setIsLoading(false)
         }
      }

      fetchFilteredPosts()
      return () => clearTimeout(timeoutId)
   }, [filterfromProfile, debouncedSearch])
   useEffect(() => {
      if (filterfromProfile) return
      let timeoutId

      const fetchAllPosts = async () => {
         setIsLoading(true)
         setError(null)
         timeoutId = setTimeout(() => {
            setError('Server not responding – please try again later.')
         }, 10_000)

         try {
            const response = await motion_api_auth.get(
               `social/posts/${filter}?search=${debouncedSearch}`
            )
            setPosts(response.data.results)
         } catch {
            setError('Posts could not be loaded')
         } finally {
            clearTimeout(timeoutId)
            setIsLoading(false)
         }
      }

      fetchAllPosts()
      return () => clearTimeout(timeoutId)
   }, [filter, filterfromProfile, debouncedSearch])

   return (
      <div className=" bg-zinc-100 py-5 ">
         {!hide_create_post && (
            <FilterAndSearchBar
               setFilter={setFilter}
               activeTab={filter}
               onSearchChange={setSearch}
            />
         )}
         <div className="flex justify-center py-5">
            {viewDeletePost && (
               <DeletePost showDeletePostModal={setViewDeletePost} />
            )}
            <div className="Griddivider grid lg:grid-cols-2 gap-5">
               <div className="gridleft">
                  <div className="flex flex-col gap-5">
                     {!hide_create_post && <CreatePost />}

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
                        <p className="ml-auto">
                           {isLoading && <Spinner />}
                           {error && <p className="text-red-500">{error}</p>}
                        </p>
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
                        <p></p>
                     )}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default SocialWallPage
