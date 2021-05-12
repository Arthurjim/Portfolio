import React from "react";
import styled from "styled-components";

const ProjectListStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  .top-projects__one {
    width: 85%;
    font-size: 15px;
    height: 350px;
    margin: 10px auto;
    display: grid;
    grid-template-columns: 50% 40% auto;
    color: rgb(214, 214, 214);
    border-radius: 20px 0;
    border: 3px solid rgb(170, 170, 170);
    background:#001d49;
  }
  .top-projects__one:hover {
    background: rgba(10, 10, 10, 0.82);
    border: 3px solid var(--letras-azul);
    transition: all 1s;

    img {
      width: 100%;
    }
  }
  .top-projects-info {
    width: 100%;
    height: 100%;
    padding: 5px;
    display: inline-block;
  }
  .top-projects__one h3 {
    font-size: 25px;
    color: var(--letras-azul);
    text-shadow: 0px 2px 0px rgb(80, 0, 0);
    border-bottom: 1px solid rgb(184, 184, 184);
    text-align: center;
    width: 80%;
    margin: auto;
  }
  .top-projects__one p {
    width: 90%;
    height: 100%;
    margin: 25px auto;
  }
  /* */
  .top-projects-img__one,
  .top-projects-img__two,
  .top-projects-img__three {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    object-fit: cover;
    overflow: hidden;
  }

  .top-projects-img__one img {
    object-fit: contain;
    width: 90%;
    height: 90%;
    margin: auto;
    border-radius: 10px;
  }

  .top-projects-img__two img {
    width: 90%;
    margin: auto;
    border-radius: 10px;
  }
  .top-projects-img__three img {
    width: 90%;
    margin: auto;

    border-radius: 10px;
  }
  i {
    font-size: 35px;
    margin: 20px;
  }
  a{
    text-decoration:none;
    
  }
  a:visited {
  color: white;
}
  @media screen and (max-width: 700px) {
    .top-projects__one {
      width: 85%;
      font-size: 12px;
      height: 350px;
      margin: 10px auto;
      display: grid;
      grid-template-columns: none;
      grid-template-rows: 50% auto 10%;

      color: rgb(214, 214, 214);
      border-radius: 20px 0;
      border: 3px solid rgb(102, 102, 102);
    }
    .top-projects-img__one img {
      object-fit: contain;
      height: 90%;
      margin: auto;
      border-radius: 10px;
    }

    .top-projects-img__two img {
      object-fit: contain;
      width: 90%;

      height: 100%;

      margin: auto;
      border-radius: 10px;
    }
    .top-projects-img__three img {
      object-fit: contain;

      height: 100%;
      margin: auto;

      border-radius: 10px;
    }
    .links {
      width: 100%;
      text-align: center;
    }
    i {
      font-size: 15px;
      margin: 5px 20px;
    }
  }
`;
const ProjecstList = () => {
  return (
    <ProjectListStyled>
      <div class="top-projects__one">
        <div class="top-projects-info">
          <h3>Ecommerce</h3>
          <p>Aplicacion web creada con React Hooks. Integra herramientas como
          Strapi, PayPal y Google Maps para desarrollo de una tienda online con
          carrito de compras.</p>
        </div>
        <div class="top-projects-img__one">
          <img src='https://i.ibb.co/CHv4jyX/ecommerce2.png' alt="" />

          <img src='https://i.ibb.co/6yjL2bh/ecommerce.png' alt="" />
        </div>
        <div className="links">
        <a href="https://github.com/Arthurjim/Zoopply-Merch"><i class="fab fa-github"> </i></a>
          

        </div>
      </div>
      <div class="top-projects__one">
        <div class="top-projects-info">
          <h3>Register</h3>
          <p>
            Proyecto creado con React, Redux y ElectronJS <br/>
        Creado para administrar el flujo de registros en un gimnasio, registrar hora de entrada y fecha de culimnación</p>
        </div>

        <div class="top-projects-img__two">
          <img src='https://i.ibb.co/s3s2Zdn/register-login.png' alt="" />
        </div>
        <div className="links">
          <i class="fab fa-github"></i>

        </div>
      </div>
      <div class="top-projects__one">
        <div class="top-projects-info">
          <h3>Point Of Sale</h3>
          <p>
            Proyecto creado para administrar las ventas e inventario de un establecimiento. <br/>
            Utilizando el stack PERN. (PostgreSQL, ExpressJS, React, NodeJs)
          </p>
        </div>

        <div class="top-projects-img__three">
          <img src='https://i.ibb.co/HDCjBrh/point-project-home.png' alt="" />
        </div>
        <div className="links">
          <a href="https://github.com/Arthurjim/Punto-De-Ventas">
          <i class="fab fa-github"></i>

          </a>

        </div>
      </div>
    </ProjectListStyled>
  );
};

export default ProjecstList;
