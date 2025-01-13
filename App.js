import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View, ActivityIndicator } from "react-native";
import NetInfo from "@react-native-community/netinfo";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { initializeApp } from "firebase/app";
import firebaseConfig from "./src/config/firebaseConfig";
import { Provider } from "react-redux";
import store from "./src/state/store/store";
import NoInternetConnectionScreen from "./src/screens/noInternetConnection/NoInternetConnectionScreen";

const Stack = createNativeStackNavigator();

const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    const initialize = async () => {
      // Initialize Firebase
      console.log("Initializing Firebase");
      console.log(firebaseConfig);
      initializeApp(firebaseConfig);
      console.log("Firebase Initialized");
      setLoading(false);
    };

    initialize();

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!isConnected) {
    return (
      <View style={{ flex: 1 }}>
        <NoInternetConnectionScreen />
      </View>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <StatusBar barStyle="dark-content" />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
            >
              <Stack.Screen
                name="Main"
                component={() => <Text>Main App</Text>}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
