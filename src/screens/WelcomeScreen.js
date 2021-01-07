import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.ViewStyle}>
      <StatusBar style="light" backgroundColor="#2C3E50" />
      <View style={styles.ChildViewStyle}>
        <Image
          style={styles.ImageStyle}
          source={require("../../assets/transport.png")}
        />
        <Text style={styles.TextStyle}>
          This app provides information about available transport
        </Text>
      </View>
      <TouchableOpacity
        style={styles.ButtonStyle}
        onPress={() => navigation.navigate("Information")}
      >
        <Text style={styles.ButtonTextStyle}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  ViewStyle: {
    marginVertical: 120,
  },
  ChildViewStyle: {
    alignItems: "center",
    marginBottom: 20,
  },

  ImageStyle: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  TextStyle: {
    fontSize: 22,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  ButtonStyle: {
    backgroundColor: "#2C3E50",
    marginHorizontal: 35,
    height: 67,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonTextStyle: {
    color: "white",
    fontSize: 22,
  },
});
