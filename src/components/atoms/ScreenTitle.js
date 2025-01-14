import React from "react";
import { Text, StyleSheet } from "react-native";
import theme from "../../theme/theme";

const ScreenTitle = ({ title }) => {
  return <Text style={styles.title}>{title}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "Roboto-Bold",
    fontSize: theme.fonts.fontSizeLarge,
    marginBottom: 20,
    color: theme.colors.darkColor,
  },
});

export default ScreenTitle;
