import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/screens/HomeScreen";
import DetailScreen from "./src/screens/DetailScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

// TODO: how to send initial value to the route
const RootStack = createNativeStackNavigator({
  screens: {
    Home: HomeScreen,
    Details: DetailScreen,
    Profile: ProfileScreen,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
