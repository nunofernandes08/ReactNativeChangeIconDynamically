import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

import { changeIcon } from 'react-native-change-icon';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEnter: {
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#808080",
    marginBottom: 50,
    width: "90%"
  },
  buttonEnterText: {
    fontSize: 30,
    color: "white",
    paddingLeft: 40,
    paddingRight: 40,
  },
  buttonImage: {
    borderRadius: 20,
    width: 90,
    height: 90
  },
});

const buttons = [{
  id: "portugal",
  image: "https://i.ibb.co/P9VRdWz/portugal.png"
}, {
  id: "france",
  image: "https://i.ibb.co/6NWr9qh/france.png"
}, {
  id: "uk",
  image: "https://i.ibb.co/YbgTXZb/uk.png"
}, {
  id: "us",
  image: "https://i.ibb.co/YpCDt7L/us.png"
}];

export default function App() {
  return (
    <View style={styles.container}>
      {buttons.map((button, index) => {
        return (
          <>
            <TouchableOpacity
              key={index}
              style={styles.buttonEnter}
              onPress={() => {
                changeIcon(button.id);
              }}
            >
              <Image
                source={{ uri: button.image }}
                style={styles.buttonImage}
              />
              <Text style={styles.buttonEnterText}>{button.id.toUpperCase()}</Text>
            </TouchableOpacity>
          </>
        );
      })}
      <StatusBar style="auto" />
    </View>
  );
}
