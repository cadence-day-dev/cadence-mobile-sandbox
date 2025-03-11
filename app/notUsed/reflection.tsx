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
          height: "80%",
        }}
      >
        <ScheduleGrid />
      </View>
    </SafeAreaView>
  );
}
