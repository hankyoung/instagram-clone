import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonHeight, buttonWidth, colors } from "../utils/Constants";

export default function IconButton(props) {
  return (
    <TouchableOpacity style={[styles.button, props.style]}>
      {props.icon}
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    opacity: 0.8,
    color: colors.blue,
  },
});
