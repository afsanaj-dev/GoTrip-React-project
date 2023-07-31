import React from 'react'

const My_a = ({alink, atext,children}) => {
  return (
    <a href={alink}>
        {atext}{children}
    </a>
  )
}

export default My_a