import React from 'react';
import PhotoAbout from './photoAbout'
import styled from 'styled-components';

const InfoAbout = styled.div`
margin-top: 20px;
display: grid;
grid-template-rows: none;
grid-template-columns: 24% auto ;
width: 80%;
margin: 50px auto;
background:#03091E;


border-left: 5px solid #afafaf;

.main_info{
color: #fff;

}
.main_info-div{
padding: 50px 30px;
}
.main_info-div p{
text-align: left;
font-size: 22px;
font-family: cursive;
}
.main__currently{
font-size: 20px;
text-align: center;
}
.main__currently span{
  color:var(--letras-azul);
  font-weight:700;
  text-shadow: 0px 1px 0px rgb(80, 0, 0);

}
`
const InfoAboutMe = ({children}) => {
  return ( 
    <InfoAbout>
      <PhotoAbout/>
      <div class="main_info">
        <div class="main_info-div">
            <p>Hi, I'm Arturo, a information technology engineer, Graduated from Universidad Tecnologica del Norte de Aguascalientes</p><br/>
            <p class="main__currently">I currently perform as <span>Front End Developer</span>. </p>
            <p>For my is importante never stop learning becouse this help you to be best person, worker and live better</p>
            <p>I like to create projects that exceed customer expectations </p>

            <p>Live in México, Zacatecas, but I have no problem changing my residence </p>
        </div>
      </div>
      {children}

   </InfoAbout >
   );
}
 
export default InfoAboutMe;