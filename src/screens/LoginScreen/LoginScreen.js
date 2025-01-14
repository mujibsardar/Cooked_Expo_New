import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Alert,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import logo from "../../assets/icon.png";
import Button from "../../components/atoms/Button";
import ScreenTitle from "../../components/atoms/ScreenTitle";
import InputField from "../../components/molecules/InputField";
import NavigationStrings from "../../constants/NavigationStrings";
import styles from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorText, setErrorText] = useState("");

  const handleLogin = async () => {
    if (email && password) {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password);
        navigation.navigate("Home");
      } catch (error) {
        switch (error.code) {
          case "auth/user-not-found":
            setErrorText(
              "User not found. Please check your email and try again."
            );
            break;
          case "auth/wrong-password":
            setErrorText("Incorrect password. Please try again.");
            break;
          // Add more cases for other error codes as needed
          default:
            setErrorText(
              error.message ||
                "An error occurred during login. Please try again."
            );
            console.error("Error signing in:", error);
        }
      }
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Image style={styles.logo} resizeMode="contain" source={logo} />

          <View style={styles.loginContainer}>
            <ScreenTitle title={"Login To Your Account"} />

            <InputField
              icon={"mail"}
              placeholder={"Example@gmail.com"}
              keyboardType={"email-address"}
              value={email}
              onChangeText={(value) => {
                setEmail(value);
                setErrorText(""); // Reset the error text when the user changes the email
              }}
              // ... other props
            />

            <InputField
              icon={"lock"}
              placeholder={"Enter your password"}
              keyboardType={"default"}
              isPassword
              value={password}
              onChangeText={(value) => {
                setPassword(value);
                setErrorText(""); // Reset the error text when the user changes the password
              }}
              // ... other props
            />

            {errorText !== "" && (
              <Text style={styles.errorText}>{errorText}</Text>
            )}

            <Button btnText={"Login"} onPressHandler={handleLogin} />

            <Text style={styles.continueText}>Or</Text>

            <View style={styles.anotherAction}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(NavigationStrings.SIGNUP_SCREEN);
                }}
              >
                <Text style={styles.signup}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
