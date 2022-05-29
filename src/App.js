import React from "react";
import { ToastContainer } from "react-toastify";

import Main from "./pages/Main";

import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <ToastContainer autoClose={15000}/>
      <Main />
    </>
  );
}
export default App;
