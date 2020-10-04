import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { colors, margin, screenWidth, storyItems } from "../utils/Constants";
import ImageLogo from "../assets/logo.png";
import StoryItem from "../components/StoryItem";

const logoWith = screenWidth / 4.5;
const logoHeight = (logoWith * 279) / 961;

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Feather size={28} name={"camera"} />
        <Image style={styles.headerLogo} source={ImageLogo} />
        <Feather size={28} name={"send"} />
      </View>
      <View style={styles.storyContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {storyItems.map((item) => (
            <StoryItem item={item} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    // backgroundColor: "red",
  },
  headerContainer: {
    flexDirection: "row",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: margin.left,
    paddingTop: 10,
  },
  headerLogo: {
    width: logoWith,
    height: logoHeight,
  },
  storyContainer: {
    height: 112,
    backgroundColor: colors.white1,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: colors.lightGrey,
  },
});
