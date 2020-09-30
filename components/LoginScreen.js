import * as React from "react";
import { StyleSheet, View } from "react-native";
import LanguagePicker from "./LanguagePicker";
import BottomButton from "./BottomButton";
import LoginMain from "./LoginMain";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <LoginMain />
      <BottomButton />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
