import React from 'react';
import styled from 'styled-components';

const SocialLinksStyled = styled.div`
 width: 100%;
   height: 100%;
   display: grid;
   grid-template-rows: auto;
   justify-content: right;
   right: 0;
   bottom: 0;
   .main_social-item{
   transition: all .5s;

   display: grid;
   grid-template-columns: 30% 70%;
   height: 100%;
   width: 255px;
   
   position: relative;
   right: -170px;
   border-radius: 55px 0 0 55px;
   text-align: center;
   justify-self: left;
   align-items: center

}
.main_social-item:hover{
   transition: all .5s;
   width: 255px;
   display: grid;
   justify-self: start;
   right: 0;


}
.main_social-item i{
   font-size: 25px;
   color: white;

}
.main_social-item a{
  color: var(--letras-azul);

   font-family: 'Roboto Slab', serif;
   text-decoration: none;
   font-size: 15px;
   font-weight: 700;
}
@media screen and (max-width:700px){
  
    width: 100%;
   height: 100%;
   display: grid;
   grid-template-rows: auto;
   justify-content: right;
   right: 0;
   bottom: 0;
.main_social-item{
   transition: none;

   display: grid;
   grid-template-columns: 30% 70%;
   height: 100%;
   width: 50px;
   
   position: relative;
   right: 0px;
   border-radius: 55px 0 0 55px;
   text-align: center;
   justify-self: left;
   align-items: center

}
.main_social-item:hover{
   transition: none;
   width: 50px;
   display: grid;
   justify-self: center;
   right: 0;


}
.main_social-item a{
  display:none;
}
}
`


const SocialLinks = () => {
  return ( 

    <SocialLinksStyled>
      <div className="main_social-item github">
        <i className="fab fa-github"></i> <a href="https://github.com/Arthurjim">GITHUB</a>
      </div>
      <div className="main_social-item linkedin">
        <i className="fab fa-linkedin"></i>
        <a href="www.linkedin.com/in/arturo-jiménez-reyes-8389901b0">LINKEDIN</a>
      </div>
      <div className="main_social-item youtube">
        <i className="fab fa-youtube"></i>
        <a href="https://www.youtube.com/channel/UCuiOlYBeZGZT7qo0MNr5npw/featured">YOUTUBE</a>
      </div>
      
    
      <div className="main_social-item instagram">
        <i className="fab fa-instagram"></i>
        <a href="https://www.instagram.com/arthurjimenezz/">INSTAGRAM</a>
      </div>
      <div className="main_social-item twitter">
        <i className="fab fa-twitter"></i>
        <a href="/"> TWITTER</a>
      </div>
 </SocialLinksStyled>
   );
}
 
export default SocialLinks;

