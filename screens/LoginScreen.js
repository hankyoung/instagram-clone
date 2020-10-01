import * as React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import LanguagePicker from "../components/LanguagePicker";
import LoginCenter from "../components/LoginCenter";
import { screenWidth } from "../utils/Constants";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <LoginCenter />
      <BottomButton />
    </View>
  );
}

function BottomButton() {
  return (
    <TouchableOpacity
      style={{
        borderTopWidth: 0.5,
        borderColor: "grey",
        width: screenWidth,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "grey", fontSize: 13 }}>
        Don't have an account?
        <Text style={{ color: "black", fontWeight: "bold" }}> Sign up.</Text>
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
