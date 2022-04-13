import React from "react";

export const TabNavigator = (props: { current?: string; tabs: string[] }) => {
  return (
    <div className="flex flex-col">
      <TabList tabs={props.tabs} />
      <TabNavigatorBar tabs={props.tabs} />
    </div>
  );
};

export const TabNavigatorBar = (props: { tabs: string[] }) => {
  return <div></div>;
};

export const TabList = (props: { tabs: string[] }) => {
  return <div className="flex flex-col"></div>;
};
