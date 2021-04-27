import React from 'react';
import code  from '../images/coding.png'
import styled from 'styled-components'

const FormContactStyled = styled.form`
width: 70%;
height:400px;
background: rgba(10, 10, 10, 0.582);
margin: 50px auto;
border:7px solid #C1BEBE;
border-radius:10px;
/* clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 39% 74%, 12% 98%, 16% 75%, 0% 75%); */
h2{
  color:white;
  text-align:center;
  margin:0;
  padding:0;
}
.form{
  text-align:center;
  width: 100%;
height:90%;
color:white;
display:grid;
grid-template-columns:40% auto;
}

.imgContact{
  width: 100%;
   height: 100%;
   text-align: center;
   display: flex;
   object-fit: cover;
overflow: hidden;
}
img{
  object-fit: cover;
   width:90%;
   height:90%;
   margin: auto;
  border-radius:10px;
  -webkit-box-shadow: 0px 0px 5px 2px rgba(207,207,207,1);
-moz-box-shadow: 0px 0px 5px 2px rgba(207,207,207,1);
box-shadow: 0px 0px 5px 2px rgba(207,207,207,1);
}
.name{
  display:block;
  margin-top:40px;
}
.name input{
  display:block;
  margin:auto;
  width:250px;
  height:30px;
}
.message{
  display:block;
  margin-top:40px;

}
.message input{
  display:block;
  margin:auto;
  width:400px;
  height:85px;
}
input{
  border-radius:10px;
  background:rgba(0, 0, 0, 0.349);
  color:white;
}
input::placeholder{
  text-align:center;
}
`
const FormContact = () => {
  return (  
    <FormContactStyled>
      <h2>CONTACT WITH ME</h2>
      <div className="form">
        <div className="imgContact">
        <img src='https://www.desktopbackground.org/download/360x640/2015/02/05/897937_programmer-wallpapers-wallpapers-zone_1600x901_h.png' alt="img"/>

        </div>
        <div>
        <label className="name">
          YOUR NAME:
          <input type="text" name="name" placeholder="Name"/>
        </label>
        <label  className="name" htmlFor="">
          YOUR EMAIL:
          <input type="text" name="email" placeholder="email"/>
        </label>

        <label  className="message">
          LEAVE HERE YOUR MESSAGE
          <input type="text" placeholder="message"/>
        </label>
        </div>
      </div>

    </FormContactStyled>
  );
}
 
export default FormContact;