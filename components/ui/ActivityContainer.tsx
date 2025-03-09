import { View, TouchableOpacity } from "react-native";
import { useState } from "react";
import { ThemedText } from "@/components/ThemedText";

const ActivityContainer = () => {
  const [, setSelectedColor] = useState<string | null>(null);
  const [isActivityDialogVisible, setActivityDialogVisible] = useState(false);
  const handleColorPress = (color: string) => {
    setSelectedColor(color);
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
  };
  return (
    <View
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
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
        {Object.entries(colorLabels).map(([label, color], index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 10 }}>
            <TouchableOpacity
              onPress={() => handleColorPress(color)}
              style={{
                width: 80,
                height: 32,
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
            width: 80,
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
  );
};

export default ActivityContainer;
