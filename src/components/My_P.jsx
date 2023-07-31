import React from 'react'

const My_P = ({pclass,pid,ptext,childeren}) => {
  return (
    <p className={pclass} id={pid}>
        
       {ptext} {childeren}    
    </p>
  )
}

export default My_P