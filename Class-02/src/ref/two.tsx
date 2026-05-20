import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import {
  useSafeAreaInsets,
  initialWindowMetrics,
} from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  // console.log(insets)
  // console.log(initialWindowMetrics);

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle={"light-content"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
