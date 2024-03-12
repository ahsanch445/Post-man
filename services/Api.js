import axios from "axios"

export const getData = async(formData,getParms,getHeaders, bodyData,setResError)=>{
    console.log(bodyData)
    try{
    
        return await axios({
method:formData.mathod,
url:formData.Url,
body:bodyData,
params:getParms,
headers:getHeaders
})

    }
    catch(err){
   return err
    }
}
