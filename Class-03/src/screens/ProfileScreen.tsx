import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Text>ProfileScreen</Text>
      {/* <Button title="Go Back" onPress={() => navigation.popTo("Home")} /> */}
      {/* <Button title="Go Back" onPress={() => navigation.popToTop("Home")} /> */}
      <Button title="Go Back" onPress={() => navigation.replace("Home")} />
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

/**
 1. navigate(""): goto screen by their name
 2. goBack(): goto previous screen
 3. push(""): Always add new instance
 4. replace(""): Replace current screen <User can't goto previous screen while back>
 5. popToTop(): go back to first screen
 6. popTo(""):  
 */
