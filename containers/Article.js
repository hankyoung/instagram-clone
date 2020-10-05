import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { colors, margin, screenHeight, screenWidth } from "../utils/Constants";
import { Feather, AntDesign, FontAwesome } from "@expo/vector-icons";

export default function Article({ item }) {
  const [isHearted, setHeart] = useState(false);
  const [isBookMarked, setBookMark] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity style={styles.topLeft}>
          <Image style={styles.avatar} source={{ uri: item.avatarUrl }} />
          <Text style={styles.user}>{item.user}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreHorizontal}>
          <Feather size={16} name={"more-horizontal"} />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <TouchableWithoutFeedback onPress={() => setHeart(!isHearted)}>
            <AntDesign
              style={{ color: isHearted ? colors.red : colors.black }}
              size={28}
              name={isHearted ? "heart" : "hearto"}
            />
          </TouchableWithoutFeedback>
          <TouchableOpacity>
            <Feather
              style={{ marginLeft: 16 }}
              size={28}
              name={"message-circle"}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather style={{ marginLeft: 16 }} size={28} name={"send"} />
          </TouchableOpacity>
        </View>
        <TouchableWithoutFeedback onPress={() => setBookMark(!isBookMarked)}>
          <FontAwesome
            style={{
              marginRight: 16,
              color: isBookMarked ? colors.blue : colors.black,
            }}
            size={28}
            name={isBookMarked ? "bookmark" : "bookmark-o"}
          />
        </TouchableWithoutFeedback>
      </View>
      <View style={styles.footer}>
        <Text style={styles.views}>
          {item.views}
          <Text style={styles.views}> views</Text>
        </Text>
        <Text style={styles.time}>{item.time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  top: {
    height: 68,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topLeft: {
    marginLeft: margin.left,
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  user: {
    fontWeight: "bold",
    marginLeft: 12,
  },
  moreHorizontal: {
    marginRight: 20,
  },
  image: {
    width: screenWidth,
    height: screenHeight / 2,
  },
  bottom: {
    marginLeft: margin.left,
    marginTop: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  bottomLeft: {
    flexDirection: "row",
  },
  footer: {
    height: 60,
    marginLeft: margin.left,
    marginTop: 10,
    marginBottom: 12,
  },
  views: {
    fontSize: 18,
    fontWeight: "bold",
  },
  time: {
    color: colors.grey,
    fontSize: 12,
    marginTop: 6,
  },
});
