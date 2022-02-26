import React from "react";
import { Text, View, Button } from "react-native";

export default function Home(props) {
  console.log(props);
  return (
    <View>
      <Button
        title="Login"
        onPress={() =>
          props.navigation.navigate("Login", {
            id: 30,
          })
        }
      />
      <Text> Esta é a Home </Text>
    </View>
  );
}
