import React from 'react'
import { ToastContainer, toast } from'react-toastify';
import'react-toastify/dist/ReactToastify.css';

function Notification() {
  const notify = () => 
    toast.success("remove!");
  
  const show = () => 
    toast.info("selected!");
  const provide = () => 
    toast.warning("are you sure!");
  return (
    <div>
          <button onClick={notify}>remove!</button>
          <button onClick={show}>SELECT!</button>
          <button onClick={provide}>choose!</button>
          
        <ToastContainer position='top-center'
        pauseOnHover="FALSE" 
        pauseOnFocusLoss="FALSE"
        draggable="true"
        />
    </div>
  )
}

export default Notification