import * as React from "react";
import { StyleSheet, View } from "react-native";
import LanguagePicker from "./LanguagePicker";

export default function LoginScreen() {
  return (
    <View style={styles.containers}>
      <LanguagePicker />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
