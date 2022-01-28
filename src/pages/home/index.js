import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*/    routes   /*/
import PayScreen from "../pay/index";
import AssetsScreen from "../assets/index";
/*/    routes   /*/

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator
      sreenOptions={{
        style: {
          backgroundColor: "red",
        },
      }}
    >
      <Tab.Screen
        name="Pay"
        component={PayScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Assets"
        component={AssetsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Home;
