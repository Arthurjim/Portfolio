import React, { useState,useRef} from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
const FormContactStyled = styled.form`
  width: 70%;
  height: 500px;
  background:#001d49;
  margin: 50px auto;
  border: 5px solid #c1bebe;
  border-radius: 10px;
  /* clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 39% 74%, 12% 98%, 16% 75%, 0% 75%); */
  h2 {
    color: white;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  .form {
    text-align: center;
    width: 100%;
    height: 90%;
    color: white;
    display: grid;
    grid-template-columns: auto;
  }

  .imgContact {
    width: 100%;
    height: 100%;
    text-align: center;
    display: flex;
    object-fit: cover;
    overflow: hidden;
  }
  img {
    object-fit: cover;
    width: 90%;
    height: 100%;
    margin: auto;
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 5px 2px rgba(207, 207, 207, 1);
    -moz-box-shadow: 0px 0px 5px 2px rgba(207, 207, 207, 1);
    box-shadow: 0px 0px 5px 2px rgba(207, 207, 207, 1);
  }
  .name {
    display: block;
    margin-top: 40px;
  }
  .name input {
    display: block;
    margin: auto;
    width: 250px;
    height: 30px;
  }

  .message {
    display: block;
    margin-top: 40px;
  }
  .message input {
    display: block;
    margin: auto;
    width: 400px;
    height: 85px;
  }
  input {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.349);
    color: white;
  }
  input::placeholder {
    text-align: center;
  }
  button{
    background:#0084D0;
    margin-top:10px;
    width:150px;
    height:45px;
    border-radius:10px;
    font-size:15px;
    text-transform:uppercase;
    font-weight:700;
    border:none;
  }
  button:active{
    background:#1AABFF;
  }
  .messageCorrect{
    width:80%;
    height:40px;
    line-height:30px;
    margin:auto;
    text-align:center;
    border-radius:5px;
    font-size:15px;
    background-color:rgb(68, 151, 43);
    color:#fff;
  }
  .messageError{
    width:80%;

    height:40px;
    line-height:30px;
    margin:auto;
    background-color: rgb(228, 23, 23);
    color:#fff;
    text-align:center;
    border-radius:5px;
    font-size:15px;
  }
  @media screen and (max-width: 800px) {
    width: 90%;
    height: 550px;
    margin: 50px auto;
    border-radius: 10px;

    .form {
      text-align: center;
      width: 100%;
      height: 90%;
      color: white;
      display: grid;
      grid-template-columns: none;
      grid-template-rows: 20% auto;
    }
   
    .name {
      display: block;
      margin-top: 40px;
    }
    .name input {
      display: block;
      margin: auto;
      width: 250px;
      height: 30px;
    }
    .message {
      display: block;
      margin-top: 40px;
    }
    .message input {
      display: block;
      margin: auto;
      width: 70%;
      height: 105px;
    }
  }
`;
const FormContact = () => {
  const frmContact = { userEmail: "", emailTitle: "", emailDetails: "" };
  const inputEmial = useRef(null)
  const inputTitle = useRef(null)
  const inputDetails = useRef(null)
  const [form, setForm] = useState(frmContact);
  const [MessageSuccessfull, setMessageSuccessfull] = useState(false);
  const [MessageError, setMessageError] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const functionMessageSuccess =()=>{
    setMessageSuccessfull(true)
    setTimeout(()=>{
      setMessageSuccessfull(false)

    },3500)
  }
  const functionMessageError =()=>{
    setMessageError(true)
    setTimeout(()=>{
      setMessageError(false)

    },3500)
  }
  const clearInputs =()=>{
    inputTitle.current.value=''
    inputEmial.current.value=''
    inputDetails.current.value=''

  }
  const sentEmail = (e) => {
    e.preventDefault();
    
    emailjs
      .send(
        `service_o5ovutc`,
        `template_h9o5jp9`,
        form,
        'user_cOQbqhzUo87QZ9quyycFi'
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setForm(frmContact)
          functionMessageSuccess()
          clearInputs()
        },
        (err) => {
          functionMessageError()
          clearInputs()
        }
      );
  };
  return (
    <FormContactStyled onSubmit={sentEmail}>
      <h2>CONTÁCTAME!</h2>
      {MessageSuccessfull ? <h3 className="messageCorrect">Correo enviado correctamente</h3> : ''}
      {MessageError ? <h3 className="messageError">¡Ohps! Algo a fallado</h3> : ''}

      <div className="form">
       
        <div>
          <label className="name">
            TU NOMBRE:
            <input
              type="text"
              name="emailTitle"
              onChange={handleChange}
              placeholder="Name"
              autoComplete="new-password"
              
              required
              ref={inputTitle}
            />
          </label>
          <label className="name" htmlFor="">
            TU EMAIL:
            <input
              type="email"
              name="userEmail"
              onChange={handleChange}
              placeholder="Email"
              autoComplete="new-password"
              required
              ref={inputEmial}

            />
          </label>

          <label className="message">
            ESCRIBE TU MENSAJE AQUÍ
            <input
              type="text"
              onChange={handleChange}
              name="emailDetails"
              placeholder="message"
              autoComplete="new-password"
              required
              ref={inputDetails}

            />
          </label>
        <button type="submit" >Enviar</button>
        </div>
      </div>
    </FormContactStyled>
  );
};

export default FormContact;
