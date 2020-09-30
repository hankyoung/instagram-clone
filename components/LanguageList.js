import React from "react";
import {
  FlatList,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import {
  expoStatusBarHeight,
  modalWidth,
  screenHeight,
  systemNavigationSoftButtonHeight,
} from "../utils/Constants";

const items = [
  { id: "0", text: "English", subtitle: "American English" },
  { id: "1", text: "Afrikaans" },
  { id: "2", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "3", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "4", text: "Dansk", subtitle: "Danish" },
  { id: "5", text: "Deutsch", subtitle: "German" },
  { id: "6", text: "Afrikaans" },
  { id: "7", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "8", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "9", text: "Dansk", subtitle: "Danish" },
  { id: "10", text: "Deutsch", subtitle: "German" },
  { id: "11", text: "Afrikaans" },
  { id: "12", text: "Bahasa Indonesia", subtitle: "Indonesian" },
  { id: "13", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "14", text: "Dansk", subtitle: "Danish" },
  { id: "15", text: "Deutsch", subtitle: "German" },
  { id: "16", text: "Afrikaans" },
  { id: "17", text: "Bahasa Indonesia1", subtitle: "Indonesian" },
  { id: "18", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "19", text: "Dansk", subtitle: "Danish" },
  { id: "20", text: "Deutsch", subtitle: "German" },
  { id: "21", text: "Afrikaans" },
  { id: "22", text: "Bahasa Indonesia2", subtitle: "Indonesian" },
  { id: "23", text: "Bahasa Melayu", subtitle: "Malay" },
  { id: "24", text: "Dansk", subtitle: "Danish" },
  { id: "25", text: "Deutsch", subtitle: "German" },
];

export default function LanguageList(props) {
  return (
    <TouchableWithoutFeedback onPress={() => {}}>
      <View style={styles.container}>
        <Label />
        <SearchInput />
        <FlatList
          style={styles.list}
          data={items}
          renderItem={({ item }) => <ListItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

function Label(props) {
  return (
    <View style={{ ...styles.label, ...props.style }}>
      <Text style={{ fontWeight: "bold" }}>SELECT YOUR LANGUAGE</Text>
    </View>
  );
}

function SearchInput(props) {
  return (
    <View style={{ ...styles.searchInput, ...props.style }}>
      <Feather
        style={{ color: "grey", marginLeft: 10, marginRight: 6 }}
        name={"search"}
      />
      <TextInput style={{ width: modalWidth - 36 }} placeholder={"Search"} />
    </View>
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
