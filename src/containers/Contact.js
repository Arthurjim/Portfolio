import React from 'react';
import FormContact from '../components/formContact'
import styled from 'styled-components'

const ContactStyled = styled.div`
width:100%;
height:480px;

`
const Contact = () => {
  return ( 
    <ContactStyled>
      
      <FormContact/>
    </ContactStyled>
   );
}
 
export default Contact;