import React from 'react'

const H4 = ({h4class,h4text,children}) => {
  return (
    <h4 className={h4class}>
       {h4text} {children}
    </h4>
  )
}

export default H4