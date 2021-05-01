import React from 'react';
import ecommerce from '../images/ecommerce.PNG'
import ecommercet from '../images/ecommerce2.PNG'
import register from '../images/register-login.PNG'
import point from '../images/point-project-home.PNG'
import styled from 'styled-components'

const ProjectListStyled = styled.div`
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: repeat(3,1fr);
      .top-projects__one{
      width: 85%;
      font-size:15px;
      height: 350px;
      margin: 10px auto;
      display: grid;
      grid-template-columns: 50% 40% auto;
      color: rgb(214, 214, 214);
      border-radius: 20px 0;
      border: 3px solid rgb(102, 102, 102);
      background: rgba(10, 10, 10, 0.582);
   }
   .top-projects__one:hover{
      background: rgba(10, 10, 10, .82);
      border: 3px solid var(--letras-azul);
      transition: all 1s;
     
          img{
           width: 100%;

      }
   }
   .top-projects-info{
      width: 100%;
      height: 100%;
      padding: 5px;
      display: inline-block;
   }
   .top-projects__one h3{
      font-size: 25px;
      color:var(--letras-azul);
      text-shadow: 0px 2px 0px rgb(80, 0, 0);
      border-bottom: 1px solid rgb(184, 184, 184);
      text-align: center;
      width: 80%;
      margin: auto;
   }
   .top-projects__one p{
      width: 90%;
      height: 100%;
      margin: 25px auto;
   }
   /* */
.top-projects-img__one,.top-projects-img__two, .top-projects-img__three {
   width: 100%;
   height: 100%;
   text-align: center;
   display: flex;
   object-fit: cover;
overflow: hidden;
}

.top-projects-img__one img{
   object-fit: contain;
   width:90%;
   height:90%;
   margin: auto;
   border-radius: 10px;
}

.top-projects-img__two img{
   width: 90%;
   margin: auto;
   border-radius: 10px;
}
.top-projects-img__three img{
   width: 90%;
   margin: auto;


   border-radius: 10px;
}
i{
   font-size: 35px;
   margin: 20px;
}
@media screen and (max-width:700px){
   .top-projects__one{
      width: 85%;
      font-size:12px;
      height: 350px;
      margin: 10px auto;
      display: grid;
      grid-template-columns: none;
      grid-template-rows: 50% auto 10%;

      color: rgb(214, 214, 214);
      border-radius: 20px 0;
      border: 3px solid rgb(102, 102, 102);
      background: rgba(10, 10, 10, 0.582);
   }
   .top-projects-img__one img{
   object-fit: contain;
   height:90%;
   margin: auto;
   border-radius: 10px;
}

.top-projects-img__two img{
   object-fit: contain;
   width:90%;

   height:100%;

   margin: auto;
   border-radius: 10px;
}
.top-projects-img__three img{
   object-fit: contain;

   height:100%;
   margin: auto;


   border-radius: 10px;
}
.links{
   width:100%;
   text-align:center;
}
i{
   font-size: 15px;
   margin: 5px 20px;
}
}
`
const ProjecstList = () => {
  return ( 
    <ProjectListStyled>
      <div class="top-projects__one">
          <div class="top-projects-info">
            <h3>Ecommerce</h3>
            <p>This project was create with React and useContext
               <br/>
               It's hosting in a firebase hosting
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi animi facilis iure excepturi maiores voluptatem eos praesentium dicta distinctio perspiciatis, fugiat culpa rem magnam harum impedit numquam itaque nesciunt!
            </p>
          </div>
          <div class="top-projects-img__one">
          
             <img  src={ecommerce} alt="" />    
         
             <img  src={ecommercet} alt="" />    
            
          </div>
          <div className="links">
             <i class="fab fa-github"></i>

             <i class="fas fa-share-square"></i>
          </div>
       </div>
       <div class="top-projects__one">
          <div class="top-projects-info">
             <h3>Register</h3>
             <p>This project was create with React and useContext
                <br />
                It's hosting in a firebase hosting
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi animi facilis iure excepturi maiores voluptatem eos praesentium dicta distinctio perspiciatis, fugiat culpa rem magnam harum impedit numquam itaque nesciunt!
             </p>
          </div>   
         
          <div class="top-projects-img__two">
             <img src={register} alt="" />
           
          </div>
          <div className="links">
             <i class="fab fa-github"></i> 

             <i class="fas fa-share-square"></i>
          </div>
       </div>
       <div class="top-projects__one">
          <div class="top-projects-info">
             <h3>Point Of Sale</h3>
          <p>This project was create with React and useContext
             <br/>
             It's hosting in a firebase hosting
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum modi animi facilis iure excepturi maiores voluptatem eos praesentium dicta distinctio perspiciatis, fugiat culpa rem magnam harum impedit numquam itaque nesciunt!
          </p>
          </div>
          
          <div class="top-projects-img__three">

             <img src={point} alt="" />
         
          </div>
          <div className="links">
             <i class="fab fa-github"></i> 

             <i class="fas fa-share-square"></i>
          </div>
       </div>
    </ProjectListStyled>
   );
}
 
export default ProjecstList;