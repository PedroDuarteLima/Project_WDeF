import React from "react";
import { Text, View } from "react-native";

export default function Login(props) {
  return (
    <View>
      <Text> Este é o Login {props.route.params.id}</Text>
    </View>
  );
}
