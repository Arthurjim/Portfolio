import React from 'react';
import styled from 'styled-components';
import photo from '../images/photo2.png'
const PhotoAboutStyled = styled.div`

height: 90%;
margin: auto;
text-align: center;

.photo{
width: 100%;
object-position: center center;
border-radius: 0;
}
.title{
text-align: center;
margin-bottom: 20px;
border-radius: 10px;
text-shadow: 0px 2px 0px rgb(80, 0, 0);
color:var(--letras-azul)
}
.title span{
  color:white;
}
@media (max-width: 700px){
  height: 100%;
   text-align: center;
   color: #fff;
}
.photo{
   box-shadow: 10px -10px var(--letras-azul);
   width: 160px;
   object-position: center center;
}
`
const PhotoAbout = () => {
  return ( 
    <PhotoAboutStyled>
      <h2 className="title">ABOUT <span>ME</span></h2>
      <img className="photo" src={photo} alt=""></img>
    </PhotoAboutStyled>
   );
}
 
export default PhotoAbout;