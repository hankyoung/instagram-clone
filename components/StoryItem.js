import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { margin } from "../utils/Constants";

export default function StoryItem({ item }) {
  return (
    <TouchableOpacity key={item.id} style={styles.centeredView}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: item.imageUrl }} />
      </View>
      <Text style={styles.text}>{item.text}</Text>
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
    borderWidth: 1,
    borderColor: "red",
    borderRadius: 32,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: "pink",
  },
  text: {
    fontSize: 12,
    marginTop: 8,
  },
});
