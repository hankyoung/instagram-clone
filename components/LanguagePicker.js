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

      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => setModalVisible(true)}
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
});
