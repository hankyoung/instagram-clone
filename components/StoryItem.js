import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, margin } from "../utils/Constants";

export default function StoryItem({ item }) {
  const [seen, setSeen] = useState(false);

  return (
    <TouchableOpacity style={styles.centeredView} onPress={() => setSeen(true)}>
      <View
        style={[
          styles.imageContainer,
          { borderColor: seen ? colors.lightGrey : colors.red },
        ]}
      >
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </View>
      <Text numberOfLines={1} style={styles.text}>
        {item.text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: margin.left,
  },
  imageContainer: {
    width: 64,
    height: 64,
    borderWidth: 1.4,
    borderColor: "red",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: "pink",
  },
  text: {
    fontSize: 12,
    marginTop: 8,
    width: 64,
  },
});
