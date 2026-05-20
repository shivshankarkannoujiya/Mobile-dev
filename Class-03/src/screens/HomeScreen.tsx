import { StyleSheet, Text, View } from "react-native";
import { Button } from "@react-navigation/elements";
import React from "react";
import { Link, useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>HomeScreen</Text>
      {/* <Button screen={"Details"}>Go to details</Button> */}
      {/* <Link screen={"Details"}>Go to details</Link> */}
          <Button onPress={() => navigation.navigate("Details", {username: "abhi"})}>
        Go to details
      </Button>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
