import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import theme from "../../theme/theme";

const Button = ({ btnText, onPressHandler, customStyle }) => {
  return (
    <TouchableOpacity
      style={[styles.button, customStyle]}
      onPress={onPressHandler}
    >
      <Text style={styles.buttonText}>{btnText}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primaryColor,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  buttonText: {
    color: theme.colors.lightColor,
    fontSize: theme.fonts.fontSizeMedium,
  },
});

export default Button;
