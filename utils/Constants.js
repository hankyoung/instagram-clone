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

export const storyItems = [
  {
    id: "1",
    imageUrl:
      "https://cdn2.scratch.mit.edu/get_image/gallery/3968170_200x130.png",
    text: "5.mins.craft",
    seen: false,
  },
  {
    id: "3",
    imageUrl:
      "https://scontent.fhan3-1.fna.fbcdn.net/v/t1.0-9/16142546_1238783546191174_8909918855126658185_n.png?_nc_cat=102&_nc_sid=e007fa&_nc_ohc=xUforU6PIzEAX82DbXh&_nc_ht=scontent.fhan3-1.fna&oh=ed11587375273870278137522bc6f62c&oe=5FA00347",
    text: "thangflycomic",
    seen: true,
  },
  {
    id: "5",
    imageUrl: "https://jobsgo.vn/media/img/employer/6597-100x100.jpg",
    text: "hoan.my",
    seen: true,
  },
  {
    id: "6",
    imageUrl:
      "https://codermart.vn/wp-content/uploads/2020/08/hello-world-banner-1400x743.png",
    text: "hello.world",
    seen: false,
  },
  {
    id: "7",
    imageUrl:
      "https://cdn.moveek.com/media/cache/large/9d5c8c7e42d87c7d9a413aea2c8935dfa88be9b4.jpeg",
    text: "happy.tree.friend",
    seen: true,
  },
];

export const colors = {
  lightGrey: "#DFDFDF",
  lightGray: "#DFDFDF",
  darkGrey: "#404040",
  darkGray: "#404040",
  grey: "#808080",
  gray: "#808080",
  blue: "#0086FF",
  white: "#FFF",
  black: "#000",
  white1: "#FAFAFA",
  red: "#F00",
};

export const margin = {
  left: 24,
  right: 24,
};
