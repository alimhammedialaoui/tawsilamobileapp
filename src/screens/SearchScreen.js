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
  Platform,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import Service from "../api/Service";

const SearchScreen = ({ navigation }) => {
  const [title, setTitle] = useState("Search");

  useEffect(() => {
    navigation.setParams({
      title: "Search",
    });
  }, []);
  SearchScreen.navigationOptions = () => ({
    title,
  });

  const { isDateShowed, isTimeShowed, Mypreference } = {
    isDateShowed: navigation.getParam("isDateShowed"),
    isTimeShowed: navigation.getParam("isTimeShowed"),
    Mypreference: navigation.getParam("preference"),
  };
  const departures = [
    {
      id: 1,
      city: "Casablanca",
      value: 1,
    },
    {
      id: 2,
      city: "Mohammadia",
      value: 2,
    },
    {
      id: 3,
      city: "Rabat",
      value: 3,
    },
    {
      id: 4,
      city: "Kenitra",
      value: 4,
    },
    {
      id: 5,
      city: "Tanger",
      value: 5,
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
  const [showDate, setShowDate] = useState(isDateShowed);
  const [showTime, setShowTime] = useState(isTimeShowed);
  const [departure, setDeparture] = useState("Casablanca");
  const [arrival, setArrival] = useState("Tanger");
  // if (Platform.OS === "ios") {
  //   useEffect(() => {
  //     setShowDate(true);
  //     setShowTime(true);
  //   }, []);
  //   console.log("IPHONE de ALI");
  // }

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
    console.log(
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
    return (
      date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
    );
  };
  const formatTime = () => {
    if (time.getHours().toString().length == 1) {
      return "0" + time.getHours() + ":" + time.getMinutes();
    } else if (time.getMinutes().toString().length == 1) {
      return time.getHours() + ":0" + time.getMinutes();
    } else if (
      time.getHours().toString().length == 1 &&
      time.getMinutes().toString().length == 1
    ) {
      return "0" + time.getHours() + ":" + "0" + time.getMinutes();
    } else {
      return time.getHours() + ":" + time.getMinutes();
    }
  };
  const getPicker = (data, list, setData, placeholder, setter) => {
    // if (Platform.OS === "ios") {
    //   return (
    //     <RNPickerSelect
    //       style={{
    //         inputIOS: {},
    //         placeholder: {
    //           marginLeft: 10,
    //           color: "black",
    //         },
    //       }}
    //       onValueChange={(value) => setData(value)}
    //       items={list}
    //     />
    //   );
    // } else {
    return (
      <Picker
        mode="dropdown"
        selectedValue={data}
        onValueChange={(itemValue, itemIndex) => {
          setData(itemValue);
          setter(itemValue);
        }}
      >
        {list.map((departure, key) => {
          return (
            <Picker.Item
              key={key}
              label={departure.city}
              value={departure.city}
            />
          );
        })}
      </Picker>
    );
  };

  const [preference, setPreference] = useState(Mypreference);
  const [Mydeparture, setMyDeparture] = useState("Casablanca");
  const [Myarrival, setMyArrival] = useState("Tanger");

  const search = () => {
    if (preference == null || Mydeparture == null || Myarrival == null) {
      alert("Fill all the form");
    } else {
      const searchReq = {
        preference: preference,
        departure: Mydeparture,
        arrival: Myarrival,
        date: formatDate(),
        time: formatTime(),
      };
      console.log(searchReq);
      Service.post("/search", searchReq)
        .then((response) => {
          console.log(response.data);
          navigation.navigate("Result", {
            response: response.data,
            arrival: arrival,
            departure: departure,
          });
        })
        .catch((e) => {
          console.log(e);
        });
    }
  };

  return (
    <>
      <>
        <View>
          <Text style={styles.headerTextStyle}>Next departure</Text>
          <View>
            <View style={styles.inputStyle}>
              <Picker
                mode="dropdown"
                selectedValue={preference}
                onValueChange={(itemValue) => {
                  setPreference(itemValue);
                }}
              >
                <Picker.Item label={"Train"} value={"Train"} />
                <Picker.Item label={"Bus"} value={"Bus"} />
                <Picker.Item label={"Tram"} value={"Tram"} />
                <Picker.Item label={"Covoiturage"} value={"Covoiturage"} />
              </Picker>
            </View>
          </View>
          <Text style={{ marginLeft: 35 }}>Departure</Text>
          <View style={styles.inputStyle}>
            {/* <TextInput
            style={styles.textInputStyle}
            placeholder="Departure"
            placeholderTextColor="black"
          /> */}
            {/* <Picker
                mode="dropdown"
                selectedValue={departure}
                onValueChange={(itemValue, itemIndex) => {
                  setDeparture(itemValue);
                }}
              >
                {departures.map((departure, key) => {
                  return (
                    <Picker.Item
                      key={key}
                      label={departure.stationName}
                      value={departure.id}
                    />
                  );
                })}
              </Picker> */}
            {getPicker(
              departure,
              departures,
              setDeparture,
              "Departure",
              setMyDeparture
            )}
          </View>
          <Text style={{ marginLeft: 35 }}>Arrival</Text>
          <View style={styles.inputStyle}>
            {/* <TextInput
            style={styles.textInputStyle}
            placeholder="Arrival"
            placeholderTextColor="black"
          /> */}
            {/* <Picker
                mode="dropdown"
                selectedValue={arrival}
                onValueChange={(itemValue, itemIndex) => setArrival(itemValue)}
              >
                {departures.map((arrival, key) => {
                  return (
                    <Picker.Item
                      key={key}
                      label={arrival.stationName}
                      value={arrival.id}
                    />
                  );
                })}
              </Picker> */}
            {getPicker(
              arrival,
              departures,
              setArrival,
              "Arrival",
              setMyArrival
            )}
          </View>
          <View style={styles.DateTimePickerStyle}>
            <View style={styles.datestyle}>
              {Platform.OS !== "ios" && (
                <View style={styles.dateInput}>
                  <TouchableOpacity onPress={showDatepicker}>
                    <TextInput
                      editable={false}
                      value={formatDate()}
                      placeholder="Date"
                    />
                  </TouchableOpacity>
                </View>
              )}
              <View style={styles.date}>
                {Platform.OS === "ios" && <Text>Date</Text>}
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
              {Platform.OS !== "ios" && (
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
              )}
              <View style={styles.time}>
                {Platform.OS === "ios" && <Text>Time</Text>}
                {showTime && (
                  <DateTimePicker
                    testID="dateTimePicker"
                    value={time}
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
              onPress={() => search()}
            >
              <Text style={styles.ButtonTextStyle}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>
      </>
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
    justifyContent: "center",
    overflow: "hidden",
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
