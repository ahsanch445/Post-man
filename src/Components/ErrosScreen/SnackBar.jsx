import React from 'react'
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
const SnackBar = ({error,seterror,errorMessage}) => {
    const handalClose = ()=>{
        seterror(false)
    }
  return (
    <>
     
<Snackbar
  open={error}
  autoHideDuration={6000}
  onClose={ handalClose}
  message={errorMessage}

/>
    </>
  )
}

export default SnackBar
