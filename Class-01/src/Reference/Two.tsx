import React, { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

const HomeScreen = () => {
  // const items = Array.from({ length: 200 }, (_, index) => `item ${index + 1}`);
  const items = Array.from({ length: 5 }, (_, index) => `item ${index + 1}`);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        flex: 1,
        backgroundColor: "#0F172A",
      }}
      contentContainerStyle={{
        paddingVertical: 24,
        paddingHorizontal: 18,
        alignItems: "center",
        gap: 14,
      }}
    >
      <View
        style={{
          width: "100%",
          backgroundColor: "#1E293B",
          paddingVertical: 18,
          paddingHorizontal: 20,
          borderRadius: 18,

          // shadow
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.25,
          shadowRadius: 6,
          elevation: 6,

          // border glow feel
          borderWidth: 1,
          borderColor: "rgba(255,255,255,0.08)",
        }}
      >
        {items.map((item, index) => (
          <Text
            key={index}
            style={{
              color: "#F8FAFC",
              fontSize: 18,
              fontWeight: "600",
              letterSpacing: 0.5,
            }}
          >
            {item}
          </Text>
        ))}
      </View>

      <Button
        title="Submit"
        color={"purple"}
        onPress={() => alert("Hello World!")}
      />
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "6c63ff" }}
        thumbColor={"grey"}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
