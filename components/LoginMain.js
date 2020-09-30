import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { screenWidth } from "../utils/Constants";
import Logo from "../assets/logo.png";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import CustomButtonIcon from "./CustomButtonIcon";
import LoginHelp from "./LoginHelp";
import CustomDivider from "./CustomDivider";

export default function LoginMain() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <CustomInput
        style={{ marginTop: 20 }}
        placeholder={"Phone number, email or username"}
      />
      <CustomInput
        style={{ marginTop: 12 }}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <CustomButton
        style={{ marginTop: 12, backgroundColor: "#0086FF" }}
        textColor={"white"}
      >
        Log in
      </CustomButton>
      <LoginHelp style={{ marginTop: 5 }} />
      <CustomDivider>OR</CustomDivider>
      <CustomButtonIcon
        style={{ marginTop: 6 }}
        textColor={"#0086FF"}
        icon={""}
      >
        Log in with Facebook
      </CustomButtonIcon>
    </View>
  );
}

const logoRealWidth = 961;
const logoRealHeight = 279;
const logoWith = screenWidth / 3;
const logoHeight = (logoWith * logoRealHeight) / logoRealWidth;

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 300,
    alignItems: "center",
  },
  logo: {
    width: logoWith,
    height: logoHeight,
  },
});
