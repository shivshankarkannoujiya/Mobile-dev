import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const USERS = [
  {
    id: 1,
    name: "Abhishek Kumar",
    role: "Frontend Developer",
  },
  {
    id: 2,
    name: "Rahul Sharma",
    role: "Backend Developer",
  },
  {
    id: 3,
    name: "Priya Singh",
    role: "UI/UX Designer",
  },
  {
    id: 4,
    name: "Aman Verma",
    role: "Mobile App Developer",
  },
  {
    id: 5,
    name: "Sneha Patel",
    role: "Full Stack Developer",
  },
  {
    id: 6,
    name: "Karan Mehta",
    role: "DevOps Engineer",
  },
  {
    id: 7,
    name: "Neha Gupta",
    role: "Software Engineer",
  },
  {
    id: 8,
    name: "Arjun Yadav",
    role: "React Native Developer",
  },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={USERS}
      //   horizontal
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16, backgroundColor: "green" }}
      renderItem={({ item }) => (
        <View
          style={{
            backgroundColor: "#1E293B",
            padding: 18,
            borderRadius: 20,
            marginBottom: 16,

            flexDirection: "row",
            alignItems: "center",

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5,
            elevation: 5,

            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.05)",
          }}
        >
          {/* Avatar */}
          <View
            style={{
              width: 55,
              height: 55,
              borderRadius: 999,
              backgroundColor: "#7C3AED",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 14,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                fontWeight: "bold",
              }}
            >
              {item.name.charAt(0)}
            </Text>
          </View>

          {/* User Info */}
          <View>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "700",
              }}
            >
              {item.name}
            </Text>

            <Text
              style={{
                color: "#CBD5E1",
                marginTop: 4,
                fontSize: 14,
              }}
            >
              {item.role}
            </Text>
          </View>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View
          style={{
            height: 1,
            backgroundColor: "rgba(255,255,255,0.08)",
            marginVertical: 10,
          }}
        />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
