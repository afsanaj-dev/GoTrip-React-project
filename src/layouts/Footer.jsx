import React from 'react'
import MyDiv from '../components/MyDiv'
import MySection from '../components/MySection'
import H3 from '../components/H3'
import My_P from '../components/My_P'
import Images from '../components/Images'
import My_a from '../components/My_a'

const Footer = () => {
  return (
    <MySection sid="footer">
      <MyDiv DClass="container">
        <MyDiv DClass="f_logo">
          <Images source="logo-light.png" alttext="footer_logo"/>
        </MyDiv>
        <MyDiv DClass="f_wrap">
          <MyDiv DClass="f_contact_wrap">
            <MyDiv DClass="f_contact">
              <My_P ptext="Toll Free Customer Care"/>
              <My_a alink="tel:+(1) 123 456 7890" atext="+(1) 123 456 7890"/>
            </MyDiv>
            <MyDiv DClass="f_contact">
              <My_P ptext="Need live support?"/>
              <My_a alink="mailto:hi@gotrip.com" atext="hi@gotrip.com"/>
            </MyDiv>
          </MyDiv>
          <MyDiv DClass="f_right_wrap">
            <MyDiv DClass="f_company">
                <H3 h3class="f_head" h3text="Company"/>
                <ul className='f_list'>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Blogs</li>
                  <li>Press</li>
                  <li>Gift Cards</li>
                </ul>
            </MyDiv>
            <MyDiv DClass="f_company">
                <H3 h3class="f_head" h3text="Support"/>
                <ul className='f_list'>
                  <li>Contact</li>
                  <li>Legal Notice</li>
                  <li>Privacy Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Site Map</li>
                </ul>
            </MyDiv>
            <MyDiv DClass="f_company">
                <H3 h3class="f_head" h3text="Other Services"/>
                <ul className='f_list'>
                  <li>Car Hire</li>
                  <li>Activity Finder</li>
                  <li>Flight Finder</li>
                  <li>Tour List</li>
                  <li>Holiday Rental</li>
                  <li>Travel Agents</li>
                </ul>
            </MyDiv>
          </MyDiv>
        </MyDiv>
      </MyDiv>
    </MySection>
  )
}

export default Footer