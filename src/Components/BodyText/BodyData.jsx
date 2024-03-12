
import React, { useContext } from 'react'
import { Contextdata } from '../../Context/Context-api'

const BodyData = () => {
  const {setbodyData} = useContext(Contextdata)
  const handalChange =  (e)=>{
setbodyData(e.target.value)
  }
  return (

     <div>

<label for="message" class="block m-2 text-sm font-medium text-gray-900 dark:text-white">JSON</label>
<textarea onChange={handalChange} id="message" rows="4" class=" px-8  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: focus:outline-none">

    
</textarea>

    </div>
   
  )
}

export default BodyData
