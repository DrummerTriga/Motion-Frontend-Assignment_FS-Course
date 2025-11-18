import PrimaryButtonIcon from '../../elements/Buttons/PrimaryButtonIcon'
import SecondaryButtonIcon from '../../elements/Buttons/SecondaryButtonIcon'

const FriendRequests = ({
   key,
   first_name,
   last_name,
   location,
   avatar,
   type,
}) => {
   const iconSVG = (
      <svg
         fill="none"
         height="25"
         viewBox="0 0 24 24"
         width="25"
         xmlns="http://www.w3.org/2000/svg"
         id="fi_2732655"
      >
         <path
            clip-rule="evenodd"
            d="m20.6136 5.64877c.4199.36742.458 1.00751.0845 1.42204l-10.5139 11.66979c-.37544.4167-1.02006.4432-1.42843.0588l-6.08403-5.7276c-.37942-.3572-.41574-.9524-.09021-1.3593.3592-.449 1.02811-.5108 1.4556-.1263l4.72039 4.2459c.41022.369 1.04179.336 1.41138-.0737l9.0435-10.02691c.3659-.40576.99-.44254 1.4012-.08272z"
            fill="white"
            fill-rule="evenodd"
         ></path>
      </svg>
   )

   const crossIconSVG = (
      <svg
         height="25"
         viewBox="0 0 329.26933 329"
         width="25"
         xmlns="http://www.w3.org/2000/svg"
         id="fi_1828778"
      >
         <path
            d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0"
            fill="grey"
         ></path>
      </svg>
   )

   const pendingSVG = (
      <svg
         id="fi_2088617"
         enable-background="new 0 0 443.294 443.294"
         height="25"
         viewBox="0 0 443.294 443.294"
         width="25"
         xmlns="http://www.w3.org/2000/svg"
      >
         <path d="m221.647 0c-122.214 0-221.647 99.433-221.647 221.647s99.433 221.647 221.647 221.647 221.647-99.433 221.647-221.647-99.433-221.647-221.647-221.647zm0 415.588c-106.941 0-193.941-87-193.941-193.941s87-193.941 193.941-193.941 193.941 87 193.941 193.941-87 193.941-193.941 193.941z"></path>
         <path
            d="m235.5 83.118h-27.706v144.265l87.176 87.176 19.589-19.589-79.059-79.059z"
            fill="grey"
         ></path>
      </svg>
   )

   return (
      <div className="flex items-center w-full gap-2 p-4">
         <div className="w-1/5">
            <img className="w-9 h-9" src={avatar} />
         </div>
         <div className="w-2/5">
            <p>
               {first_name} {last_name}
            </p>
            <p className="text-neutral-400">{location}</p>
         </div>

         {type !== 'request' && (
            <div className="w-2/5 flex justify-end gap-3">
               <PrimaryButtonIcon
                  icon={iconSVG}
                  onClickHandler={() => console.log('I am the accept button')}
               />
               <SecondaryButtonIcon
                  icon={crossIconSVG}
                  onClickHandler={() => console.log('I am the abort button')}
               />
            </div>
         )}

         {type === 'request' && (
            <div className="w-2/5 flex justify-end gap-3 hover:cursor-progress">
               <SecondaryButtonIcon icon={pendingSVG} />
            </div>
         )}
      </div>
   )
}

export default FriendRequests
