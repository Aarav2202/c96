import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "../navigation/TabNavigator";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
