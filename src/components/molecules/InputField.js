import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import theme from "../../theme/theme";
import Icon from "react-native-vector-icons/MaterialIcons";

const InputField = ({
  icon,
  placeholder,
  keyboardType,
  isPassword,
  value,
  onChangeText,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Icon
        name={icon === "user" ? "person" : icon}
        size={24}
        color={theme.colors.greyColor}
        style={styles.icon}
      />
      <TextInput
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={isPassword}
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: theme.colors.borderColor,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
    backgroundColor: theme.colors.lightColor,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.darkColor,
  },
});

export default InputField;
