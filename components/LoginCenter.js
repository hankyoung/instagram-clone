import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { buttonHeight, buttonWidth, screenWidth } from "../utils/Constants";
import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import TextButtonIcon from "./TextButtonIcon";
import CustomDivider from "./CustomDivider";
import { Ionicons } from "@expo/vector-icons";
import Logo from "./Logo";

export default function LoginCenter() {
  return (
    <View style={styles.container}>
      <Logo />
      <CustomInput
        style={{ marginTop: 20 }}
        placeholder={"Phone number, email or username"}
      />
      <CustomInput
        style={{ marginTop: 12 }}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <CustomButton style={{ marginTop: 12, backgroundColor: "#0086FF" }}>
        Log in
      </CustomButton>
      <LoginHelp style={{ marginTop: 5 }} />
      <CustomDivider>OR</CustomDivider>
      <TextButtonIcon
        style={{ marginTop: 6 }}
        icon={
          <Ionicons
            style={{ color: "blue", marginRight: 5 }}
            name={"logo-facebook"}
          />
        }
      >
        Log in with Facebook
      </TextButtonIcon>
    </View>
  );
}

function LoginHelp(props) {
  return (
    <TouchableOpacity
      style={{
        width: buttonWidth,
        height: buttonHeight,
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        ...props.style,
      }}
    >
      <Text style={{ fontSize: 13, color: "grey" }}>
        Forgot your login details?
        <Text style={{ color: "black", fontWeight: "bold" }}>
          {" "}
          Get help logging in.
        </Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 300,
    alignItems: "center",
  },
});
