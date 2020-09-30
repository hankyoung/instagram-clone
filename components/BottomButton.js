import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { screenWidth } from "../utils/Constants";

export default function BottomButton() {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.text}>
        Don't have an account?
        <Text style={{ color: "black", fontWeight: "bold" }}> Sign up.</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderTopWidth: 0.5,
    borderColor: "grey",
    width: screenWidth,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 13,
  },
});
