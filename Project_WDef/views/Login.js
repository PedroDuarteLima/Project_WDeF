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
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as LocalAuthentication from "expo-local-authentication";

export default function Login({ navigation }) {
  const [display, setDisplay] = useState("none");
  const [user, setUser] = useState("null");
  const [password, setPassword] = useState("null");
  const [login, setLogin] = useState("false");

  useEffect(() => {
    verifyLogin();
  }, []);

  useEffect(() => {
    if (login === true) {
      biometric();
    }
  }, [login]);

  //Verifica se o User já possui um Login
  async function verifyLogin() {
    let response = await AsyncStorage.getItem("userData");
    let json = await JSON.parse(response);
    if (json !== null) {
      setUser(json.name);
      setPassword(json.password);
      setLogin(true);
    }
  }

  //Biometria
  async function biometric() {
    let compatible = await LocalAuthentication.hasHardwareAsync();
    if (compatible) {
      let biometricRecords = await LocalAuthentication.isEnrolledAsync();
      if (!biometricRecords) {
        alert("Biometria não cadastrada");
      } else {
        let result = await LocalAuthentication.authenticateAsync();
        if (result.success) {
          sendForm();
        } else {
          setUser(null);
          setPassword(null);
        }
      }
    }
  }

  //Envio do Formulátio de Login
  async function sendForm() {
    let response = await fetch("http://192.168.1.10:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: user,
        password: password,
      }),
    });
    let json = await response.json();
    if (json === "error") {
      setDisplay("flex");
      setTimeout(() => {
        setDisplay("none");
      }, 5000);
      await AsyncStorage.clear();
    } else {
      await AsyncStorage.setItem("userData", JSON.stringify(json));
      navigation.navigate("AreaRestrita");
    }
  }

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
        <TextInput
          style={css.login__input}
          placeholder="Usuário: "
          onChangeText={(text) => setUser(text)}
        />
        <TextInput
          style={css.login__input}
          placeholder="Senha: "
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity style={css.login__button} onPress={() => sendForm()}>
          <Text style={css.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
