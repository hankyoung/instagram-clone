import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";

export default function LoginHelp(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={styles.text}>
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
  button: {
    width: buttonWidth,
    borderRadius: 5,
    height: buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 13,
    color: "grey",
  },
});
