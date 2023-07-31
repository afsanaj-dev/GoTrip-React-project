import React from 'react'

const Images = ({source,alttext,imgclass}) => {
  return (
    <img className={imgclass} src={source} alt={alttext} />
  )
}

export default Images