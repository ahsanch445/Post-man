import React from 'react'

const Response = ({ApiData}) => {

  let obj = ApiData;
    
  let readableobj = '{ \n';
  for(let key in obj) {
      readableobj += '\t'
      readableobj += (typeof obj[key] === "string")? `${key}: "${obj[key]}"` : `${key}: ${obj[key]}`; 
      if (Object.keys(obj).pop() !== key.toString()) {
          readableobj += ',\n'
      }
  }
  readableobj += '\n}';
  console.log(readableobj)
  return (
    <div className=' pl-24 pr-12 '>
        <div>

<label for="message" class="block m-2 text-sm font-medium text-[#3c82a3] dark:text-white">Response</label>
<textarea value={readableobj} id="message" readOnly rows="4" class=" px-8  block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark: focus:outline-none">

</textarea>

    </div>
    </div>
  )
}

export default Response
