import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

/*/    routes   /*/
import PayScreen from "../pay/index";
/*/    routes   /*/

const Tab = createBottomTabNavigator();

const Home = () => {
  return (
    // <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Pay" component={PayScreen} />
    </Tab.Navigator>
    // </NavigationContainer>
  );
};

export default Home;
