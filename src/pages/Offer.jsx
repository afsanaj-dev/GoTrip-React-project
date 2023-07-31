import React from 'react'
import MyDiv from '../components/MyDiv'
import MySection from '../components/MySection'
import H3 from '../components/H3'
import H4 from '../components/H4'
import My_P from '../components/My_P'
import Images from '../components/Images'
import My_a from '../components/My_a'

const Offer = () => {
  return (
    <MySection sid="offer">
      <MyDiv DClass="Container">
          <H3 h3class="offer_head" h3text="Special Offers"/>
          <My_P pclass="offer_h_p" ptext="These popular destinations have a lot to offer"/>
          <MyDiv DClass="offer_wrap">
            <MyDiv DClass="offer_item">
              <Images imgclass="offer_img" source="offer1.png" alttext="offer"/>
              <MyDiv DClass="offer_overlay">
                <H4 h4class="offer_title" h4text="Things To Do On
Your Trip"/>
                <My_a alink="#" atext="Experiences"/>
              </MyDiv>
            </MyDiv>
            <MyDiv DClass="offer_item">
              <Images imgclass="offer_img" source="offer2.png" alttext="offer"/>
              <MyDiv DClass="offer_overlay">
                <H4 h4class="offer_title" h4text="Let Your Curiosity
Do The Booking"/>
                <My_a alink="#" atext="Experiences"/>
              </MyDiv>
            </MyDiv>
            <MyDiv DClass="offer_item">
              <Images imgclass="offer_img" source="offer3.png" alttext="offer"/>
              <MyDiv DClass="offer_overlay">
                <My_P pclass="offer_p" ptext="Enjoy Summer Deals"/>
                <H4 h4class="offer_title1" h4text="Up to 70% Discount!"/>
                <My_a alink="#" atext="Experiences"/>
              </MyDiv>
            </MyDiv>
          </MyDiv>
      </MyDiv>
    </MySection>
  )
}

export default Offer