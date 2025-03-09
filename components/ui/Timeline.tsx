/* eslint-disable react-native/no-unused-styles */
import { View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";
import Svg, { Rect, Line } from "react-native-svg";

const Timeline = () => {
  const [, setPressedStates] = useState(Array(48).fill(false));
  const [selectedColor] = useState<string | null>(null);
  const [, setSliceColors] = useState<string[]>(Array(48).fill("transparent"));

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
  };
  return (
    <View
      style={{
        width: "100%",
        height: "60%",
        marginVertical: 0,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 0,
      }}
    >
      <ScrollView
        horizontal
        contentContainerStyle={{
          flexDirection: "row",
          paddingHorizontal: 10,
        }}
      >
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
                <ThemedText
                  style={{
                    width: 40,
                    fontSize: 11,
                    color: "black",
                    marginTop: 10,
                    textAlign: "center",
                  }}
                >
                  {timeLabel}
                </ThemedText>
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(index)}
                  activeOpacity={1}
                  style={{
                    width: 45,
                    height: 440,
                    borderWidth: 1,
                    borderColor: "#6646EC",
                    marginHorizontal: 2,
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingVertical: 0,
                  }}
                />
                <TouchableOpacity
                  style={{
                    width: 40,
                    height: 40,
                    justifyContent: "center",
                    alignItems: "center",
                    position: "absolute",
                    bottom: 4,
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
              </View>
            </>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Timeline;
