import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors, margin } from "../utils/Constants";
import { AntDesign } from "@expo/vector-icons";

export default function YourStoryItem({ imageUrl }) {
  return (
    <TouchableOpacity style={styles.centeredView}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <AntDesign style={styles.imageIcon} size={20} name={"pluscircle"} />
      </View>
      <Text style={styles.text}>Your story</Text>
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
  imageIcon: {
    position: "absolute",
    zIndex: 1,
    right: 0,
    bottom: 0,
    color: colors.blue,
    borderRadius: 10,
  },
  text: {
    fontSize: 12,
    marginTop: 8,
  },
});
