const SharedPost = ({ shared }) => {
   return (
      <div>
         <div className="flex flex-col border border-t-gray-300 border-b-gray-300 border-transparent p-6 gap-3 mt-4">
            <div className=" flex items-center gap-3">
               <img
                  className="h-10 w-10 rounded-full"
                  src={
                     shared.user.avatar
                        ? shared.user.avatar
                        : '/noAvatarReplace.png'
                  }
               />
               <h1>{`${shared.user.first_name} ${shared.user.last_name}`}</h1>
            </div>
            <p className="italic">{shared.content}</p>
            <div className="grid grid-cols-2 gap-1  justify-items-center items-center h-full">
               {shared.images.map((imgObj, index) => (
                  <img
                     className="max-w-full max-h-80"
                     key={index}
                     style={{
                        aspectRatio: `${imgObj.width} / ${imgObj.height}`,
                     }}
                     src={imgObj.image}
                  />
               ))}
            </div>
         </div>
      </div>
   )
}

export default SharedPost
