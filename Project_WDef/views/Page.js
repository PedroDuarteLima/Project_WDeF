import React from "react";
import { View, Text } from "react-native";
import { css } from "../assets/css/css";

export default function Page(props) {
  return (
    <View style={css.textPage}>
      <Text style={css.textColorWhite}>
        O Nome da Empresa é {props.empresa} e o seu Dono é o {props.name}.
        Comprou o produto {props.produto} na seguinte quantidade{" "}
        {props.quantidade}
      </Text>
    </View>
  );
}
