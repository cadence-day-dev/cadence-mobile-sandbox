import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Text,
} from "react-native";
import { Svg, Rect, Circle, Line, Path } from "react-native-svg";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import SimpleDialog from "@/components/DialogNote";
import DialogActivity from "@/components/DialogActivity";

import { ThemedText } from "@/components/ThemedText";
import ScheduleGrid from "@/components/ReflectionGrid";

export default function ReflectionScreen() {
  const [pressedStates, setPressedStates] = useState(Array(48).fill(false));
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sliceColors, setSliceColors] = useState<string[]>(
    Array(48).fill("transparent"),
  );
  const [isNoteDialogVisible, setNoteDialogVisible] = useState(false);
  const [isActivityDialogVisible, setActivityDialogVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("November");
  const [isMonthMenuVisible, setMonthMenuVisible] = useState(false);
  const [isStartDateMenuVisible, setStartDateMenuVisible] = useState(false);
  const [isEndDateMenuVisible, setEndDateMenuVisible] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState("01/11/2024");
  const [selectedEndDate, setSelectedEndDate] = useState("01/11/2024");

  const handlePress = (index: number) => {
    setPressedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });

    setSliceColors((prevColors) => {
      const newColors = [...prevColors];
      newColors[index] = selectedColor || "#E9942F";
      return newColors;
    });

    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
  };

  const handleColorPress = (color: string) => {
    setSelectedColor(color);
  };

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

  const toggleStartDateMenu = () => {
    setStartDateMenuVisible(!isStartDateMenuVisible);
  };

  const toggleEndDateMenu = () => {
    setEndDateMenuVisible(!isEndDateMenuVisible);
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B7B7B7" }}>
      {/* First Box - 20% height */}
      <View
        style={{
          width: "100%",
          height: "10%",
          marginVertical: 10,
          justifyContent: "flex-start",
          alignItems: "flex-start",
          paddingLeft: 20,
          position: "relative",
        }}
      >
        <Svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          style={{
            position: "absolute",
            top: 0,
            right: 20,
          }}
        >
          <Rect x="0.5" y="0.5" width="21" height="14" stroke="black" />
          <Circle cx="7" cy="7" r="1.5" stroke="black" />
          <Circle cx="15" cy="7" r="1.5" stroke="black" />
          <Line x1="7" y1="13" x2="15" y2="13" stroke="black" strokeWidth="2" />
        </Svg>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 2,
          }}
        >
          <ThemedText
            style={{
              fontSize: 14,
              color: "black",
              marginRight: 5,
            }}
          >
            Pattern of your
          </ThemedText>
          <TouchableOpacity onPress={toggleMonthMenu}>
            <ThemedText
              style={{
                fontSize: 14,
                color: "black",
                textDecorationLine: "underline",
                textTransform: "uppercase",
              }}
            >
              {selectedMonth}
            </ThemedText>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 2,
          }}
        >
          <TouchableOpacity onPress={toggleStartDateMenu}>
            <ThemedText
              style={{
                fontSize: 14,
                color: "black",
                textTransform: "uppercase",
                textDecorationLine: "underline",
                marginRight: 5,
              }}
            >
              {selectedStartDate}
            </ThemedText>
          </TouchableOpacity>
          <ThemedText
            style={{
              fontSize: 14,
              color: "black",
              textTransform: "uppercase",
              marginHorizontal: 5,
            }}
          >
            –
          </ThemedText>
          <TouchableOpacity onPress={toggleEndDateMenu}>
            <ThemedText
              style={{
                fontSize: 14,
                color: "black",
                textTransform: "uppercase",
                textDecorationLine: "underline",
              }}
            >
              {selectedEndDate}
            </ThemedText>
          </TouchableOpacity>
        </View>

        {isMonthMenuVisible && (
          <Modal transparent={true} animationType="fade">
            <View style={styles.modalBackground}>
              <View style={styles.menu}>
                {months.map((month) => (
                  <TouchableOpacity
                    key={month}
                    onPress={() => selectMonth(month)}
                    style={styles.menuItem}
                  >
                    <Text style={styles.menuItemText}>{month}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        )}

        {isStartDateMenuVisible && (
          <Modal transparent={true} animationType="fade">
            <View style={styles.modalBackground}>
              <View style={styles.menu}>
                {dates.map((date) => (
                  <TouchableOpacity
                    key={date}
                    onPress={() => {
                      setSelectedStartDate(date);
                      setStartDateMenuVisible(false);
                    }}
                    style={styles.menuItem}
                  >
                    <Text style={styles.menuItemText}>{date}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        )}

        {isEndDateMenuVisible && (
          <Modal transparent={true} animationType="fade">
            <View style={styles.modalBackground}>
              <View style={styles.menu}>
                {dates.map((date) => (
                  <TouchableOpacity
                    key={date}
                    onPress={() => {
                      setSelectedEndDate(date);
                      setEndDateMenuVisible(false);
                    }}
                    style={styles.menuItem}
                  >
                    <Text style={styles.menuItemText}>{date}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </Modal>
        )}
      </View>
      {/* Second Box - 50% height */}
      <View
        style={{
          width: "100%",
          height: "53%",
          backgroundColor: "#C4C4C4",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 0,
        }}
      >
        <ScheduleGrid />
      </View>
      {/* Third Box - 20% height */}
      <View
        style={{
          width: "95%",
          height: "24%",
          backgroundColor: "#C4C4C4",
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
                onPress={() => handleColorPress(color)}
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
      </View>
      <SimpleDialog
        visible={isNoteDialogVisible}
        toggleVisibility={toggleNoteDialogVisibility}
      />
      <DialogActivity
        visible={isActivityDialogVisible}
        toggleVisibility={toggleActivityDialogVisibility}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  menu: {
    backgroundColor: "white",
    height: 400,
    borderRadius: 5,
    padding: 10,
    width: 200,
  },
  menuItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuItemText: {
    fontSize: 14,
    color: "black",
  },
});
