import React from 'react';
import {Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderStyled = styled.div`
 display: grid;
   position: sticky;
   top: 0;
   grid-template-columns: 30% auto;
   width: 100%;
   height: 100px;
   background:#ffffff;
   order: 5;
   z-index: 100;
   .header__logo{
   color: var( --letras-azul);
   text-shadow: 0px 4px 0px rgb(80, 0, 0);

   /* color: var( --letras-rojo);
      text-shadow: 0px 4px 0px rgb(190, 4, 4); */
   margin: auto 20px ;
   font-size: 50px;
   text-transform: uppercase;
   font-weight: 800;
   letter-spacing: 2px;
}
.header__logo span{
   color: var( --letras-azul);
   font-size: 30px;
}
.header__form{
   display: grid;
   width: 100%;
   height: 100%;
   justify-content: right;
align-content: center;

}
.header__form ul{
   display: grid;
   width: 500px;
   height: 50px;
   grid-template-columns: repeat(4,1fr);
   

}
.header__form ul li{
   display: inline-block;
   text-align: center;
   align-items: center;
   justify-content: center;

   

}

.header__form ul li a{
   color:rgb(0, 0, 0);
   text-decoration: none;
   font-size:15px;
   font-weight: 600;
   line-height: 40px;
}
.header__form ul .active{
   border-bottom: 1px solid rgb(0, 0, 0);

}
.header__form ul li::first-letter{
   color: var( --letras-azul);
   text-shadow: 0px 2px 0px rgb(80, 0, 0);

   font-size:20px;
   
}

@media screen and (max-width: 700px) {

display: grid;
top: 0;
grid-template-columns:none;

grid-template-rows: 50% 50%;

height: 85px;

order: 5;
z-index: 100;


.header__logo{
color: var( --letras-azul);
text-shadow: 0px 4px 0px rgb(80, 0, 0);

margin: auto 10px;
font-size: 35px;
text-transform: uppercase;
font-weight: 700;
letter-spacing: 5px;
width: 90%;
text-align: center;
}
.header__logo span{
color: var( --letras-azul);
font-size: 30px;

}
.header__form{
width: 100%;
height: 100%;
justify-content: center;/*Ajustar todo el contenido horizontal*/
/* Solo a estos dos se les puede aplicar space-evenly, space-between */
align-content: center;/*Ajustar todo el contenido verticalmente*/ 

}
.header__form ul{
display: grid;
column-gap: 10px;
width: 100%;
height: 50px;

}
.header__form ul li{
display: inline-block;
text-align: center;
align-items: center;
justify-content: center;


}

.header__form ul li a{
color:#000;
text-decoration: none;
font-size:17px;
font-weight: 500;
line-height: 40px;
}
.header__form ul .active{
border-bottom: 1px solid white;

}
.header__form ul li::first-letter{
color: var( --letras-azul);
text-shadow: 0px 2px 0px rgb(80, 0, 0);

font-size:20px;

}

}
`
const Header = () => {
  return ( 
    <HeaderStyled>
    <div className="header__logo">
       <p>AJR</p>
    </div>
    <div className="header__form">
       <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutMe">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
         
          
          <li><Link to="/contact">Contact</Link></li>
       </ul>
    </div>
 </HeaderStyled>
   );
}
 
export default Header;