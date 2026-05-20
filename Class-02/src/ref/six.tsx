import React from "react";
import {
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  Pressable,
  ScrollView,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

const HomeScreen = () => {
  const { height, width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isLandscape = width > height;

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <ScrollView
      style={{
        flex: 1,
        padding: 16,
        backgroundColor: "#F3F4F6",
      }}
    >
      {/* Heading */}
      <Text
        style={{
          fontSize: width * 0.06,
          fontWeight: "700",
          marginBottom: 20,
        }}
      >
        Responsive Text 📱
      </Text>

      {/* Live Dimensions */}
      <View
        style={{
          backgroundColor: "#111827",
          padding: 20,
          borderRadius: 16,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 12,
          }}
        >
          Live Screen Info
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginBottom: 6,
          }}
        >
          Width: {Math.round(width)} px
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginBottom: 6,
          }}
        >
          Height: {Math.round(height)} px
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
            marginBottom: 6,
          }}
        >
          Device: {isTablet ? "Tablet" : "Mobile"}
        </Text>

        <Text
          style={{
            color: "white",
            fontSize: 16,
          }}
        >
          Orientation: {isLandscape ? "Landscape 🌄" : "Portrait 📱"}
        </Text>
      </View>

      {/* Responsive Cards */}
      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: isTablet ? width * 0.44 : width - 32,
            backgroundColor: "#F9A8D4",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: width * 0.045,
              fontWeight: "700",
            }}
          >
            Card 1
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: "#333",
            }}
          >
            Width changes based on screen size.
          </Text>
        </View>

        <View
          style={{
            width: isTablet ? width * 0.44 : width - 32,
            backgroundColor: "#93C5FD",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: width * 0.045,
              fontWeight: "700",
            }}
          >
            Card 2
          </Text>

          <Text
            style={{
              marginTop: 8,
              color: "#333",
            }}
          >
            Layout switches from column → row on tablet.
          </Text>
        </View>
      </View>

      {/* Practical Responsive Box */}
      <View
        style={{
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            marginBottom: 12,
          }}
        >
          Practical Width Example 👇
        </Text>

        <View
          style={{
            width: width * 0.8,
            height: height * 0.12,
            backgroundColor: "#34D399",
            borderRadius: 16,
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: width * 0.04,
            }}
          >
            width = 80% of screen
          </Text>
        </View>
      </View>

      {/* Orientation Buttons */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          gap: 12,
        }}
      >
        <Pressable
          onPress={lockLandscape}
          style={{
            flex: 1,
            backgroundColor: "#111827",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Landscape
          </Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#2563EB",
            paddingVertical: 14,
            borderRadius: 12,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "700",
            }}
          >
            Portrait
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
