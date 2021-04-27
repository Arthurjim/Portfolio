import React from 'react';
import styled from 'styled-components';
import ProjecstList from '../components/projectsList';

const ProjectStyled = styled.div`

      width: 100%;
      height: 500px;
  
   
   .title{
      color: #fff;
      text-align: center;
      font-size: 25px;
      padding-top:30px;;
   }
   .title::first-letter{
      color: var( --letras-azul);
      text-shadow: 0px 2px 0px rgb(190, 4, 4);
      font-size: 27px;
   
   }
   `
const Projects = () => {
  return (  
    <ProjectStyled>
      <h3 class="title" >PROJECTS</h3>
      <ProjecstList/>
    </ProjectStyled>
  );
}
 
export default Projects;