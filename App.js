import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import { expoStatusBarHeight } from "./utils/Constants";

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <LoginScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  safeArea: {
    flex: 1,
    paddingTop: expoStatusBarHeight,
  },
});
