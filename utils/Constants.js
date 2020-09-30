import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
export const buttonWidth = screenWidth * 0.9;
export const buttonHeight = 40;
export const modalWidth = screenWidth / 1.5;
export const expoStatusBarHeight = Constants.statusBarHeight;
export const systemNavigationSoftButtonHeight = 48;
