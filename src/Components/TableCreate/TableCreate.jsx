import React,{useState} from 'react'
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TableBody } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
const TableCreate = ({setaddrow,index,data,setdata}) => {
    
    const [value, setvalue] = useState(false)
    const handalCheck = (e)=>{
    
  if(!value){
    setvalue(true)
    setaddrow(old=>[...old,index])
  }else{
    setvalue(false)
  }
    }
    let handalChange 
   if(value){

     handalChange = (e)=>{
      let res = data.filter(elem =>elem.id === index  )[0]
   
      res = {...res,id:index,[e.target.name]:e.target.value}
     
      let index1 = data.findIndex(elem =>elem.id ==index)
      if(index1 === -1){
        setdata(old=>[...old,res])
      }else{
        const marge = Object.assign([...data],{
          [index1]:res
        })
        setdata(marge)
      }
    }

   }
  return (

   
       <div className='flex '> 
       
       <Checkbox checked={value} onChange={handalCheck}  />
           <TableCell   >
            <input  onChange={handalChange} className='bg-[#ffffff] w-4/4  px-2 focus:outline-none' placeholder='Key' type="text" name="Key" id="" />
            </TableCell>
           <TableCell >
           <input  onChange={handalChange}  className='bg-[#ffffff] w-4/4 px-2 focus:outline-none' placeholder='value' type="text" name="Value" id="" />
            </TableCell>
           
         
       </div>
         
              
         
     
         
         
         
          
   
       
    
  )
}

export default TableCreate
