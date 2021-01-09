import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ResultDetails = ({ data }) => {
  return (
    <View style={styles.blocStyle}>
      <View></View>
      <View style={styles.inputStyle}>
        <View style={styles.iconStyle}>
          <Fontisto name="train-ticket" size={30} color="white" />
        </View>
        <View style={styles.infoStyle}>
          <Text style={styles.headerStyle}>
            Via {data.moyen} N=°{data.id}
          </Text>
          <View style={styles.subInfoStyle}>
            <MaterialIcons name="departure-board" size={24} color="black" />
            <View style={styles.circuitStyle}>
              <Text style={styles.textStyle}>
                Departure: {data.departureTime}
              </Text>
              <Text style={styles.textStyle}>Arrival: {data.arrivalTime}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ResultDetails;

const styles = StyleSheet.create({
  TextStyle: {
    fontSize: 22,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 20,
  },
  inputStyle: {
    backgroundColor: "#D8D8D8",
    marginHorizontal: 35,
    borderRadius: 8,
    height: 80,
    marginVertical: 15,
    justifyContent: "center",
    flexDirection: "row",
  },

  textStyle: {
    fontSize: 14,
  },
  headerTextStyle: {
    fontSize: 18,
    padding: 15,
    marginBottom: 10,
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
  },
  rangeInputStyle: {
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    height: 20,
    marginHorizontal: 60,
    flex: 1,
  },
  rangeTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    flex: 4,
  },
  iconStyle: {
    backgroundColor: "black",
    flex: 2,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  infoStyle: {
    flex: 8,
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
  headerStyle: {
    fontWeight: "bold",
    marginTop: 4,
    //backgroundColor: "#333",
    alignSelf: "auto",
  },
  circuitStyle: {
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
  subInfoStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
