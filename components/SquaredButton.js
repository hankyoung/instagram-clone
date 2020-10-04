import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";

export default function SquaredButton(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={styles.text}>{props.children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: buttonWidth,
    height: buttonHeight,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    opacity: 0.8,
    color: "#fff",
  },
});
