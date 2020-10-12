import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  articleItems,
  colors,
  expoStatusBarHeight,
  margin,
  screenHeight,
  screenWidth,
  storyItems,
  systemNavigationSoftButtonHeight,
} from "../utils/Constants";
import ImageLogo from "../assets/logo.png";
import StoryItem from "../components/StoryItem";
import YourStoryItem from "../components/YourStoryItem";
import Article from "../containers/Article";

const logoWith = screenWidth / 4.5;
const logoHeight = (logoWith * 279) / 961;

export default function HomeScreen() {
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
          showsVerticalScrollIndicator={false}
          data={articleItems}
          renderItem={({ item, index }) => {
            if (index === 0) {
              return (
                <>
                  <View style={styles.storyContainer}>
                    <FlatList
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                      data={storyItems}
                      renderItem={({ item, index }) => {
                        if (index === 0) {
                          return (
                            <>
                              <YourStoryItem
                                imageUrl={
                                  "https://lh3.googleusercontent.com/NVTPHq2QOU_yJtwsfLwJDjhPrmDNpTxNTQIXMK1EgKNNTmuC7QEZzIAdTPaeOoK5zyyk11s6ori-k4vLE4i23fRc_jOVXVVVVckpZz3-2_ji5AYescbhyH0i8ZS_iJVLtiPWlwk2YUEg12ztV2bhGdhCsEBFIALAtfnZ0k3etqXvp3WGUGpn8LzIm27MqUyrr0jUixKiY_NbJIsfcTeMc_5tf6zzMs2-5SRpNvIgfMYmoJ-vb-SlwZZvUx99Wk3l4v9mdDo6JkKpCvYjNaF9vlDt-36kRgIylKNsTfrrtqJCPOh24EikbLoajD0b3jHEqLxwxTHh-PclH3FJGngmLLMc7k4T5ulGtjR5V88WYExQuma-bY-Duvf6iRmE8S4drT9EJnASjpMQdicDDJpRylUySIyL23o2cahsTLr5GGJbbi0MXKvHIcbhA3Q7h0q5EwS5mSFcP7z1I4YwGp8iCHoqdJXahrlewkiSSOugI3_X0VRsHkJbRpRNGdmT64UE38VyqHiq1RpyfTUL6O-Z5d9_93SAPd5PjoRLwJ4vQdrTJq71Tr6Li3JkRBTuGX4htgCF2JX27fDO077JbtDVNF67WOrE2VONn6Wr3JyFrWFMH_Qd7MCeE7g6aIsP5A2h06Xvt9KpiYKTWvY1EbUeqOpBY1G3Gc-3I6vbXc-xnOjoBLwVYQLGbcJ9mk8Axw=w712-h949-no?authuser=0"
                                }
                              />
                              <StoryItem item={item} />
                            </>
                          );
                        } else {
                          return <StoryItem item={item} />;
                        }
                      }}
                      keyExtractor={(item) => item.id}
                    />
                  </View>
                  <Article item={item} keyExtractor={(item) => item.id} />
                </>
              );
            } else {
              return <Article item={item} keyExtractor={(item) => item.id} />;
            }
          }}
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
  storyContainer: {
    height: 112,
    backgroundColor: colors.white1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
    marginLeft: 5,
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
