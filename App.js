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
import AuthenticationStackNavigator from "./src/navigation/AuthenticationStackNavigator";
import AppNavigator from "./src/navigation/AppNavigator";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
  onAuthStateChanged,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import * as Font from "expo-font";

const Stack = createNativeStackNavigator();

const customFonts = {
  "Roboto-Black": require("./src/assets/fonts/Roboto-Black.ttf"),
  "Roboto-Bold": require("./src/assets/fonts/Roboto-Bold.ttf"),
  "Roboto-Regular": require("./src/assets/fonts/Roboto-Regular.ttf"),
  "Roboto-Thin": require("./src/assets/fonts/Roboto-Thin.ttf"),
};

const App = () => {
  const [isConnected, setIsConnected] = useState(true);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });

    const initialize = async () => {
      // Initialize Firebase
      const app = initializeApp(firebaseConfig);
      const auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage),
      });
      onAuthStateChanged(auth, (user) => {
        setUser(user);
        setLoading(false);
      });
      //Load fonts
      await loadFontsAsync();
    };

    initialize();

    return () => {
      unsubscribe();
    };
  }, []);

  if (loading || !fontsLoaded) {
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
            {user ? <AppNavigator /> : <AuthenticationStackNavigator />}
          </NavigationContainer>
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
