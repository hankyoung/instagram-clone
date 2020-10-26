import React from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  articleItems,
  expoStatusBarHeight,
  margin,
  screenHeight,
  screenWidth,
  storyItems,
  systemNavigationSoftButtonHeight,
} from "../utils/Constants";
import ImageLogo from "../assets/logo.png";
import Article from "../containers/Article";
import Story from "../containers/Story";

const logoWith = screenWidth / 4.5;
const logoHeight = (logoWith * 279) / 961;

export default function HomeScreen() {
  const renderItem = ({ item }) => {
    return <Article item={item} keyExtractor={(item) => item.id} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity>
          <Feather size={28} name={"camera"} />
        </TouchableOpacity>
        <Image style={styles.headerLogo} source={ImageLogo} />
        <TouchableOpacity>
          <Feather size={28} name={"send"} />
        </TouchableOpacity>
      </View>
      <View style={styles.articleContainer}>
        <FlatList
          ListHeaderComponent={<Story storyItems={storyItems} />}
          showsVerticalScrollIndicator={false}
          data={articleItems}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    height: 64,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: margin.left,
    paddingTop: 10,
  },
  headerLogo: {
    width: logoWith,
    height: logoHeight,
  },
  articleContainer: {
    width: screenWidth,
    height:
      screenHeight -
      expoStatusBarHeight -
      64 -
      systemNavigationSoftButtonHeight,
  },
});
