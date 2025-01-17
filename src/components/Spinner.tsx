import React from 'react'

const Spinner = ({spinner, setSpinner}) => {

  setTimeout(()=>{
    setSpinner(false);
  }, 11500);

  return (
    <div className="spinner">
        <div className="rect1"></div>
        <div className="rect2"></div>
        <div className="rect3"></div>
        <div className="rect4"></div>
        <div className="rect5"></div>
    </div>
  )
}

export default Spinner