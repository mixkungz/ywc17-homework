import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'TATSanaSuksa';
    src: url(${require('../../static/fonts/TATSanaSuksa-Regular.woff2')}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'TATSanaChon';
    src: url(${require('../../static/fonts/TATSanaChon-Bold.woff2')}) format('woff2');
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'TATSanaChon';
    src: url(${require('../../static/fonts/TATSanaChon-Regular.woff2')}) format('woff2');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'TATSanaSuksa', sans-serif;
    color: #333;
  }

  a {
    &:hover {
      text-decoration: none;
    }
  }

  .navbar-toggler {
    background: none;
    border: none;

    &:active, &:focus {
      outline: 0;
    }
    
    .icon-bar {
      display: block;
      width: 30px;
      height: 3px;
      border-radius: 1px;
      margin: 6px 0 6px 0;
      transition: all 0.2s;
      background: #333333;
      
      &:nth-of-type(1) {
        transform: rotate(45deg);
        transform-origin: 4% 50%
      }
      
      &:nth-of-type(2) {
        opacity: 0;
        filter: alpha(opacity=0);
      }
      
      &:nth-of-type(3) {
        transform: rotate(-45deg);
        transform-origin: 10% 90%;
      }
    }
  
    &.collapsed {
      .icon-bar {
        &:nth-of-type(1) {
          transform: rotate(0);
        }
        &:nth-of-type(2) {
          opacity: 1;
          filter: alpha(opacity=100);
        }
        &:nth-of-type(3) {
          transform: rotate(0);
        }
      }
    }
  }
`
