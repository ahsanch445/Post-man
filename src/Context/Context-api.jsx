import { createContext,useState } from "react";

export const Contextdata = createContext(null)

 const ContextProvider = ({children})=>{
    const [formData, setformData] = useState({mathod:"POST"})
const [getParms, setgetParms] = useState([])
const [getHeaders, setgetHeaders] = useState([])
const [bodyData, setbodyData] = useState({})

console.log(bodyData)

    return(
        <Contextdata.Provider value={{ bodyData, setbodyData,getHeaders, setgetHeaders, formData, setformData,getParms, setgetParms}}>
{children}
        </Contextdata.Provider>
    )
 }
 export default ContextProvider 