import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";
import LanguagePicker from "../containers/LanguagePicker";
import { screenWidth, colors } from "../utils/Constants";
import MainLogin from "../containers/MainLogin";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <MainLogin />
      <BottomButton />
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
  bottomButton: {
    borderTopWidth: 0.5,
    borderColor: "grey",
    width: screenWidth,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
