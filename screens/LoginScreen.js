import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import LanguagePicker from "../components/LanguagePicker";
import {
  buttonHeight,
  buttonWidth,
  screenWidth,
  colors,
} from "../utils/Constants";
import SquaredInput from "../components/SquaredInput";
import SquaredButton from "../components/SquaredButton";
import IconButton from "../components/IconButton";
import { Ionicons } from "@expo/vector-icons";
import LogoImage from "../assets/logo.png";

const logoWith = screenWidth / 3;
const logoHeight = (logoWith * 279) / 961;

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <LoginMain />
      <BottomButton />
    </View>
  );
}

function LoginMain() {
  return (
    <View style={styles.loginMain}>
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

function BottomButton() {
  return (
    <TouchableOpacity style={styles.bottomButton}>
      <Text style={{ color: "grey", fontSize: 13 }}>
        Don't have an account?
        <Text style={{ color: colors.darkGrey, fontWeight: "bold" }}>
          {" "}
          Sign up.
        </Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  loginMain: {
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
  bottomButton: {
    borderTopWidth: 0.5,
    borderColor: "grey",
    width: screenWidth,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
