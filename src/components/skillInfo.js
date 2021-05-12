import React from "react";
import styled from "styled-components";

const SkillInfoStyled = styled.div`
  display: grid;

  grid-column: 1 / 3;
  margin-top: 50px;

  background: white;
 .containerSkill{
  display: grid;

    height: 250px;
  width: 100%;

  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 15px;

 }
  .topSills {
    background-color: #03091e;
    place-self: center;
    width: 80%;
    height: 90%;
  }
  .skill {
    text-align: center;
    color: #fff;
  }
  .topSills p {
    text-align: center;
    margin: 5px auto;
    width: 60%;
    height: 35px;
    line-height: 35px;
    font-weight: 700;
    border-radius: 8px;
    font-size: 1rem;
  }
  .js {
    background: yellow;
  }
  .react {
    background: #222222;
    color: #61dafb;
  }
  .redux {
    background: #7248b6;
    color: #fff;
  }
  .php {
    background-color: #7c66f7;
    color: #000;
  }
  .node {
    background-color: #86be00;
    color: #000;
  }
  .express {
    background: #212121;
    color: #2e9ed4;
  }
  .postgresql {
    background: #31648c;
    color: #fff;
  }
  .mysql {
    background: #124c5e;
    color: #e17511;
  }
  .mongo {
    background: #68a037;
    color: #fff;
  }
  .myskills{
    text-align:center;
  }
  @media screen and (max-width: 800px) {
    
    grid-column: 1 / 2;
    width: 100%;
    margin: auto;
 .containerSkill{
  grid-template-columns: repeat(3, 1fr);
    column-gap: 5px;
    row-gap: 5px;
  }
    .topSills {
      background-color: #03091e;
      place-self: center;
      width: 90%;
      height: 80%;
    }
    .topSills p {
      font-size: 12px;
      width: 80%;
    }
    .skill {
      text-align: center;
      color: #fff;
      font-size: 15px;
    }
  }
`;
const SkillInfo = () => {
  return (
      <SkillInfoStyled>
        <h2 className="myskills">MIS HABILIDADES</h2>
        <div className="containerSkill">
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
            <h2 className="skill">BACKEND</h2>
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
        </div>
      </SkillInfoStyled>
  );
};

export default SkillInfo;
