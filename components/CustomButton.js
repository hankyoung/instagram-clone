import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";

export default function CustomButton(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Text style={{ ...styles.text, color: props.textColor }}>
        {props.children}
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
    fontWeight: "bold",
    opacity: 0.8,
  },
});
