import React from "react";
import PhotoAbout from "./photoAbout";
import styled from "styled-components";

const InfoAbout = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 24% auto;
  width: 80%;
  margin: 50px auto;
  background: #001d49;

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
    font-family: "Roboto Slab", serif;
  }
  .main_info-div span {
    color: var(--letras-azul);
    font-weight: 700;
    text-shadow: 0px 1px 0px rgb(80, 0, 0);
  }

  @media screen and (max-width: 1000px) {
    display: grid;

    width: 90%;

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

      font-family: "Roboto Slab", serif;
    }
  }
  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 100%;

    grid-template-rows: 1fr 1fr 1fr;

    width: 90%;
    height: 750px;

    border-left: 5px solid #afafaf;
    .main_info {
      color: #fff;
      width: 100%;
    }
    .main_info-div {
      width: 90%;
      padding: 13px;
    }
    .main_info-div p {
      width: 100%;

      text-align: left;
      font-size: 15px;
      font-family: "Roboto Slab", serif;
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
            Hola, mi nombre es Arturo, Ingeniero en Tecnologías de la
            Información, graduado de la Universidad Tecnológica del Norte de
            Aguascalientes. <br/>
            Para mí es muy importante el superarse constantemente, trabajar día con día para llegar a ser el mejor
            trabajador, mejor persona y siempre ser la mejor versión de mí.<br/>
            Actualmente me desempeño como <span>frontend Developer</span>, me apasiona
            desarrollar sitios web, interactivos y superar las expectativas del
            cliente.
          </p>
        </div>
      </div>
      {children}
    </InfoAbout>
  );
};

export default InfoAboutMe;
