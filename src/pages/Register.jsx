import React, { useState, /*useEffect*/ } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from "../assets/logo.svg"
function Register() {
const [values, setValues] = useState({
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
});

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("form");
  };
  const handleChange = (event) => {
    setValues ({...values,[event.target.name]:event.target.value});
  };
  return (
    <>
      <FormContainer>
        <form onSubmit = {(event) => handleSubmit(event)}>
          <div className="brand">
            <h1>dude!</h1>
            <img src={Logo} alt="Logo" />
          </div>
          <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={(e) => handleChange(e)}
          />
          <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => handleChange(e)}
          /><input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => handleChange(e)}
          /><input
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
          />
          <button type="submit">Create User</button>
          <span>
            Already have an account ? <Link to ="/login">Login</Link></span>
        </form>
      </FormContainer>
    </>
  );
}

const FormContainer = styled.div`
  height: 105vh;
  width: 105vw;
  margin: -10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #181818;
  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: center;
    img {
      height: 3.5rem;
    }
    h1 {
      color: #1DB158;
      text-transform: uppercase;
    }      
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    align-items: center;
    background-color: #29372F;
    border-radius: 1.5rem;
    padding: 2.5rem 4rem;
    input {
      background-color: #282828;
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      color: #DDDDDD;
      width: 100%;
      font-size: 1rem;
      &:focus {
        border: 0.1rem solid #1DB158;
        outline: none;
        background-color: #282828
      }
      &:hover {
        border: 0.1rem solid #1DB158;
      }
    }
  
    button {
      background-color: #3D684D;
      color: #DDDDDD;
      padding: 1rem;
      width: 112%;
      border: none;
      font-weight: bold;
      font-size: 1rem;
      text-transform: uppercase;
      cursor: pointer;
      border-radius: 0.5rem;
      color: #DDDDDD;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #1DB158;
        width: 113%;
      }
    }
    span {
      color: #DDDDDD;
      a {
        color: #1DB158;
        text-decoration: none;
        font-weight: bold;
        &:hover {
          color: #3D684D;
          width: 113%;
        }
      }
    }
  }
  `;

export default Register