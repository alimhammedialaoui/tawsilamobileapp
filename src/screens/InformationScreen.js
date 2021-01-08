import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Keyboard,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { RadioButton } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox } from "react-native-paper";

const InformationScreen = ({ navigation }) => {
  const [checked, setChecked] = useState("homme");
  const [opacity, setOpacity] = useState([0.2, 0]);
  const [selected, setSelected] = useState(false);
  //Dismiss keyboard
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <>
      <DismissKeyboard>
        <View>
          <Text style={styles.headerTextStyle}>
            Fill the form below with your information:
          </Text>
          <View>
            <View style={styles.inputStyle}>
              <TextInput
                keyboardType="numeric"
                style={styles.textInputStyle}
                placeholder="Age"
                placeholderTextColor="black"
              />
            </View>
            <View
              style={{
                ...styles.checkboxGroup,
                justifyContent: "space-evenly",
                marginVertical: 15,
              }}
            >
              <View
                style={{
                  ...styles.checkboxItem,
                  backgroundColor: `rgba(0, 255, 202,${opacity[0]})`,
                }}
              >
                <View style={styles.checkboxGroup}>
                  <RadioButton
                    value="homme"
                    status={checked === "homme" ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked("homme");
                      setOpacity([0.2, 0]);
                    }}
                  />
                  <Text style={{ fontSize: 16 }}>Homme</Text>
                </View>
              </View>
              <View
                style={{
                  ...styles.checkboxItem,
                  backgroundColor: `rgba(238, 130, 238,${opacity[1]})`,
                }}
              >
                <View style={styles.checkboxGroup}>
                  <RadioButton
                    color="#d76d77"
                    value="femme"
                    status={checked === "femme" ? "checked" : "unchecked"}
                    onPress={() => {
                      setChecked("femme");
                      setOpacity([0, 0.2]);
                    }}
                  />
                  <Text style={{ fontSize: 16 }}>Femme</Text>
                </View>
              </View>
            </View>
            <View style={styles.inputStyle}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Transport preference"
                placeholderTextColor="black"
              />
            </View>

            <Text style={{ marginTop: 20, marginLeft: 40 }}>Price range:</Text>
            <View style={styles.rangeViewStyleInput}>
              <DismissKeyboard>
                <View style={styles.rangeInputStyle}>
                  <TextInput
                    keyboardType="numeric"
                    style={styles.rangeTextStyle}
                    placeholder="From"
                    placeholderTextColor="black"
                  />
                </View>
              </DismissKeyboard>
              {/* <Text style={{ color: "white", alignSelf: "center" }}> - </Text> */}
              <AntDesign
                style={{ alignSelf: "center" }}
                name="arrowright"
                size={24}
                color="black"
              />
              <View style={styles.rangeInputStyle}>
                <TextInput
                  keyboardType="numeric"
                  style={styles.rangeTextStyle}
                  placeholder="To"
                  placeholderTextColor="black"
                />
              </View>
            </View>
            <View style={styles.uniqueCheckBoxStyle}>
              <Checkbox
                status={selected ? "checked" : "unchecked"}
                onPress={() => {
                  setSelected(!selected);
                }}
              />
              <Text>Any Handicap?</Text>
            </View>
          </View>
          <View style={styles.buttonGroupStyle}>
            <TouchableOpacity
              style={styles.smallTouchableOpacityStyle}
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Text style={styles.SmallTextStyle}>Skip</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.TouchableOpacityStyle}
              onPress={() => navigation.navigate("Search")}
            >
              <Text style={styles.ButtonTextStyle}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </DismissKeyboard>
    </>
  );
};

export default InformationScreen;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#D8D8D8",
    marginHorizontal: 35,
    borderRadius: 8,
    height: 55,
  },
  checkboxGroup: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  textInputStyle: {
    flex: 1,
    marginLeft: 40,
    fontSize: 19,
  },
  headerTextStyle: {
    fontSize: 18,
    padding: 15,
    marginBottom: 10,
  },
  checkboxItem: {
    backgroundColor: "rgba(0, 255, 202,0.2)",
    borderRadius: 5,
    paddingRight: 14,
    paddingBottom: 5,
    paddingLeft: 5,
    paddingTop: 5,
  },
  rangeViewStyleInput: {
    marginTop: 15,
    flexDirection: "row",
  },
  rangeInputStyle: {
    backgroundColor: "#D8D8D8",
    borderRadius: 8,
    height: 55,
    marginHorizontal: 40,
    flex: 3,
  },
  rangeTextStyle: {
    alignSelf: "center",
    textAlign: "center",
    flex: 1,
  },
  uniqueCheckBoxStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginHorizontal: 30,
    marginTop: 30,
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
    flex: 3,
  },
  smallTouchableOpacityStyle: {
    flex: 3,
    alignItems: "center",
  },
  ButtonTextStyle: {
    color: "white",
    fontSize: 22,
  },
  SmallTextStyle: {
    color: "#2C3E50",
  },
});
