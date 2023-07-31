import React from 'react'
import MySection from '../components/MySection'
import MyDiv from '../components/MyDiv' 
import H3 from '../components/H3'
const Banner = () => {
  return (
    <MySection sid="banner">
        <MyDiv DClass="container">
            <MyDiv DClass="bn_txt">
                <h1>The World is Waiting For You</h1>
                <H3 h3text="Discover amzaing places at exclusive deals"/>
            </MyDiv>
        </MyDiv>

    </MySection>
  )
}

export default Banner