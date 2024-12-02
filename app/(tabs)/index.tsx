import { SafeAreaView, View, ScrollView, TouchableOpacity } from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import * as Haptics from 'expo-haptics';

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
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
          position: 'relative',
        }}
      >
        <Svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            position: 'absolute',
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
            fontSize: 10,
            color: "black",
            textDecorationLine: "underline",
          }}
        >
          Today
        </ThemedText>
        <ThemedText
          style={{ fontSize: 10, color: "black", textTransform: "uppercase" }}
        >
          Wednesday, 27/11/2024
        </ThemedText>
        <ThemedText style={{ fontSize: 10, color: "black" }}>13:40</ThemedText>
      </View>
      {/* Second Box - 50% height */}
      <View
        style={{
          width: "100%",
          height: "50%",
          backgroundColor: "#C4C4C4",
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <ScrollView
          horizontal
          contentContainerStyle={{ flexDirection: "row", paddingVertical: 20 }}
        >
          {Array.from({ length: 48 }).map((_, index) => {
            const hours = String(Math.floor(index / 2)).padStart(2, "0");
            const minutes = index % 2 === 0 ? "00" : "30";
            const timeLabel = `${hours}:${minutes}`;
            const [isPressed, setIsPressed] = useState(false);

            const handlePress = () => {
              setIsPressed(!isPressed);
              Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
            };

            return (
              <TouchableOpacity
                key={index}
                onPress={handlePress}
                style={{
                  width: 40,
                  height: "100%",
                  borderWidth: 1,
                  borderColor: "#6646EC",
                  marginHorizontal: 2,
                  justifyContent: "flex-end",
                  alignItems: "center",
                  paddingVertical: 10,
                  backgroundColor: isPressed ? "#E9942F" : "transparent",
                }}
              >
                <ThemedText
                  style={{
                    width: 50,
                    fontSize: 8,
                    color: "black",
                    transform: [{ rotate: "-90deg" }],
                    marginBottom: 10,
                  }}
                >
                  {timeLabel}
                </ThemedText>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      {/* Third Box - 20% height */}
      <View style={{ width: "95%", height: "24%", backgroundColor: "#C4C4C4", marginVertical: 10, alignItems: 'flex-start', paddingLeft: 10, borderRadius: 5, alignSelf: 'center' }}>
        <View style={{ flexDirection: 'row', marginTop: 12 }}>
          <ThemedText style={{ fontSize: 12, color: 'black' }}>Activities</ThemedText>
          <ThemedText style={{ fontSize: 10, color: 'black', textDecorationLine: 'underline', marginLeft: 20 }}>Edit</ThemedText>
        </View>
        <View style={{ width: 60, height: 32, borderWidth: 1, borderColor: '#A1A1A1', justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
          <ThemedText style={{ fontSize: 16, color: 'black' }}>+</ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}
