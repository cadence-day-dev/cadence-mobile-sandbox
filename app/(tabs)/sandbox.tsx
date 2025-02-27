import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import * as Haptics from "expo-haptics";
import SimpleDialog from "@/components/DialogNote";
import DialogChat from "@/components/DialogAi";
import DialogActivity from "@/components/DialogActivity";
import StateModal from "@/components/StateModal";

import { ThemedText } from "@/components/ThemedText";

export default function SandboxScreen() {
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
    rest: "#DAEBFD",
    clear: "transparent",
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B7B7B7" }}>
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
        <ThemedText
          style={{
            fontSize: 14,
            color: "black",
            marginBottom: 2,
          }}
        >
          Sandbox
        </ThemedText>
      </View>
      {/* Third Box - 20% height */}
      <View
        style={{
          width: "95%",
          height: "50%",
          backgroundColor: "#C4C4C4",
          marginVertical: 2,
          alignItems: "flex-start",
          paddingLeft: 10,
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <ThemedText>Test connnection to DB</ThemedText>
        <StateModal />
      </View>
      <SimpleDialog
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
      />
    </SafeAreaView>
  );
}
