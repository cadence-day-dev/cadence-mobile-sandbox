import { SafeAreaView, View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Svg, Rect, Circle, Line } from "react-native-svg";
import { useState } from "react";
import * as Haptics from "expo-haptics";

import { ThemedText } from "@/components/ThemedText";

export default function AccountScreen() {
  const [pressedStates, setPressedStates] = useState(Array(48).fill(false));
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [sliceColors, setSliceColors] = useState<string[]>(
    Array(48).fill("transparent"),
  );

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
          height: "5%",
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
        <ThemedText
          style={{
            fontSize: 14,
            color: "black",
            marginBottom: 2,
            marginBottom: 2,
            marginTop: -8,
          }}
        >
          Account
        </ThemedText>
      </View>
      {/* Second Box - 50% height */}
      <View
        style={{
          width: "95%",
          height: "30%",
          backgroundColor: "#C4C4C4",
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <Image
          source={require("@/assets/images/Andrea.png")}
          style={{
            position: "absolute",
            top: 56,
            width: 80,
            height: 80,
            borderRadius: 25,
          }}
        />
        <ThemedText
          style={{
            position: "absolute",
            top: 150,
            fontSize: 14,
            color: "black",
            textAlign: "center",
          }}
        >
          Andrea Lausevic
        </ThemedText>
        <ThemedText
          style={{
            position: "absolute",
            top: 170,
            fontSize: 10,
            color: "black",
            textAlign: "center",
          }}
        >
          andrea.lausevic@gmail.com
        </ThemedText>
      </View>

      {/* Third Box - 20% height */}
      <View
        style={{
          width: "95%",
          height: "24%",
          backgroundColor: "#C4C4C4",
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        {/* New Inner Box */}
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>Points</ThemedText>
          <View
            style={{
              position: "absolute",
              top: "50%",
              left: "20%",
              right: "12%",
              height: 1,
              backgroundColor: "black",
              borderStyle: "dotted",
            }}
          />
          <ThemedText style={{ fontSize: 10, color: "black" }}>30</ThemedText>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Timeslots
          </ThemedText>
          <View
            style={{
              position: "absolute",
              top: "50%",
              left: "24%",
              right: "12%",
              height: 1,
              backgroundColor: "black",
              borderStyle: "dotted",
            }}
          />
          <ThemedText style={{ fontSize: 10, color: "black" }}>30</ThemedText>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Notes
          </ThemedText>
          <View
            style={{
              position: "absolute",
              top: "50%",
              left: "20%",
              right: "12%",
              height: 1,
              backgroundColor: "black",
              borderStyle: "dotted",
            }}
          />
          <ThemedText style={{ fontSize: 10, color: "black" }}>30</ThemedText>
        </View>
      </View>
      {/* Third Box - 20% height */}
      <View
        style={{
          width: "95%",
          height: "24%",
          backgroundColor: "#C4C4C4",
          marginVertical: 10,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Option 1
          </ThemedText>
          <ThemedText style={{ fontSize: 10, color: "black" }}> > </ThemedText>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Option 2
          </ThemedText>
          <ThemedText style={{ fontSize: 10, color: "black" }}> > </ThemedText>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Find friends
          </ThemedText>
          <ThemedText style={{ fontSize: 10, color: "black" }}> > </ThemedText>
        </View>
        <View
          style={{
            width: "90%",
            height: "20%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            position: "relative",
          }}
        >
          <ThemedText style={{ fontSize: 10, color: "black" }}>
            Log out
          </ThemedText>
          <ThemedText style={{ fontSize: 10, color: "black" }}> > </ThemedText>
        </View>
      </View>
    </SafeAreaView>
  );
}
