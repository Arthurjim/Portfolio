import React from 'react';
import styled from 'styled-components';

const SkillInfoStyled = styled.div`

  grid-column: 1 / 3;
  margin-top:50px;
 
  background:white;
  .titleSkills
  {

    display:block;
    color:#03091E;
   text-align:center;
  }
  .skills{
    width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  }
  .topSkill{
  position:relative;
  background:#03091E;


  width:250px;
  height:350px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:1rem;
  box-shadow:0 0px 7px 3px rgba(0, 0, 0, 0.2);


  }
  .topSkill:hover {
    background:#022e70;

  }
 .topSkill .porcent{
   position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcent svg{
    position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcent svg circle{
    width:150px;
    height:150px;
    fill:none;
    stroke-width:10;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:440;
    stroke-dashoffset:440;

  }
  .porcent svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcent svg circle:nth-child(2){
    stroke-dashoffset:calc(440 - (400 * 60)/100);
    stroke:#03a9f4;
  }
 /* PROCENT CSS */
  .topSkill .porcentcss{
   position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcentcss svg{
    position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcentcss svg circle{
    width:150px;
    height:150px;
    fill:none;
    stroke-width:10;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:440;
    stroke-dashoffset:440;

  }
  .porcentcss svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcentcss svg circle:nth-child(2){
    stroke-dashoffset:calc(440 - (400 * 75)/100);
    stroke:#03a9f4;
  }
   /* PROCENT CSS */
   .topSkill .porcentphp{
   position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcentphp svg{
    position:relative;
    width:150px;
    height:150px;
  }
  .topSkill .porcentphp svg circle{
    width:150px;
    height:150px;
    fill:none;
    stroke-width:10;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:440;
    stroke-dashoffset:440;

  }
  .porcentphp svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcentphp svg circle:nth-child(2){
    stroke-dashoffset:calc(440 - (400 * 55)/100);
    stroke:#03a9f4;
  }
 .number{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    color:#fff;
  }
 .number h2{
    font-size:40px;
  }
 .number h2 span{
    font-size:24px;
  }


  .text{
    font-weight:700;
    letter-spacing:1px;
    width:30%;
    text-align:center;
    margin:10px;
    padding:5px;

  }
  .js{
    background:#EFD921;
    color:#fff;

  }
  .css{
    background:#1572B6;
    color:#fff;

  }
  .php{
    background:#787CB4;
    color:#fff;

  }
 
  @media screen and (max-width: 800px){


  grid-column: 1 / 2;

   width:90%;
   margin:auto;
   h2{
     font-size:15px;
   }
   .skills{
    width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  }
  .topSkill{
  position:relative;
  background:#03091E;


  width:100px;
  height:100px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  margin:.2rem;
  box-shadow:0 0px 7px 3px rgba(0, 0, 0, 0.2);


  }
  .topSkill:hover {
    background:#022e70;

  }
 .topSkill .porcent{
   display:none;
   position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcent svg{
  
  display:none; 
   position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcent svg circle{
    width:50px;
    height:50px;
    fill:none;
    stroke-width:10;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:220;
    stroke-dashoffset:220;

  }
  .porcent svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcent svg circle:nth-child(2){
    stroke-dashoffset:calc(220 - (220 * 60)/100);
    stroke:#03a9f4;
  }
 /* PROCENT CSS */
  .topSkill .porcentcss{
  display:none; 

   position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcentcss svg{
    display:none;
    position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcentcss svg circle{
    width:50px;
    height:50px;
    fill:none;
    stroke-width:5;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:220;
    stroke-dashoffset:220;

  }
  .porcentcss svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcentcss svg circle:nth-child(2){
    stroke-dashoffset:calc(220 - (220 * 75)/100);
    stroke:#03a9f4;
  }
   /* PROCENT CSS */
   .topSkill .porcentphp{
  display:none; 

   position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcentphp svg{
    display:none;
    position:relative;
    width:50px;
    height:50px;
  }
  .topSkill .porcentphp svg circle{
    width:50px;
    height:50px;
    fill:none;
    stroke-width:5;
    stroke:#000;
    transform:translate(5px, 5px);
    stroke-dasharray:220;
    stroke-dashoffset:220;

  }
  .porcentphp svg circle:nth-child(1){
    stroke-dashoffset:0;
    stroke:#f3f3f3
  }
  .porcentphp svg circle:nth-child(2){
    stroke-dashoffset:calc(220 - (220 * 55)/100);
    stroke:#03a9f4;
  }
 .number{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;

    color:#fff;
  }
 .number h2{
    font-size:20px;
  }
 .number h2 span{
    font-size:10px;
  }


  .text{
    font-weight:700;
    letter-spacing:1px;
    width:80%;
    height:70%;
    text-align:center;
    line-height:55px;
    margin:10px;
    padding:5px;
    font-size:20px;
    border-radius:20px;
  }
  }
`
const SkillInfo = () => {
  return (  
    <SkillInfoStyled>
      <h2 className="titleSkills">SKILLS OF YOUR INTEREST</h2>
      <div className="skills">
      <div className="topSkill">
        <div className="porcent">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle cx="70" cy="70" r="70"></circle>

          </svg>
          <div className="number">
            <h2>60 <span>%</span></h2>
          </div>
        </div>
        <h2 className="text js">JS</h2>
      </div>
      <div className="topSkill">
        <div className="porcentcss">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle className="circle2" cx="70" cy="70" r="70"></circle>

          </svg>
          <div className="number">
            <h2>75 <span>%</span></h2>
          </div>
        </div>
        <h2 className="text css">CSS</h2>
      </div>
      <div className="topSkill">
        <div className="porcentphp">
          <svg>
            <circle cx="70" cy="70" r="70"></circle>
            <circle  cx="70" cy="70" r="70"></circle>

          </svg>
          <div className="number ">
            <h2>50 <span>%</span></h2>
          </div>
        </div>
        <h2 className="text php">PHP</h2>
      </div>
      </div>
    </SkillInfoStyled>
  );
}
 
export default SkillInfo;