import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { css } from "../../assets/css/css";
import Icon from "react-native-vector-icons/FontAwesome";
import MenuAreaRestrita from "../../assets/components/MenuAreaRestrita";
import config from "../../config/config.json";

export default function Profile({ navigation }) {
  const [idUser, setIdUser] = useState(null);
  const [senhaAntiga, setSenhaAntiga] = useState(null);
  const [novaSenha, setNovaSenha] = useState(null);
  const [confNovaSenha, setConfNovaSenha] = useState(null);
  const [msg, setMsg] = useState(null);

  useEffect(() => {
    async function getIdUser() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setIdUser(json.id);
    }
    getIdUser();
  });

  async function sendForm() {
    let response = await fetch(`${config.urlRoot}verifyPass`, {
      method: "POST",
      body: JSON.stringify({
        id: idUser,
        senhaAntiga: senhaAntiga,
        novaSenha: novaSenha,
        confNovaSenha: confNovaSenha,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let json = await response.json();
    setMsg(json);
  }

  return (
    <View>
      <MenuAreaRestrita title="Perfil" navigation={navigation} />

      <View>
        <TextInput
          style={css.input__senha}
          placeholder="Senha Antiga"
          placeholderTextColor="#000"
          onChangeText={(text) => setSenhaAntiga(text)}
        />
        <TextInput
          style={css.input__senha}
          placeholder="Nova Senha"
          placeholderTextColor="#000"
          onChangeText={(text) => setNovaSenha(text)}
        />
        <TextInput
          style={css.input__senha}
          placeholder="Confirmação da Nova Senha"
          placeholderTextColor="#000"
          onChangeText={(text) => setConfNovaSenha(text)}
        />
        <Text style={css.text__info}>{msg}</Text>
        <TouchableOpacity
          style={css.confirm__switch}
          onPress={() => sendForm()}
        >
          <Text style={css.text}>Trocar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
