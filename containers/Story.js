import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import StoryItem from "../components/StoryItem";
import YourStoryItem from "../components/YourStoryItem";
import { colors } from "../utils/Constants";

export default function Story({ storyItems }) {
  return (
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
                    "https://cdn2.scratch.mit.edu/get_image/gallery/3968170_200x130.pngs"
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
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    height: 112,
    backgroundColor: colors.white1,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: colors.lightGrey,
    marginLeft: 5,
  },
});
