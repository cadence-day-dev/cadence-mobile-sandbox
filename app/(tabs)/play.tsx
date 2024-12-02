import { SafeAreaView } from "react-native";

import { ThemedText } from "@/components/ThemedText";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#C4C4C4" }}>
      <ThemedText>Play</ThemedText>
    </SafeAreaView>
  );
}
