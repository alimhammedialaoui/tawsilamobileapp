import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";
import ResultDetails from "../component/ResultDetailsComponent";

const ResultScreen = ({ navigation }) => {
  //Navigation Options
  const [title, setTitle] = useState("Result");
  useEffect(() => {
    navigation.setParams({
      title: "Result",
    });
  }, []);
  ResultScreen.navigationOptions = () => ({
    title,
  });
  const departureExemple = "Rabat Agdal";
  const arrivalExemple = "Casablanca Voyageurs";
  const exemple1 = {
    moyen: "Train",
    id: 1,
    departureTime: "12:30",
    arrivalTime: "13:30",
  };
  const exemple2 = {
    moyen: "Bus",
    id: 2,
    departureTime: "12:10",
    arrivalTime: "13:30",
  };
  const exemple3 = {
    moyen: "Velo",
    id: 3,
    departureTime: "15:30",
    arrivalTime: "16:30",
  };

  return (
    <>
      <Text style={styles.headerTextStyle}>Search Results :</Text>
      <View style={styles.rangeViewStyleInput}>
        <View style={styles.rangeInputStyle}>
          <Text style={styles.rangeTextStyle}>{departureExemple}</Text>
        </View>
        {/* <Text style={{ color: "white", alignSelf: "center" }}> - </Text> */}
        <AntDesign
          style={{ alignSelf: "center" }}
          name="arrowright"
          size={24}
          color="black"
        />
        <View style={styles.rangeInputStyle}>
          <Text style={styles.rangeTextStyle}>{arrivalExemple}</Text>
        </View>
      </View>
      <ScrollView style={styles.resultStyle}>
        <ResultDetails data={exemple1} />
        <ResultDetails data={exemple2} />
        <ResultDetails data={exemple3} />
      </ScrollView>
    </>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#D8D8D8",
    marginHorizontal: 35,
    borderRadius: 8,
    height: 55,
  },

  text1Style: {
    flex: 4,
    marginLeft: 40,
    fontSize: 19,
  },
  headerTextStyle: {
    fontSize: 18,
    padding: 15,
  },

  buttonGroupStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  TouchableOpacityStyle: {
    backgroundColor: "#2C3E50",
    marginHorizontal: 35,
    height: 67,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    flex: 4,
  },
  smallTouchableOpacityStyle: {
    flex: 4,
    alignItems: "center",
  },
  ButtonTextStyle: {
    color: "white",
    fontSize: 22,
  },
  SmallTextStyle: {
    color: "#2C3E50",
  },
  rangeViewStyleInput: {
    marginTop: 15,
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor: "#333",
    height: 80,
  },
  rangeInputStyle: {
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    marginHorizontal: 40,
    justifyContent: "center",
    alignSelf: "center",
    flex: 1,
    height: 60,
  },
  rangeTextStyle: {
    alignSelf: "center",
    textAlign: "center",
  },
  resultStyle: {
    marginTop: 5,
  },
});
