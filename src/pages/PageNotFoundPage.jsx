import { Link } from 'react-router'

const PageNotFoundPage = () => {
   return (
      <div className='flex flex-col items-center pt-40'>
         <h1 className="text-[40px] mt-auto">This page does not exist</h1>
         <Link to={'/auth/login'}>
         <span className='text-blue-500'>Go back to login page</span>
         </Link>
      </div>
   )
}

export default PageNotFoundPage
