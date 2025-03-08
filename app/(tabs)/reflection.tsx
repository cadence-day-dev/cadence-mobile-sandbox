import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
} from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import SimpleDialog from "@/components/DialogNote";
import ChatDialog from "@/components/DialogAi";
import DialogActivity from "@/components/DialogActivity";

import { ThemedText } from "@/components/ThemedText";
import ScheduleGrid from "@/components/ReflectionGrid";

export default function ReflectionScreen() {
  const [isNoteDialogVisible, setNoteDialogVisible] = useState(false);
  const [isActivityDialogVisible, setActivityDialogVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [isMonthMenuVisible, setMonthMenuVisible] = useState(false);
  const [isStartDateMenuVisible, setStartDateMenuVisible] = useState(false);
  const [isEndDateMenuVisible, setEndDateMenuVisible] = useState(false);

  const [selectedStartHour, setSelectedStartHour] = useState("09:00");
  const [selectedEndHour, setSelectedEndHour] = useState("18:30");

  const [isStartHourMenuVisible, setStartHourMenuVisible] = useState(false);
  const [isEndHourMenuVisible, setEndHourMenuVisible] = useState(false);

  const [isDialogVisible, setDialogVisible] = useState(false);
  const toggleNoteDialogVisibility = () => {
    setNoteDialogVisible(!isNoteDialogVisible);
  };

  const toggleActivityDialogVisibility = () => {
    setActivityDialogVisible(!isActivityDialogVisible);
  };

  const toggleMonthMenu = () => {
    setMonthMenuVisible(!isMonthMenuVisible);
  };

  const selectMonth = (month: string) => {
    setSelectedMonth(month);
    setMonthMenuVisible(false);
  };

  const toggleDialogVisibility = () => {
    setDialogVisible(!isDialogVisible);
  };

  const dates = Array.from({ length: 30 }, (_, i) => {
    const day = String(i + 1).padStart(2, "0");
    return `${day}/11/2024`;
  });

  const colorLabels = {
    work: "#141F2C",
    sports: "#024886",
    study: "#6D7D8D",
    family: "#B4C5D6",
    food: "#E9942F",
    friends: "#9D8266",
    grocery: "#A5A1A0",
    rest: "#DAEBFD",
  };

  // Define the months array
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
      {/* First Box - 20% height */}
      <View
        style={{
          width: "100%",
          height: "10%",
          marginVertical: 0,
          justifyContent: "center",
          alignItems: "flex-start",
          paddingLeft: 20,
          position: "relative",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedText
            style={{
              fontSize: 17,
              color: "black",
              marginBottom: 2,
            }}
          >
            Pattern of your week
          </ThemedText>
          <Svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            style={{ marginLeft: 5 }}
          >
            <Line
              x1="5"
              y1="12"
              x2="19"
              y2="12"
              stroke="black"
              strokeWidth="2"
            />
            <Line
              x1="12"
              y1="5"
              x2="19"
              y2="12"
              stroke="black"
              strokeWidth="2"
            />
            <Line
              x1="12"
              y1="19"
              x2="19"
              y2="12"
              stroke="black"
              strokeWidth="2"
            />
          </Svg>
        </View>
        <ThemedText
          style={{
            fontSize: 12,
            color: "black",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          02/11/24 to 08/11/24
        </ThemedText>
      </View>
      {/* Second Box - 50% height */}
      <View
        style={{
          width: "100%",
          height: "80%",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 0,
        }}
      >
        <ScheduleGrid />
      </View>
      {/* Third Box - 20% height */}
      {/* <View
        style={{
          width: "95%",
          height: "24%",
          marginVertical: 2,
          alignItems: "flex-start",
          paddingLeft: 10,
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <View style={{ flexDirection: "row", marginTop: 12 }}>
          <ThemedText style={{ fontSize: 15, color: "black" }}>
            Activities
          </ThemedText>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginTop: 10,
          }}
        >
          {Object.entries(colorLabels).map(([label, color], index) => (
            <View
              key={index}
              style={{
                alignItems: "center",
                marginRight: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  width: 60,
                  height: 32,
                  borderWidth: 1,
                  borderColor: "#A1A1A1",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: color,
                }}
              />
              <ThemedText
                style={{
                  fontSize: 9,
                  color: "black",
                  textAlign: "left",
                  width: 60,
                  marginTop: -2,
                  marginBottom: 5,
                  marginLeft: 0,
                  textTransform: "capitalize",
                }}
              >
                {label}
              </ThemedText>
            </View>
          ))}
        </View>
      </View> */}
    </SafeAreaView>
  );
}
