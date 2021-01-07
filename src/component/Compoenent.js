import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Compoenent = ({ name, age }) => {
  return (
    <View>
      <Text style={{ color: "white" }}>
        Hello {name} j'ai {age}
      </Text>
    </View>
  );
};

export default Compoenent;

const styles = StyleSheet.create({});
