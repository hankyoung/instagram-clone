import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { buttonHeight, buttonWidth } from "../utils/Constants";
import { Ionicons } from "@expo/vector-icons";

export default function CustomButtonIcon(props) {
  return (
    <TouchableOpacity style={{ ...styles.button, ...props.style }}>
      <Ionicons name={"logo-facebook"} style={styles.icon} />
      <Text style={{ ...styles.text, color: props.textColor }}>
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
  text: {
    fontWeight: "bold",
    opacity: 0.8,
  },
  icon: {
    color: "blue",
    marginRight: 5,
  },
});
