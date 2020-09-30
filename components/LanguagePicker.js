import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import LanguageList from "./LanguageList";

export default function LanguagePicker() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.centeredView}>
            <LanguageList />
          </View>
        </TouchableWithoutFeedback>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text>English (United States)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    height: 10,
  },
  button: {
    alignItems: "center",
  },
  centeredView: {
    alignItems: "center",
    backgroundColor: "rgba(100,100,100, 0.9)",
    // position: "absolute",
    // top: 0,
    // right: 0,
    // left: 0,
    // bottom: 0,
  },
});
