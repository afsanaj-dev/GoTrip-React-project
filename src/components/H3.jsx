import React from 'react'

const H3 = ({h3class,h3id,h3text,children}) => {
  return (
    <h3 className={h3class} id={h3id}>
        {h3text}{children}
    </h3>
  )
}

export default H3