import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import NavigationStrings from "../constants/NavigationStrings";

const Stack = createNativeStackNavigator();

const AuthenticationStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name={NavigationStrings.LOGIN_SCREEN}
        component={LoginScreen}
      />
      <Stack.Screen
        name={NavigationStrings.SIGNUP_SCREEN}
        component={SignUpScreen}
      />
    </Stack.Navigator>
  );
};
export default AuthenticationStackNavigator;
