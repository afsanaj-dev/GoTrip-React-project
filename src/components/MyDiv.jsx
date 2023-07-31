import React from 'react'

const MyDiv = ({DClass,DId,children}) => {
  return (
    <div className={DClass} id={DId} >
        {children}
    </div>
  )
}

export default MyDiv