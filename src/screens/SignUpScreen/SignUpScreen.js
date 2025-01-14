import React, { useRef, useState, useContext } from "react";
import {
  Dimensions,
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Button from "../../components/atoms/Button";
import ScreenTitle from "../../components/atoms/ScreenTitle";
import InputField from "../../components/molecules/InputField";
import NavigationStrings from "../../constants/NavigationStrings";
import logo from "../../assets/icon.png";
import styles from "./styles";

const { height } = Dimensions.get("screen");

export default function SignUpScreen({ navigation }) {
  const scrollViewRef = useRef(null);
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errorText, setErrorText] = useState("");

  const handleSignUp = async () => {
    try {
      if (signUpData.name && signUpData.email && signUpData.password) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        );
        navigation.navigate("Home");
      }
    } catch (error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          setErrorText(
            "This email is already taken. Please use a different email."
          );
          console.error("Error signing up:", error);
          break;
        case "auth/invalid-email":
          setErrorText("Invalid email. Please enter a valid email address.");
          console.error("Error signing up:", error);
          break;
        default:
          setErrorText(
            error.message ||
              "An error occurred during signup. Please try again."
          );

          console.error("Error signing up:", error);
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
          ref={scrollViewRef}
          contentContainerStyle={[styles.container]}
          keyboardShouldPersistTaps="handled"
        >
          <Image style={styles.logo} resizeMode="contain" source={logo} />

          <View style={styles.loginContainer}>
            <ScreenTitle title={"Sign Up For Free"} />

            <InputField
              icon={"user"}
              placeholder={"Name"}
              keyboardType={"default"}
              value={signUpData.name}
              onChangeText={(text) =>
                setSignUpData({ ...signUpData, name: text })
              }
            />

            <InputField
              icon={"mail"}
              placeholder={"Enter Your Email"}
              keyboardType={"email-address"}
              value={signUpData.email}
              onChangeText={(text) => {
                setSignUpData({ ...signUpData, email: text });
                setErrorText(""); // Reset the error state when the user changes the email
              }}
            />

            {errorText !== "" && (
              <Text style={styles.errorText}>{errorText}</Text>
            )}

            <InputField
              icon={"lock"}
              placeholder={"Enter your password"}
              keyboardType={"default"}
              isPassword
              value={signUpData.password}
              onChangeText={(text) =>
                setSignUpData({ ...signUpData, password: text })
              }
            />

            <Button
              btnText={"Create Account"}
              customStyle={{ marginTop: height * 0.03 }}
              onPressHandler={handleSignUp}
            />

            <Text style={styles.continueText}>Already have an account</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(NavigationStrings.LOGIN_SCREEN);
              }}
            >
              <Text style={styles.signup}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
