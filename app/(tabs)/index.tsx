import { SafeAreaView } from "react-native";
import Header from "@/components/ui/Header";
import Timeline from "@/components/ui/Timeline";
import ActivityContainer from "@/components/ui/ActivityContainer";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
      <Header title={"Pattern of your Day"} subTitle={"12/11/24 at 13:15"} />
      <Timeline />
      <ActivityContainer />
    </SafeAreaView>
  );
}
