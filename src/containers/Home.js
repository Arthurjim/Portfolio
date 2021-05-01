import React from 'react';
import MainHome from '../components/mainHome';
import SociaLinks from '../components/socialLinks'
import styled from 'styled-components'

const HomeStyled = styled.div`
width: 100%;
   height: 572px;
   display: grid;
   grid-template-columns: 80% 20%;
  
   order: 1;
   overflow:hidden;
   background-attachment: fixed;
   @media screen and (max-width: 700px) {
    width: 100vw;

   }
   `
const Home = () => {
  return ( 
    <HomeStyled>
      
      <MainHome />
      <SociaLinks/>
    </HomeStyled>
   );
}
 
export default Home;