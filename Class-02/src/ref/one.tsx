import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const UnsafeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#1c1c1e",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          padding: 16,
        }}
      >
        Header (Bleed under notch!)
      </Text>

      <Text
        style={{
          color: "#aaa",
          padding: 16,
        }}
      >
        This content might be hidden behind the statusbar in dark mode.
      </Text>
    </View>
  );
};

const SafeScreen = () => {
  return (
    <SafeAreaView
      edges={["bottom", "top", "left", "right"]}
      style={{
        flex: 1,
        backgroundColor: "#1c1c1e",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          padding: 16,
        }}
      >
        Header (Safely Below notch!)
      </Text>

      <Text
        style={{
          color: "#aaa",
          padding: 16,
        }}
      >
        This content respects the safe area in all devices.
      </Text>
    </SafeAreaView>
  );
};

const HomeScreen = () => {
  return (
    <>
      <SafeScreen />
      {/* <UnsafeScreen /> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
