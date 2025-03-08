/* eslint-disable react-native/no-unused-styles */
import {
  SafeAreaView,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import SimpleDialog from "@/components/DialogNote";
import DialogChat from "@/components/DialogAi";
import DialogActivity from "@/components/DialogActivity";

import { ThemedText } from "@/components/ThemedText";

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#D9D9D9",
  },
  firstBox: {
    width: "100%",
    height: "10%",
    marginVertical: 0,
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 20,
    position: "relative",
  },
  dialogButton: {
    position: "absolute",
    top: 0,
    right: 20,
  },
  themedText: {
    fontSize: 17,
    color: "black",
    marginBottom: 2,
  },
  themedTextUppercase: {
    fontSize: 12,
    color: "black",
    textTransform: "uppercase",
    marginBottom: 2,
  },
  secondBox: {
    width: "100%",
    height: "60%",
    marginVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 0,
  },
  scrollViewContent: {
    flexDirection: "row",
    // paddingVertical: 20,
    paddingHorizontal: 10,
  },
  timeSliceButton: {
    width: 40,
    height: "90%",
    borderWidth: 1,
    borderColor: "#6646EC",
    marginHorizontal: 2,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 0,
  },
  timeLabel: {
    width: 40,
    fontSize: 11,
    color: "black",
    marginTop: 10,
    textAlign: "center",
  },
  noteButton: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  thirdBox: {
    width: "95%",
    height: "24%",
    marginVertical: 2,
    alignItems: "flex-start",
    paddingLeft: 10,
    borderRadius: 5,
    alignSelf: "center",
  },
  activityRow: {
    flexDirection: "row",
    marginTop: 12,
  },
  activityText: {
    fontSize: 15,
    color: "black",
  },
  editText: {
    fontSize: 10,
    color: "black",
    textDecorationLine: "underline",
    marginLeft: 20,
  },
  colorButton: {
    width: 60,
    height: 32,
    borderWidth: 1,
    borderColor: "#A1A1A1",
    justifyContent: "center",
    alignItems: "center",
  },
  colorLabel: {
    fontSize: 9,
    color: "black",
    textAlign: "left",
    width: 60,
    marginTop: -2,
    marginBottom: 5,
    marginLeft: 0,
    textTransform: "capitalize",
  },
  addButton: {
    width: 80,
    height: 32,
    borderWidth: 1,
    borderColor: "#A1A1A1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: "transparent",
  },
  addButtonText: {
    fontSize: 16,
    color: "black",
  },
});

export default function HomeScreen() {
  const [pressedStates, setPressedStates] = useState(Array(48).fill(false));
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sliceColors, setSliceColors] = useState<string[]>(
    Array(48).fill("transparent"),
  );
  const [isNoteDialogVisible, setNoteDialogVisible] = useState(false);
  const [isActivityDialogVisible, setActivityDialogVisible] = useState(false);
  const [isDialogVisible, setDialogVisible] = useState(false);

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

  const toggleDialogVisibility = () => {
    setDialogVisible(!isDialogVisible);
  };

  const colorLabels = {
    work: "#141F2C",
    sports: "#024886",
    study: "#6D7D8D",
    family: "#B4C5D6",
    food: "#E9942F",
    friends: "#9D8266",
    grocery: "#A5A1A0",
    // rest: "#DAEBFD",
    // clear: "transparent",
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* First Box - 20% height */}
      <View style={styles.firstBox}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedText style={styles.themedText}>Pattern of your Day</ThemedText>
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
        <ThemedText style={styles.themedTextUppercase}>
          12/11/24 at 13:15
        </ThemedText>
      </View>
      {/* Second Box - 50% height */}
      <View style={styles.secondBox}>
        <ScrollView horizontal contentContainerStyle={styles.scrollViewContent}>
          {Array.from({ length: 48 }).map((_, index) => {
            const hours = String(Math.floor(index / 2)).padStart(2, "0");
            const minutes = index % 2 === 0 ? "00" : "30";
            const timeLabel = `${hours}:${minutes}`;
            return (
              <>
                <View
                  style={{
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <ThemedText style={styles.timeLabel}>{timeLabel}</ThemedText>
                  <TouchableOpacity
                    key={index}
                    onPress={() => handlePress(index)}
                    activeOpacity={1}
                    style={styles.timeSliceButton}
                  />
                </View>
              </>
            );
          })}
        </ScrollView>
      </View>
      {/* Third Box - 20% height */}
      <View style={styles.thirdBox}>
        <View style={styles.activityRow}>
          <ThemedText style={styles.activityText}>Activities</ThemedText>
          <TouchableOpacity onPress={toggleActivityDialogVisibility}>
            <ThemedText style={styles.editText}>Edit</ThemedText>
          </TouchableOpacity>
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
                  width: 80,
                  height: 32,
                  // borderWidth: 1,
                  // borderColor: "#color",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: color,
                }}
              />
              <ThemedText style={styles.colorLabel}>{label}</ThemedText>
            </View>
          ))}
          <View style={styles.addButton}>
            <ThemedText style={styles.addButtonText}>+</ThemedText>
          </View>
        </View>
      </View>
      {/* <SimpleDialog
        visible={isNoteDialogVisible}
        toggleVisibility={toggleNoteDialogVisibility}
      />
      <DialogActivity
        visible={isActivityDialogVisible}
        toggleVisibility={toggleActivityDialogVisibility}
      />
      <DialogChat
        visible={isDialogVisible}
        toggleVisibility={toggleDialogVisibility}
      /> */}
    </SafeAreaView>
  );
}
