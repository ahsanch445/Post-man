import React, { useContext, useState } from 'react'
import Header from '../../Components/Header/Header'
import Form from '../../Components/Forms/Form'
import Response from '../../Components/Response/Response'
import Error from '../../Components/ErrosScreen/Error'
import { Contextdata } from '../../Context/Context-api'
import SnackBar from '../../Components/ErrosScreen/SnackBar'

import { getData } from '../../../services/Api'
import { CheckValidation } from '../../Components/Validation/Validation'


const Home = () => {
  const [ResError, setResError] = useState(false)
  console.log(ResError)
  const [ApiData, setApiData] = useState()
  const {formData,getParms,getHeaders, bodyData} = useContext(Contextdata)
  const [ error, seterror] = useState(false)
  const [errorMessage, setErrorMessage] = useState()
  const handalClick = async ()=>{
console.log(getHeaders)
    if( !CheckValidation(formData, bodyData,setErrorMessage)){
      seterror(true)
      return false
     
    }else{
   let res =  await  getData (formData,getParms,getHeaders, bodyData ,setResError)

  if(res.name==="AxiosError"){
    setResError(true)
  }
  console.log(res.data)
if(res.data){
  setResError(false)
  setApiData(res?.data)
}
  
    }
  }
  return (
    <>
<Header/>
<Form handalClick={handalClick}/>
{ResError?<Error/>:<Response ApiData={ApiData}/>}
{error&& <SnackBar error={error} seterror={seterror} errorMessage={errorMessage}/>}
    </>
  )
}

export default Home
