import { Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

const theme = {
  colors: {
    primaryColor: "#E10019",
    secondaryColor: "#FE8B00",
    tertiaryColor: "#FFEEDA",
    backgroundColor: "#efefef",
    lightColor: "#ffffff",
    darkColor: "#333",
    greyColor: "#646464",
    borderColor: "#ccc",
    tomatoColor: "#f9cecb",
    limeGreen: "#E9F7BA",
    pink: "#EC2578",
  },
  fonts: {
    fontSizeSmall: width * 0.04,
    fontSizeMoreThanSm: width * 0.05,
    fontSizeLarge: width * 0.065,
    fontSizeMedium: width * 0.06,
    fontSizexsm: width * 0.037,
    fontSizeXLarge: width * 0.085,
    fontSizeExtraSmall: width * 0.035,
  },
};

export default theme;
