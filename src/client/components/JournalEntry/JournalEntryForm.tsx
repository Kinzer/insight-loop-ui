import React from "react";
import { useAppContext } from "../../Context";

export const JournalEntryForm = (): JSX.Element => {
  const { journalEntryValue, setJournalEntryValue } = useAppContext();
  const journalEntryRef = React.useRef<HTMLInputElement>(null);

  const updatejournalEntryValue = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.debug("updatejournalEntryValue", journalEntryRef.current?.value);
    setJournalEntryValue(journalEntryRef.current?.value ?? "");
  };

  return (
    <div className="p-2">
      <h3>Create Journal Entry</h3>
      <input
        ref={journalEntryRef}
        defaultValue={journalEntryValue}
        placeholder={"journalEntry repos"}
        style={{ background: "#8080802e" }}
        className="focus:ring-indigo-500 focus:border-indigo-500 block w-fit text-2xl border-gray-300 rounded-md p-2"
      />
      <button
        onClick={(e) => updatejournalEntryValue(e)}
        className="bg-gray-300 text-gray-800 rounded-md p-2"
      >
        journalEntry
      </button>
    </div>
  );
};
