import React from 'react';
import InfoAboutMe from '../components/infoAboutMe';
import FooterAbout from '../components/footerAbout'
import SkillInfo from '../components/skillInfo'

const AboutMe = () => {
  return ( 
    <>
    <InfoAboutMe>
      <SkillInfo/>
    </InfoAboutMe>
    < FooterAbout/>
    </>
   );
}
 
export default AboutMe;