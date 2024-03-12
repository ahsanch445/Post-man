import React,{useContext, useState} from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Button from '@mui/material/Button';
import TabsData from '../Tabs/TabsData';
import { Contextdata } from '../../Context/Context-api';
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const Form = ({handalClick}) => {
  const { formData, setformData} = useContext(Contextdata)
   
    const handalChange =(e)=>{
      console.log(e.target.name)
      setformData({
        ...formData,
        mathod:e.target.name
      })
       
    }
    const handalInput = (e)=>{
   setformData({
    ...formData,
    Url:e.target.value


   })
    }
  return (
    <div className='pl-24 pr-12 py-1'>
     <div className=' flex items-center justify-between '>
 {/* {Dropdown } */}
 



    <Menu  as="div" className="relative inline-block text-left">
      <div  >
        <Menu.Button id='btn' className="  inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      {formData.mathod}
          <ChevronDownIcon  className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items   className=" absolute right-0 z-10 mt-2 w-24 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item >
              {({ active }) => (
                <button  name='POST'
                 onClick={handalChange}
                  className={classNames(
                    active ? 'bg-gray-100  text-gray-900 font-bold' : 'text-gray-700 font-semibold',
                    'block px-4 py-2 text-sm'
                  )}
                >
                POST
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                name='GET'
                onClick={handalChange}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900 font-bold ' : 'text-gray-700 font-semibold',
                    'block px-4 py-2 text-sm'
                  )}
                >
                GET
                </button>
              )}
            </Menu.Item>
         
         
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


 {/* Form */}
 
<div className='w-[80%]'>
  <input value={formData.Url}  onChange={handalInput} id='btn' className=' bg-[#dadada] w-full h-9 rounded-md' type="text" />
</div>
<div>
<Button onClick={handalClick}  variant="contained">Send</Button>
</div>

    </div>
    <TabsData/>
    </div>
   
  )
}

export default Form
