import React,{useContext, useState} from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tables from '../Tables/Tables';
import BodyData from '../BodyText/BodyData';
import { Contextdata } from '../../Context/Context-api';

const TabsData = () => {
  const [value, setvalue] = useState(0)
const handleChange = (event,newValue)=>{
setvalue(newValue)
}
const {getParms, setgetParms, getHeaders, setgetHeaders} = useContext(Contextdata)
  return (


    <div >
<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  <Tabs TabIndicatorProps={{sx:{backgroundColor:"#e67d22",height:4,bottom:2}}}
  textColor='none'
  style={{marginTop:"10px"}} value={value} onChange={handleChange} aria-label="basic tabs example">
    <Tab style={{textTransform:"capitalize"}} label="Params" />
    <Tab  style={{textTransform:"capitalize"}} label="Headers"/>
    <Tab  style={{textTransform:"capitalize"}} label="Body" />
  </Tabs>
</Box>
<div
      role="tabpanel"
      hidden={value !== 0}
      id={`simple-tabpanel-${0}`}
      aria-labelledby={`simple-tab-${0}`}
  
    >
   <Tables dataPrams={getParms} setdataParms={setgetParms} text={"Qurry params"}/>
    </div>
<div
      role="tabpanel"
      hidden={value !== 1}
      id={`simple-tabpanel-${1}`}
      aria-labelledby={`simple-tab-${1}`}
  
    >
   <Tables dataPrams={getHeaders} setdataParms={setgetHeaders} text={"Headers"}/>
   
    </div>
<div
      role="tabpanel"
      hidden={value !== 2}
      id={`simple-tabpanel-${2}`}
      aria-labelledby={`simple-tab-${2}`}
  
    >
 <BodyData/>
    </div>
    </div>
  )
}

export default TabsData
