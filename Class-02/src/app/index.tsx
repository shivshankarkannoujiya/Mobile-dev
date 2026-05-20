import { StyleSheet, Text, View, useColorScheme, Switch } from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

const THEMES = {
  light: {
    background: "#F3F4F6",
    card: "#FFFFFF",
    text: "#111827",
    subtext: "#6B7280",
    accent: "#2563EB",
  },

  dark: {
    background: "#111827",
    card: "#1F2937",
    text: "#F9FAFB",
    subtext: "#9CA3AF",
    accent: "#60A5FA",
  },
};

const HomeScreen = () => {
  const systemTheme = useColorScheme();

  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemTheme === "dark";

  const theme = isDark ? THEMES.dark : THEMES.light;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: theme.background,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      <View
        style={{
          width: "100%",
          backgroundColor: theme.card,
          padding: 24,
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            fontSize: 28,
            fontWeight: "700",
            color: theme.text,
            marginBottom: 10,
          }}
        >
          useColorScheme 🎨
        </Text>

        <Text
          style={{
            fontSize: 18,
            color: theme.subtext,
            marginBottom: 20,
          }}
        >
          System Theme: {systemTheme}
        </Text>

        {/* Switch Row */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: theme.text,
            }}
          >
            Dark Mode
          </Text>

          <Switch
            value={isDark}
            onValueChange={(value) => setManualDark(value)}
            trackColor={{
              false: "#D1D5DB",
              true: theme.accent,
            }}
            thumbColor={"#FFFFFF"}
          />
        </View>

        {/* Accent Box */}
        <View
          style={{
            backgroundColor: theme.accent,
            paddingVertical: 18,
            borderRadius: 14,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 18,
            }}
          >
            Dynamic Theme Working ✨
          </Text>
        </View>

        {/* Understanding Section */}
        <View
          style={{
            marginTop: 24,
          }}
        >
          <Text
            style={{
              color: theme.text,
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            isDark: {isDark ? "true" : "false"}
          </Text>

          <Text
            style={{
              color: theme.text,
              fontSize: 16,
              marginBottom: 8,
            }}
          >
            Active Background: {theme.background}
          </Text>

          <Text
            style={{
              color: theme.text,
              fontSize: 16,
            }}
          >
            Active Accent: {theme.accent}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
