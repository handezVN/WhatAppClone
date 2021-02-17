import {
  Entypo,
  FontAwesome5,
  Fontisto,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import styles from "./styles";
const inputBox = () => {
  const [message, setMessage] = useState("");

  const onPress = () => {
    if (!message) {
      const onMicrophonePress = () => {
        console.warn("Microphone!");
      };
    } else {
      const onSendPress = () => {
        console.warn(`Sending ${message}`);
        // send the message to the backend
        setMessage("");
      };
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.maincontainer}>
        <FontAwesome5 name="laugh-beam" size={24} color="grey" />
        <TextInput
          style={styles.textInput}
          multiline
          value={message}
          onChangeText={setMessage}
          placeholder={"Type a Message "}
        />
        <Entypo name="attachment" size={24} color="grey" style={styles.icons} />
        {!message && (
          <Fontisto name="camera" size={24} color="grey" style={styles.icons} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.bottonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={24} color="grey" />
          ) : (
            <MaterialIcons name="send" size={24} color="grey" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default inputBox;
