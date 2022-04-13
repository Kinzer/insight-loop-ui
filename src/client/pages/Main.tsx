import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";

const Main = (props: React.PropsWithChildren<{ title?: string }>) => {
  const { title, children } = props;
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Main;
