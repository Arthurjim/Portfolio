import React from 'react';
import {Link} from 'react-router-dom'
import styled from 'styled-components';

const FooterAboutStyled = styled.div`
margin-top: 0px;
text-align: center;
height:200px;
background:#03091E;

 h3{
color: #fff;
font-size:20px;
margin-bottom: 10px;
}
h3 span{
   color: var(--letras-azul);
   text-shadow: 0px 2px 0px rgb(80, 0, 0);

}
 a{
font-size: 17px;
display:block;
color:#fff;
text-decoration:none;
margin: 10px auto;
width: 49%;

}
 a:hover{

color: var(--letras-azul);

}

 p{
font-size: 12px;
font-family: cursive;
color: var(--letras-azul);

bottom: 0;
left: 0;
right: 0;

}
`
const FooterAbout = () => {
  return ( 
    <FooterAboutStyled>
      <h3>Go <span>to</span>...</h3>
      <Link>Universidad Tecnológica del Norte De Aguascalientes.</Link>
      <Link>Youtue/ArthurJimenez</Link>
      <Link>GitHub.com/ArthurJimenez</Link>
      <Link>Instagram.com/ArthurJimenezz</Link>
      <p>Designed by Arturo Jiménez Reyes</p>
    </FooterAboutStyled>
   );
  
}
 
export default FooterAbout;