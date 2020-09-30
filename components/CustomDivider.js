import * as React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function CustomDivider(props) {
  return (
    <View style={{ ...styles.container, ...props.style }}>
      <Line />
      <Text style={styles.text}>{props.children}</Text>
      <Line />
    </View>
  );
}

function Line() {
  return (
    <View style={styles.lineContainer}>
      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  lineContainer: {
    justifyContent: "center",
  },
  line: {
    borderColor: "grey",
    borderWidth: 0.5,
    width: 120,
  },
  text: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 16,
    color: "grey",
  },
});
