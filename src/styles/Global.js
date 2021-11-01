import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  *,
  *:before,
  &:after {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;

  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800&display=swap');

  html {
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    scroll-behavior: smooth;
  }

  html, 
body {
    overflow-x: hidden; 
}

  #gatsby-focus-wrapper {
    width: 100vw;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #070879;
    line-height: 1.2em;

  }

  p {
    color: #9f9fb9;
    line-height: 1.15em;
    font-size: 1.125rem;
    strong {
      font-weight: 600;
      line-height: 1.5em;
    }
  }

  h2 {
    font-size: 3.5rem;
  }

  .button {
    background-color: #fe7062;
    border: none;
    outline: none;
    border-radius: 0.35rem;
    color: #fff;
    font-size: 0.875rem;
    text-transform: uppercase;
    padding: 0.75rem 1.5rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    position: relative;
    z-index: 4;
    text-decoration: none;
    &:hover {
      background-color: #3f5df4;
    }
  }

  @media (max-width: 1399px) {
    h2 {
      font-size: 3rem;
    }
  }

  @media(max-width: 1199px) {
    h2 {
      font-size: 2.75rem;
    }
  }

  @media(max-width: 991px) {
    h2 {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

@media(max-width: 767px) {
  body {
    overflow-x: hidden;
  }
  h2 {
      font-size: 2.25rem;
    }
    p {
      margin-bottom: 1rem;
    }
}

@media(max-width: 575px) {
  h2 {
      font-size: 2rem;
    }
    
   
}

`

export default GlobalStyles
