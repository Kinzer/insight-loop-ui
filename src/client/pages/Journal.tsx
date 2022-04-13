import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { CreateButton } from "../components/CreateButton/CreateButton";

const Journal = () => {
  return (
    <div className="flex bg-white-100 font-sans items-center flex-col justify-between h-screen">
      <Header />
      <h2>Journal Entries</h2>
      <div className="flex items-center flex-col pt-10">
        {/* FIX: route to new entry form instead of controlling visibility {createEntry && <JournalEntryForm />} */}
        {/* TODO: refactor to journal entry list instead of <RepoList /> */}
      </div>
      {/* <CreateButton route={"create-journal-entry"} /> */}
      <Footer />
    </div>
  );
};

export default Journal;
