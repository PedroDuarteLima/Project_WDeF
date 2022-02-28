import React, { useState, useEffect } from "react";
import { Text, View, Button, Alert } from "react-native";
import { css } from "./assets/css/css";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Login, Rastreio } from "./views";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "THE LIMERZ APP",
            headerStyle: { backgroundColor: "#9f0602" },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
              alignSelf: "center",
              fontSize: "20",
            },
          }}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen name="Rastreio" component={Rastreio} />
        {/* <Stack.Screen name="AreaRestrita" component={AreaRestrita} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
