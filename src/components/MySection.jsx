import React from 'react'

const MySection = ({sclass,sid,children}) => {
  return (
   <section className={sclass} id={sid}>
        {children}
   </section>
  )
}

export default MySection