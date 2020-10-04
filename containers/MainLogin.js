import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LogoImage from "../assets/logo.png";
import SquaredInput from "../components/SquaredInput";
import SquaredButton from "../components/SquaredButton";
import {
  buttonHeight,
  buttonWidth,
  colors,
  screenWidth,
} from "../utils/Constants";
import IconButton from "../components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

const logoWith = screenWidth / 3;
const logoHeight = (logoWith * 279) / 961;

export default function LoginMain() {
  return (
    <View style={styles.container}>
      <Image
        style={{ width: logoWith, height: logoHeight }}
        source={LogoImage}
      />
      <SquaredInput
        style={{ marginTop: 20 }}
        placeholder={"Phone number, email or username"}
      />
      <SquaredInput
        style={{ marginTop: 12 }}
        placeholder={"Password"}
        secureTextEntry={true}
      />
      <SquaredButton style={styles.loginButton}>Log in</SquaredButton>
      <TouchableOpacity style={styles.helpButton}>
        <Text style={{ fontSize: 13, color: "grey" }}>
          Forgot your login details?
          <Text style={{ color: colors.darkGrey, fontWeight: "bold" }}>
            {" "}
            Get help logging in.
          </Text>
        </Text>
      </TouchableOpacity>
      <Divider>OR</Divider>
      <IconButton
        style={{ marginTop: 6 }}
        icon={
          <Ionicons
            style={{ color: "blue", marginRight: 5 }}
            name={"logo-facebook"}
          />
        }
      >
        Log in with Facebook
      </IconButton>
    </View>
  );
}

function Divider(props) {
  return (
    <View style={{ flexDirection: "row" }}>
      <Line />
      <Text style={styles.dividerText}>{props.children}</Text>
      <Line />
    </View>
  );
}

function Line() {
  return (
    <View style={{ justifyContent: "center" }}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: screenWidth,
    height: 300,
    alignItems: "center",
  },
  loginButton: {
    marginTop: 12,
    backgroundColor: colors.blue,
  },
  helpButton: {
    width: buttonWidth,
    height: buttonHeight,
    marginTop: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  dividerText: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 14,
    color: "grey",
  },
  line: {
    borderColor: "grey",
    borderWidth: 0.5,
    width: 120,
  },
});
