import { useState } from 'react'

const FilterAndSearchBar = () => {
   const [activeTab, setActiveTab] = useState('All')
   const [search, setSearch] = useState('')

   return (
      <div className=" flex justify-between items-center h-20 w-full gap-10 pl-35 pr-35 border-b border-b-gray-100">
         <form
            onSubmit={(event) => event.preventDefault()}
            className="flex justify-between items-center gap-3 grow"
         >
            <img src="./search_icon.svg" />
            <input
               className="h-15 w-full p-3 focus:outline-0"
               placeholder="Search posts..."
               onChange={(event) => setSearch(event.target.value)}
            />
         </form>
         <div className="flex justify-between items-center gap-10 h-full">
            <div
               onClick={() => setActiveTab('All')}
               className={`flex items-center h-full ${activeTab === 'All' ? 'border-b-2' : 'border-b-2 border-transparent'}`}
            >
               <h2>All</h2>
            </div>
            <div
               onClick={() => setActiveTab('Liked')}
               className={`flex items-center h-full ${activeTab === 'Liked' ? 'border-b-2' : 'border-b-2 border-transparent'}`}
            >
               <h2>Liked</h2>
            </div>
            <div
               onClick={() => setActiveTab('Friends')}
               className={`flex items-center h-full ${activeTab === 'Friends' ? 'border-b-2' : 'border-b-2 border-transparent'}`}
            >
               <h2>Friends</h2>
            </div>
            <div
               onClick={() => setActiveTab('Follow')}
               className={`flex items-center h-full ${activeTab === 'Follow' ? 'border-b-2' : 'border-b-2 border-transparent'}`}
            >
               <h2>Follow</h2>
            </div>
         </div>
      </div>
   )
}

export default FilterAndSearchBar
