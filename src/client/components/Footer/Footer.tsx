import React from "react";

export const Footer = () => {
  return (
    <footer className={"justify-center items-center"}>
      &copy; {new Date().getFullYear()} -{" "}
      <a href={"https://timothykinzer.com"}>Amacool LLC</a>
    </footer>
  );
};
