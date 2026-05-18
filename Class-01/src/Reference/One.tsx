import { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={4}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eos error
        fugiat blanditiis adipisci aliquid fugit vitae rem, aut inventore
        nostrum pariatur modi iure, excepturi obcaecati eum, incidunt unde?
        Alias rem, esse officiis magnam quia voluptas! Fuga ipsum pariatur natus
        eaque obcaecati numquam, laborum architecto, dolorem minima incidunt,
        corrupti provident.
      </Text>

      {/* Remote Image */}
      <Image
        source={{
          uri: "https://www.chaicode.com/assets/white-1-CYshgcRl.webp",
        }}
        width={200}
        height={200}
      />

      {/* Local Image  */}
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("@/assets/images/cert.webp")}
          style={{
            marginTop: 10,
            height: 200,
            width: 300,
          }}
          blurRadius={6}
        />
      </View> */}

      <View
        style={{
          paddingHorizontal: 20,
          marginTop: 20,
        }}
      >
        <TextInput
          placeholder="Enter Your name..."
          value={name}
          onChangeText={setName}
          placeholderTextColor={"#aaa"}
          style={{
            width: "100%",
            height: 55,
            backgroundColor: "#fff",
            borderWidth: 1,
            borderColor: "#E5E7EB",
            borderRadius: 14,
            paddingHorizontal: 16,
            fontSize: 16,
            color: "#111827",
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.08,
            shadowRadius: 4,
            elevation: 3, // Android shadow
          }}
        />
      </View>

      <Pressable
        onPress={() => alert("Submitted !")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#27769d" : "#6a1ea4",
          paddingVertical: 16,
          borderRadius: 14,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,

          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 4,
        })}
        hitSlop={{
          top: 20,
          bottom: 20,
          left: 10,
          right: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
          }}
        >
          Submit
        </Text>
      </Pressable>
    </View>
  );
}
