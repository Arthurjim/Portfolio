import React from "react";
import PhotoAbout from "./photoAbout";
import styled from "styled-components";

const InfoAbout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 24% auto;
  width: 80%;
  margin: 50px auto;
  background: #03091e;

  border-left: 5px solid #afafaf;

  .main_info {
    color: #fff;
  }
  .main_info-div {
    padding: 50px 30px;
  }
  .main_info-div p {
    text-align: left;
    font-size: 22px;
    font-family: 'Roboto Slab', serif;

  }
  .main_info-div span {
    color: var(--letras-azul);
    font-weight: 700;
    text-shadow: 0px 1px 0px rgb(80, 0, 0);
  }

  @media screen and (max-width: 1000px) {
    display: grid;

    width: 90%;

    background: #03091e;
    border-left: 5px solid #afafaf;
    .main_info {
      color: #fff;
      width: 80%;
    }
    .main_info-div {
      width: 100%;
      padding: 10px 30px;
    }
    .main_info-div p {
      width: 100%;

      text-align: center;
      font-size: 18px;

      font-family: 'Roboto Slab', serif;

    }
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 100%;

    grid-template-rows: 1fr 1fr 1fr;

    width: 90%;
  height:750px ;

    background: #03091e;
    border-left: 5px solid #afafaf;
    .main_info {
      color: #fff;
      width: 100%;
      
    }
    .main_info-div {
      width: 90%;
      padding: 10px auto;
    }
    .main_info-div p {
      width: 100%;

      text-align: center;
      font-size: 15px;
      font-family: 'Roboto Slab', serif;

    }
  }
`;
const InfoAboutMe = ({ children }) => {
  return (
    <InfoAbout>
      <PhotoAbout />
      <div className="main_info">
        <div className="main_info-div">
          <p>
            Hola, soy Arturo, Ingeniero en Tecnologías de la Información,
            estudié en la Universidad Tecnológica del Norte de Aguascalientes.<br/>
            Actualmente me desempeño como <span>Front End Developer</span>.<br/>
            Para mi es muy importante nunca dejar de aprender, ya que esto nos
            ayuda a ser mejor persona, trabajar y poder vivir mejor. Me gusta
            crear proyectos que me hagan aprender cosas nuevas y superar las
            expectativas. Actualmente vivo en Zacatecas, pero no tengo problema
            en cambiar de residencia.
          </p>

     
        </div>
      </div>
      {children}
    </InfoAbout>
  );
};

export default InfoAboutMe;
