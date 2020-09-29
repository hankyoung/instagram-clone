import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LanguagePicker() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text>English (United States)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
  },
});
