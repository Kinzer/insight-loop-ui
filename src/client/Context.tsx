import React, { useContext, useState } from "react";

export interface Context {
  journalEntryValue: string;
  setJournalEntryValue: (val: string) => void;
  journalEntryHistory: string[];
}
const defaultVal = {
  journalEntryValue: "",
  setJournalEntryValue: () => {},
  journalEntryHistory: [],
} as Context;

const context = React.createContext(defaultVal);

const { Provider } = context;

export const ContextWrapper = ({ children }: { children: any }) => {
  const [journalEntryValue, setJournalEntryValue] = useState(
    defaultVal.journalEntryValue
  );
  const [journalEntryHistory, setJournalEntryHistory] = useState<string[]>([]);

  React.useEffect(() => {
    if (!journalEntryHistory) {
      // TODO check if journalEntryHistory is empty
      const localJournalEntryHistory = localStorage.getItem(
        "journalEntryHistory"
      );
      if (localJournalEntryHistory) {
        setJournalEntryHistory(JSON.parse(localJournalEntryHistory));
      }
    }

    const updatedjournalEntryHistory = [
      ...journalEntryHistory,
      journalEntryValue,
    ];

    setJournalEntryHistory(updatedjournalEntryHistory);
  }, [journalEntryValue]);

  return (
    <Provider
      value={{
        journalEntryValue,
        setJournalEntryValue: setJournalEntryValue,
        journalEntryHistory,
      }}
    >
      {children}
    </Provider>
  );
};

export const useAppContext = () => useContext(context);
