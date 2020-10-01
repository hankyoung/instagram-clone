import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";

export default function TextButtonIcon(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      {props.icon}
      <Text style={{ fontWeight: "bold", opacity: 0.8, color: "#0086FF" }}>
        {props.children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    width: buttonWidth,
    borderRadius: 5,
    height: buttonHeight,
    justifyContent: "center",
    alignItems: "center",
  },
});
