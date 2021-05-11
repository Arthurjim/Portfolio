import React from 'react';
import styled from 'styled-components';

const SkillInfoStyled = styled.div`
  display:grid;

  grid-column: 1 / 3;
  margin-top:50px;
 
  background:white;
  height:250px;
  width:100%;

  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;
  
  .topSills{
    background-color:#03091E;
    place-self: center;
    width:80%;
    height:90%;
  }
  .skill{
    text-align:center;
    color:#fff;
  }
  .topSills p{
    text-align:center;
    margin: 5px auto;
    width:60%;
    height:35px;
    line-height:35px;
    font-weight:700;
    border-radius:8px;
    font-size:1rem;
  }
  .js{
    background:yellow;
   
  }
  .react{
    background:#222222;
    color:#61DAFB;
  }
  .redux{
    background:#7248B6;
    color:#fff;
  }
  .php{
    background-color:#7C66F7;
    color:#000;
  }
  .node{
    background-color:#86BE00;
    color:#000;

  }
  .express{
    background:#212121;
    color:#2E9ED4;
  }
  .postgresql{
    background:#31648C;
    color:#fff;
  }
  .mysql{
    background:#124C5E;
    color:#E17511;
  }
  .mongo{
    background:#68A037;
    color:#fff;
  }
  @media screen and (max-width:800px){
    grid-template-columns: repeat(3, 1fr);
  column-gap: 5px;
  row-gap: 5px;
    .topSills p{
    font-size:12px;
    width:80%;
      
  }
  
  }
`
const SkillInfo = () => {
  return (  
    <SkillInfoStyled>
    
     <div className="topSills">
       <h2 className="skill">FRONTEND</h2>
       <div>
         <p className="js">JS</p>
          
         <p className="react">REACT</p>
         <p className="react">REACT NATIVE</p>
         <p className="redux">REDUX</p>

       </div>
     </div>
     <div className="topSills">
      <h2 className="skill" >BACKEND</h2>
      <div>
         <p className="js">JS</p>
         <p className="php">PHP</p>

         <p className="node">NODEJS</p>
         <p className="express">EXPRESS</p>

       </div>
     </div>
     <div className="topSills">
      <h2 className="skill">DATA BASE</h2>
        <p className="postgresql">POSTGRESQL</p>
        <p className="mysql">MYSQL</p>
        <p className="mongo">MONGOBD</p>
     </div>

    </SkillInfoStyled>
  );
}
 
export default SkillInfo;