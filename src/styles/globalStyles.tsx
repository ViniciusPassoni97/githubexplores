import {createGlobalStyle} from 'styled-components';
import Logo from '../assets/Logo.svg';

export const GlobalStyle = createGlobalStyle`
    *{
      margin:0;
      padding:0;
      outline:0;
      box-sizing:border-box;
    }
    body{
       background:#F0F0F5 url(${Logo}) no-repeat 70% top;
    }
    input,button{
      font: 16px Roboto,sans-serif;
    } 
    #root{
      max-width:960px;
      margin:auto;
      padding: 40px 60px
    }
    button {
      cursor: pointer;
    }
`;