import React from "react";
import { View, Text, Dimensions, StyleSheet } from "react-native";
import theme from "../theme/theme";

const HomeScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.backgroundColor,
    padding: width * 0.06,
    marginBottom: height * 0.05,
  },
  containerStyle: {
    flexGrow: 1,
  },
  topMenu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: width * 0.05,
  },
  notification: {
    position: "relative",
  },
  dot: {
    position: "absolute",
    width: width * 0.03,
    height: width * 0.03,
    backgroundColor: theme.colors.primaryColor,
    borderRadius: width * 0.09,
    top: 0,
    right: 2,
  },
  heading: {
    color: theme.colors.darkColor,
    fontFamily: "Roboto-Bold",
    fontSize: theme.fonts.fontSizeXLarge,
    lineHeight: width * 0.12,
    paddingVertical: width * 0.05,
  },
  searchBar: {
    flexDirection: "row",
    backgroundColor: theme.colors.lightColor,
    borderRadius: width * 0.5,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: width * 0.04,
  },
  searchInput: {
    marginLeft: width * 0.02,
    fontSize: theme.fonts.fontSizeSmall,
    color: theme.colors.greyColor,
    fontFamily: "Roboto-Regular",
    flex: 1,
    paddingVertical: width * 0.04,
  },
  categoryList: {
    paddingVertical: width * 0.05,
  },
  filterContainer: {
    paddingVertical: width * 0.02,
    borderBottomColor: theme.colors.primaryColor,
  },
  categoryName: {
    fontSize: width * 0.045,
    marginHorizontal: width * 0.03,
  },
  viewAllBox: {
    alignItems: "flex-end",
    marginBottom: width * 0.03,
  },
  showText: {
    fontFamily: "Roboto-Bold",
    color: theme.colors.primaryColor,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: width * 0.06,
  },
  subHeading: {
    color: theme.colors.darkColor,
    fontFamily: "Roboto-Bold",
    fontSize: width * 0.05,
  },
  showMore: {
    fontFamily: "Roboto-Bold",
    color: theme.colors.greyColor,
  },
  noDishesMessage: {
    textAlign: "center",
    fontSize: 18,
    color: "red", // Adjust the color as needed
    marginTop: 20, // Adjust the margin as needed
    // Add other styling properties as needed
  },
});

export default HomeScreen;
