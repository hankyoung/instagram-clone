import React from "react";
import { StyleSheet, TextInput } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";

export default function SquaredInput({
  placeholder,
  secureTextEntry,
  ...props
}) {
  return (
    <TextInput
      style={{ ...styles.input, ...props.style }}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 0.5,
    borderRadius: 5,
    width: buttonWidth,
    height: buttonHeight,
    paddingLeft: 14,
    backgroundColor: "#e9e9e9",
  },
});
