import React from 'react';
import {Link } from 'react-router-dom'

import styled from 'styled-components';

const MainHomeStyled = styled.div`
 width: 93%;

   margin: auto;
   border-radius: 12px;
  
.main__info-div{
   width: 100%;
   height: 80%;
   border-left: 1px solid rgb(241, 241, 241);

  margin: 30px 15px;
  padding:20px;

}


.main__info-div  p{
   margin-top: 25px;
   font-size: 25px;
   letter-spacing: 3px;
color:rgb(255, 255, 255);





}

.main__info-div h2{

   font-size: 90px;
font-weight: 800;
color:rgb(255, 253, 253);
}
.main__info-div h2 span{
   color: var( --letras-azul);
   text-shadow: 0px 4px 0px rgb(80, 0, 0);

}
.main__info-div  h3{
   font-size: 60px;

   font-weight: 800;

color:rgb(255, 255, 255);
   text-align: right;
   align-self: top;
   padding-top: 20px;

}
.main__info-div  h3 span{
   color: var( --letras-azul);
   text-shadow: 0px 4px 0px rgb(80, 0, 0);


}
.main__contact {
   width: 100%;
   height: 100px;
}
.main__contact .btn{
   width:350px;
   height: 55px;
   font-size: 20px;
 margin:50px 35% ;

 background: var(--letras-azul);

   border:none;
   border-radius: 5px;
   color: white;
   text-transform: uppercase;
   
}
.main__contact .btn:hover{

color:black;
}
 .main__animation{
   width: 100%;
   height: 200px;
   padding: 10px;
}
.main__animation-circle:first-child{

   width: 20px;
   height: 20px;
   border-radius: 50%;
  
   animation: transaladarBola 8s alternate infinite;
   /* animation-timing-function: cubic-bezier(x,y,x,y); */
}
.main__animation-circle:nth-child(2){
   width: 20px;
   height: 20px;
   border-radius: 50%;
  
   animation: transaladarBola 8s alternate-reverse infinite;
}

@keyframes transaladarBola{
   0%{
      transform: translate(0,0);
   background: var(--letras-azul);

   }
   20%{
      transform: translate(150px,150px);
   background: rgb(255, 255, 255);
      

   }
   40%{
      transform: translate(300px,0px);
      background: var(--letras-azul);

   }
   60%{
      transform: translate(450px,150px);
      background: rgb(192, 0, 0);


   }
   80%{
      transform: translate(600px,0px);
      background: var(--letras-azul);

   }
   100%{
      transform: translate(750px,150px);
      background: rgb(255, 255, 255);


   }
   
}
@media screen and (max-width: 700px) {
   .main__info-div{
   width: 100%;
   height: 100%;
   border-left: 1px solid rgb(93, 238, 205);
   /* border-bottom: 1px solid rgb(93, 238, 205); */

  margin: 30px 5px;
  padding:20px;
  /* object-fit: cover; */
  /* border: 1px solid red; */

}
.main__info-div  p{
   margin-top: 25px;
   font-size: 20px;
   letter-spacing: 3px;
   color:rgb(255, 255, 255);
   text-align: center;

}
.main__info-div h2{
   margin-top: 25px;
   font-size: 45px;
   font-weight: 800;
   color:rgb(255, 253, 253);
   text-align: center;

}
.main__info-div h2 span{
   color: var( --letras-azul);
   text-shadow: 0px 4px 0px rgb(80, 0, 0);


}
.main__info-div  h3{
   margin-top: 25px;

   font-size: 30px;
   font-weight: 800;
   color:rgb(255, 255, 255);
   
   text-align: center;

   align-self: top;
   padding-top: 20px;

}
.main__info-div  h3 span{
   color: var( --letras-azul);
   text-shadow: 0px 4px 0px rgb(80, 0, 0);
}
.main__animation{
   display: none;
}
.main__contact .btn{
   width:50%;
   margin: 10% 27%;
}
}
`

const MainHome = () => {
  return (  
      <MainHomeStyled>
        <div className="main__info-div">
          <p>Hello, mi name is </p>
          <h2>Arturo <span>Jiménez</span> Reyes</h2>
          <h3>I'm FrontEnd <span>Developer</span> </h3>
          <div className="main__contact">
           <Link to="/contact">
           <button className="btn">Contact Me</button>
           </Link>
          </div>
          <div className="main__animation">
            <div className="main__animation-circle"></div>
            <div className="main__animation-circle"></div>
          </div>
        </div>
      </MainHomeStyled>
  );
}
 
export default MainHome;