import React from 'react'

const MySpan = ({Spclass,spId,sptext,children}) => {
  return (
    <span className='Spclass' id='spId'>
       {sptext}{children}
    </span>
  )
}

export default MySpan