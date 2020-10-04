import { Dimensions } from "react-native";
import Constants from "expo-constants";

export const screenWidth = Dimensions.get("screen").width;
export const screenHeight = Dimensions.get("screen").height;
export const buttonWidth = screenWidth * 0.9;
export const buttonHeight = 40;
export const modalWidth = screenWidth / 1.5;
export const expoStatusBarHeight = Constants.statusBarHeight;
export const systemNavigationSoftButtonHeight = 48;

export const languageItems = [
  { id: "0", text: "English", subtitle: "American English" },
  { id: "1", text: "Afrikaans" },
  { id: "2", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "3", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "4", text: "Dansk", subtitle: "Danish" },
  { id: "5", text: "Deutsch", subtitle: "German" },
  { id: "6", text: "Afrikaans" },
  { id: "7", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "8", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "9", text: "Dansk", subtitle: "Danish" },
  { id: "10", text: "Deutsch", subtitle: "German" },
  { id: "11", text: "Afrikaans" },
  { id: "12", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "13", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "14", text: "Dansk", subtitle: "Danish" },
  { id: "15", text: "Deutsch", subtitle: "German" },
  { id: "16", text: "Afrikaans" },
  { id: "17", text: "Bahasa Indonesia1", subtitle: "Indonesian" },
  { id: "18", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "19", text: "Dansk", subtitle: "Danish" },
  { id: "20", text: "Deutsch", subtitle: "German" },
  { id: "21", text: "Afrikaans" },
  { id: "22", text: "Bahasa Indonesia2", subtitle: "Indonesian" },
  { id: "23", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "24", text: "Dansk", subtitle: "Danish" },
  { id: "25", text: "Deutsch", subtitle: "German" },
];

export const colors = {
  darkGrey: "#404040",
  darkGray: "#404040",
  blue: "#0086ff",
};
