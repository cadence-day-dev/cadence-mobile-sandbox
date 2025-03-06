import { SafeAreaView } from "react-native";
import ActivityModal from "@/components/modals/ActivityModal";
import { supabase } from "@/components/utils/client";
import StateModal from "@/components/modals/stateModal";
import { View } from "react-native";
export default function SandboxScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B7B7B7" }}>
      <StateModal supabase={supabase} />
      <View style={{ height: 20 }} />
      <ActivityModal supabase={supabase} />
    </SafeAreaView>
  );
}
