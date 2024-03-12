import { Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableCreate from '../TableCreate/TableCreate';
import Checkbox from '@mui/material/Checkbox';
import { Contextdata } from '../../Context/Context-api';

const Tables = ({text,dataPrams,setdataParms}) => {
    const [addrow, setaddrow] = useState([0])
   
    const {setformData} = useContext(Contextdata)
 

  return (
    <div>
      <p className='mt-2'>{text}</p>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth:100}} aria-label="simple table">
        <TableHead>
          <TableRow style={{width:"100%",}}>
            
         <div className='w-full flex pl-10'>
          
       <h1></h1>
       <div className='flex gap-[18vw] '> 
       

           <TableCell   >
          <h1>Key</h1>
            </TableCell>
           <TableCell >
           <h1>Value</h1>
            </TableCell>
           
         
       </div>
         
         
             
             
             
         </div>
         
         
   
           
           
         
          </TableRow>
        </TableHead>
       
  
    

 <TableBody 
         
              
         >
  {addrow.map((e,index)=>(
       <TableCreate data={dataPrams} setdata={setdataParms} key={index} setaddrow={setaddrow} index={index} />
  ))}
         
         
          
         </TableBody>

       
      
      </Table>
    </TableContainer>
    </div>
  )
}

export default Tables
