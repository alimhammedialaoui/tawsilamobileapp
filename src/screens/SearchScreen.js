import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const SearchScreen = ({ navigation }) => {
  const departures = [
    {
      id: 1,
      stationName: "Rabat Agdal",
      city: "Rabat",
    },
    {
      id: 2,
      stationName: "Rabat Ville",
      city: "Rabat",
    },
    {
      id: 3,
      stationName: "Casa Voyageurs",
      city: "Casablanca",
    },
    {
      id: 4,
      stationName: "Casa Port",
      city: "Casablanca",
    },
  ];

  //Dismiss keyboard
  const DismissKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [showDate, setShowDate] = useState(false);
  const [showTime, setShowTime] = useState(false);
  const [departure, setDeparture] = useState(1);
  const [arrival, setArrival] = useState(1);
  if (Platform.OS === "android") {
    console.log("Android");
    useEffect(() => {
      setShowDate(false);
      setShowTime(false);
    }, []);
  } else {
    useEffect(() => {
      setShowDate(true);
      setShowTime(true);
    }, []);
    console.log("IPHONE de ALI");
  }

  //console.log("Date : " + date + " Time :" + time);
  const onChangeDate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDate(Platform.OS === "ios");
    setDate(currentDate);
  };
  const onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || time;
    setShowTime(Platform.OS === "ios");
    setTime(currentTime);
  };

  const showMode = (currentMode) => {
    setMode(currentMode);
  };

  const showDatepicker = () => {
    setShowDate(true);
  };

  const showTimepicker = () => {
    setShowTime(true);
  };

  const formatDate = () => {
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  const formatTime = () => {
    return time.getHours() + ":" + time.getMinutes();
  };
  return (
    <>
      <DismissKeyboard>
        <View>
          <Text style={styles.headerTextStyle}>Next departure</Text>
          <View>
            <View style={styles.inputStyle}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="Transport preference"
                placeholderTextColor="black"
              />
            </View>
            <View style={styles.inputStyle}>
              {/* <TextInput
            style={styles.textInputStyle}
            placeholder="Departure"
            placeholderTextColor="black"
          /> */}
              <Picker
                mode="dropdown"
                selectedValue={departure}
                onValueChange={(itemValue, itemIndex) => {
                  setDeparture(itemValue);
                }}
              >
                {/* <FlatList
                  data={departures}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => {
                    return (
                      <Picker.Item label={item.stationName} value={item.id} />
                    );
                  }}
                /> */}
                {departures.map((departure, key) => {
                  return (
                    <Picker.Item
                      label={departure.stationName}
                      value={departure.id}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={styles.inputStyle}>
              {/* <TextInput
            style={styles.textInputStyle}
            placeholder="Arrival"
            placeholderTextColor="black"
          /> */}
              <Picker
                mode="dropdown"
                selectedValue={arrival}
                onValueChange={(itemValue, itemIndex) => setArrival(itemValue)}
              >
                {departures.map((arrival, key) => {
                  return (
                    <Picker.Item
                      label={arrival.stationName}
                      value={arrival.id}
                    />
                  );
                })}
              </Picker>
            </View>
            <View style={styles.DateTimePickerStyle}>
              <View style={styles.datestyle}>
                <View style={styles.dateInput}>
                  <TouchableOpacity onPress={showDatepicker}>
                    <TextInput
                      editable={false}
                      value={formatDate()}
                      placeholder="Date"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.date}>
                  {showDate && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="date"
                      is24Hour={true}
                      display="default"
                      onChange={onChangeDate}
                    />
                  )}
                </View>
              </View>
              <View style={styles.timestyle}>
                <View style={styles.dateInput}>
                  <TouchableOpacity onPress={showTimepicker}>
                    <TextInput
                      editable={false}
                      placeholderTextColor="black"
                      value={formatTime()}
                      placeholder="Time"
                    />
                  </TouchableOpacity>
                </View>
                <View style={styles.time}>
                  {showTime && (
                    <DateTimePicker
                      testID="dateTimePicker"
                      value={date}
                      mode="time"
                      is24Hour={true}
                      display="default"
                      onChange={onChangeTime}
                    />
                  )}
                </View>
              </View>
            </View>
            <View>
              <TouchableOpacity
                style={styles.ButtonStyle}
                onPress={() => navigation.navigate("Result")}
              >
                <Text style={styles.ButtonTextStyle}>Search</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </DismissKeyboard>
    </>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  inputStyle: {
    backgroundColor: "#D8D8D8",
    marginHorizontal: 35,
    borderRadius: 8,
    height: 55,
    marginVertical: 15,
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
  DateTimePickerStyle: {
    flexDirection: "row",
    marginHorizontal: 35,
    marginTop: 10,
  },
  datestyle: {
    flex: 1,
    marginHorizontal: 10,
  },
  timestyle: {
    flex: 1,
    marginHorizontal: 10,
  },
  time: {
    marginTop: 10,
  },
  date: {
    marginTop: 10,
  },
  ButtonStyle: {
    backgroundColor: "#2C3E50",
    marginHorizontal: 35,
    marginTop: 50,
    height: 67,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  ButtonTextStyle: {
    color: "white",
    fontSize: 22,
  },
  dateInput: {
    backgroundColor: "#3332",
    alignItems: "center",
    padding: 5,
    borderRadius: 8,
  },
});
