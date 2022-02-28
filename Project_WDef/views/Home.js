import React from "react";
import { Text, View, Button, TouchableOpacity, Image } from "react-native";
import { css } from "../assets/css/css";

export default function Home(props) {
  console.log(props);
  return (
    <View style={css.container2}>
      <TouchableOpacity
        style={css.button__home}
        onPress={() => props.navigation.navigate("Login")}
      >
        <Image source={require("../assets/img/buttonLogin.png")} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => props.navigation.navigate("Rastreio")}>
        <Image source={require("../assets/img/buttonRastreio.png")} />
      </TouchableOpacity>
    </View>
  );
}
