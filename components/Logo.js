import React from "react";
import { Image, StyleSheet } from "react-native";
import LogoImage from "../assets/logo.png";
import { screenWidth } from "../utils/Constants";

export default function Logo() {
  return <Image source={LogoImage} style={styles.logo} />;
}

const logoRealWidth = 961;
const logoRealHeight = 279;
const logoWith = screenWidth / 3;
const logoHeight = (logoWith * logoRealHeight) / logoRealWidth;

const styles = StyleSheet.create({
  logo: {
    width: logoWith,
    height: logoHeight,
  },
});
