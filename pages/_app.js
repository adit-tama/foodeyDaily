
import App from 'next/app';
import '../styles/bootstrap.css';
import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: 'Roboto Slab', serif;
  }
  
  html {
    padding:0px;
    width:100vw;
    height:100vh;
    box-sizing: border-box;
  }

  body {
    margin:0px;
  }

  a {
    text-decoration:none;
    color:white;
  }

  a:hover{
    text-decoration:none;
    color:white;
    font-weight: 400;
  }

  p {
    font-weight: 100;
    font-size: 12px;
  }

  li {
    font-weight: 100;
    font-size:13px;
  }

  h2 {
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 25px;
    margin: 0rem;
  }

  h1 {
    font-weight: 100;
    font-size: 18px;
    color:white;
    padding:0;
    margin:0;
  }

  h3 {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 25px;
    margin: 0rem;
  }

  input[type=text]{
    width:75%;
    height:30px;
    box-sizing:border-box;
    border:none;
    border-radius: 10px;
    background-color:#6B2F2F;
    padding:0.5rem 1rem;
    margin:0.5rem 0 0.5rem 0;
    font-size:14px;
    color:white;
  }

  input:focus {
    outline: none;
  }

  ::placeholder {
    color:#F83D44;
  }
`

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>  
        <GlobalStyle/>
        <Component {...pageProps} />
      </>
    )
  }
}