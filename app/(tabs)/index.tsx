import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import SimpleDialog from "@/components/DialogNote";
import DialogActivity from "@/components/DialogActivity";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  const [pressedStates, setPressedStates] = useState(Array(48).fill(false));
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sliceColors, setSliceColors] = useState<string[]>(
    Array(48).fill("transparent"),
  );
  const [isNoteDialogVisible, setNoteDialogVisible] = useState(false);
  const [isActivityDialogVisible, setActivityDialogVisible] = useState(false);
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

  const colorLabels = {
    work: "#141F2C",
    sports: "#024886",
    study: "#6D7D8D",
    family: "#B4C5D6",
    food: "#E9942F",
    friends: "#9D8266",
    grocery: "#A5A1A0",
    rest: "#DAEBFD",
    clear: "transparent",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B7B7B7" }}>
      {/* First Box - 20% height */}
      <View
        style={{
          width: "100%",
          height: "10%",
          marginVertical: 10,
          justifyContent: "center",
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
        <ThemedText
          style={{
            fontSize: 14,
            color: "black",
            marginBottom: 2,
          }}
        >
          Today
        </ThemedText>
        <ThemedText
          style={{
            fontSize: 12,
            color: "black",
            textTransform: "uppercase",
            marginBottom: 2,
          }}
        >
          Wednesday, 27/11/2024
        </ThemedText>
        <ThemedText style={{ fontSize: 14, color: "black" }}>13:40</ThemedText>
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
        <ScrollView
          horizontal
          contentContainerStyle={{
            flexDirection: "row",
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          {Array.from({ length: 48 }).map((_, index) => {
            const hours = String(Math.floor(index / 2)).padStart(2, "0");
            const minutes = index % 2 === 0 ? "00" : "30";
            const timeLabel = `${hours}:${minutes}`;
            const isPressed = pressedStates[index];

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(index)}
                activeOpacity={1}
                style={{
                  width: 50,
                  height: "100%",
                  borderWidth: 1,
                  borderColor: "#6646EC",
                  marginHorizontal: 2,
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingVertical: 0,
                  backgroundColor: sliceColors[index],
                }}
              >
                <ThemedText
                  style={{
                    width: 40,
                    fontSize: 9,
                    color: "black",
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  {timeLabel}
                </ThemedText>
                <TouchableOpacity
                  onPress={toggleNoteDialogVisibility}
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Svg
                    width="14"
                    height="17"
                    viewBox="0 0 14 17"
                    fill="none"
                    style={{
                      position: "absolute",
                      bottom: 10,
                      opacity: index % 6 === 0 ? 1 : 0.5, // Change opacity based on index
                    }}
                  >
                    <Rect
                      x="0.5"
                      y="0.5"
                      width="13.0076"
                      height="16"
                      stroke="black"
                    />
                    <Line
                      x1="2.35742"
                      y1="4.39453"
                      x2="11.7883"
                      y2="4.39453"
                      stroke="black"
                    />
                    <Line
                      x1="2.35742"
                      y1="8.77344"
                      x2="11.7883"
                      y2="8.77344"
                      stroke="black"
                    />
                    <Line
                      x1="2.35742"
                      y1="12.8945"
                      x2="11.7883"
                      y2="12.8945"
                      stroke="black"
                    />
                  </Svg>
                </TouchableOpacity>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
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
          <TouchableOpacity onPress={toggleActivityDialogVisibility}>
            <ThemedText
              style={{
                fontSize: 10,
                color: "black",
                textDecorationLine: "underline",
                marginLeft: 20,
              }}
            >
              Edit
            </ThemedText>
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
          <View
            style={{
              width: 60,
              height: 32,
              borderWidth: 1,
              borderColor: "#A1A1A1",
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
              marginBottom: 10,
              backgroundColor: "transparent",
            }}
          >
            <ThemedText style={{ fontSize: 16, color: "black" }}>+</ThemedText>
          </View>
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
