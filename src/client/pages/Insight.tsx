import React from "react";
import { Header } from "../components/Header/Header";
import { CreateButton } from "../components/CreateButton/CreateButton";

const Insight = () => {
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <Header />
      <div className="flex items-center flex-col pt-10">
        {/* TODO: refactor to insight list */}
      </div>
      <CreateButton route={"create-insight-entry"} />
    </div>
  );
};

export default Insight;
