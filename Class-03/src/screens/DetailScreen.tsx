import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const { username } = route.params;
  return (
    <View>
      <Text>DetailScreen: {username}</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate("Profile")}
      />
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});
