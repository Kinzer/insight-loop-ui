import React from "react";
import { TabNavigator } from "./components/TabNavigator/TabNavigator";
import { ContextWrapper } from "./Context";

const appRoutes = ["journal", "insight", "analytics", "profile", "settings"];

export const App = () => {
  return (
    <ContextWrapper>
      <h2>Tim says, Haaeeeellllloooowwww</h2>
      {/* TODO: Remove only settings from approutes to pass as tabs */}
      <TabNavigator tabs={appRoutes} />
    </ContextWrapper>
  );
};

export default App;
