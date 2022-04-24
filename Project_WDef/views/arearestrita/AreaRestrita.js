import React, { useState, useEffect } from "react";
import { Text, View, BackHandler, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Profile, Cadastro, Edicao } from "../index";
import { css } from "../../assets/css/css";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialBottomTabNavigator();

export default function AreaRestrita({ navigation }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      let response = await AsyncStorage.getItem("userData");
      let json = JSON.parse(response);
      setUser(json.name);
    }
    getUser();
  }, []);

  //Este BackHandler só está funcional para Android
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta", "Deseja mesmo sair da aplicação?", [
        {
          text: "Não",
          onPress: () => null,
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => {
            navigation.navigate("Home");
            BackHandler.exitApp();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <Tab.Navigator
      activeColor="#999"
      inactiveColor="#FFF"
      barStyle={css.area__tab}
    >
      <Tab.Screen
        name="Perfil"
        component={Profile}
        options={{
          tabBarIcon: () => <Icon name="user" size={20} color="#999" />,
        }}
      />
      <Tab.Screen
        name="Cadastro"
        component={Cadastro}
        options={{
          tabBarIcon: () => <Icon name="archive" size={20} color="#999" />,
        }}
      />
      <Tab.Screen
        name="Edição"
        component={Edicao}
        options={{
          tabBarIcon: () => <Icon name="edit" size={20} color="#999" />,
        }}
      />
    </Tab.Navigator>
  );
}
