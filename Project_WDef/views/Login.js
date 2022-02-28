import React from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import { css } from "../assets/css/css";
import { useEffect, useState } from "react";

export default function Login() {
  const [display, setDisplay] = useState("none");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={[css.container, css.bg]}
    >
      <View style={css.login__icon}>
        <Image source={require("../assets/img/icon.png")} />
      </View>

      <View>
        <Text style={css.login__msg(display)}>Usuário ou Senha inválidos</Text>
      </View>

      <View style={css.login__form}>
        <TextInput style={css.login__input} placeholder="Usuário: " />
        <TextInput
          style={css.login__input}
          placeholder="Senha: "
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={css.login__button}
          onPress={() => setDisplay("flex")}
        >
          <Text style={css.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
