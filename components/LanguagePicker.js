import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  TextInput,
} from "react-native";
import {
  expoStatusBarHeight,
  modalWidth,
  screenHeight,
  systemNavigationSoftButtonHeight,
  languageItems,
} from "../utils/Constants";
import { Feather } from "@expo/vector-icons";

export default function LanguagePicker() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={{ justifyContent: "center", height: 10 }}>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={{ color: "grey", fontSize: 13 }}>
          English (United States)
        </Text>
      </TouchableOpacity>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View
            style={{
              alignItems: "center",
              backgroundColor: "rgba(100,100,100, 0.9)",
            }}
          >
            <LanguageList />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
}

function LanguageList(props) {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.label}>
          <Text style={{ fontWeight: "bold" }}>SELECT YOUR LANGUAGE</Text>
        </View>
        <View style={{ ...styles.searchInput, ...props.style }}>
          <Feather
            style={{ color: "grey", marginLeft: 10, marginRight: 6 }}
            name={"search"}
          />
          <TextInput
            style={{ width: modalWidth - 36 }}
            placeholder={"Search"}
          />
        </View>
        <FlatList
          style={styles.list}
          data={languageItems}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

function ListItem({ item }) {
  return (
    <View style={{ height: 42, justifyContent: "center" }}>
      <Text style={{ fontSize: 13 }}>{item.text}</Text>
      <Text style={{ color: "grey", fontSize: 11 }}>{item.subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    marginStart: 10,
    height: 36,
    justifyContent: "center",
  },
  container: {
    width: modalWidth,
    backgroundColor: "white",
  },
  searchInput: {
    height: 36,
    borderColor: "grey",
    borderTopWidth: 0.5,
    borderBottomWidth: 0.5,
    alignItems: "center",
    flexDirection: "row",
  },
  list: {
    paddingLeft: 24,
    height:
      screenHeight -
      expoStatusBarHeight -
      72 -
      systemNavigationSoftButtonHeight,
  },
});
