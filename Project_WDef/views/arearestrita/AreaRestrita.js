import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function AreaRestrita() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);

  return (
    <View>
      <Text> Esta é a Área Restrita</Text>
      <Text> Seja bem vindo {user}</Text>
    </View>
  );
}
