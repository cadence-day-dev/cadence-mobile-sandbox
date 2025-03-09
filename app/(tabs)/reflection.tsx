import { SafeAreaView, View } from "react-native";
import ScheduleGrid from "@/components/ui/ReflectionGrid";
import Header from "@/components/ui/Header";

export default function ReflectionScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
      {/* First Box - 20% height */}
      <Header title={"Week"} subTitle={"02/11/24 to 08/11/24"} />
      {/* Second Box - 50% height */}
      <View
        style={{
          width: "100%",
          height: "80%",
          marginVertical: 0,
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
