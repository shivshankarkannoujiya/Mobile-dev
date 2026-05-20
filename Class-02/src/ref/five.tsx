import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={flatStyle}>Flattend Style !</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styleA = StyleSheet.create({ text: { color: "pink", fontSize: 16 } });
const styleB = StyleSheet.create({
  text: { fontSize: 24, fontWeight: "bold" },
});
const flatStyle = StyleSheet.flatten([styleA.text, styleB.text]);
