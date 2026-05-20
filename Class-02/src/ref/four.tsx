import React from "react";
import {
  StyleSheet,
  Text,
  View,
  type StyleProp,
  type ViewStyle,
} from "react-native";

const HomeScreen = () => {
  const isActive = true;

  const buttonStyle: StyleProp<ViewStyle> = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null,
  );

  return (
    <View style={styles.container}>
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Compose Style</Text>
      </View>
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },

  activeButton: {
    backgroundColor: "#6C63FF",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
