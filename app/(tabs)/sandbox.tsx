import { SafeAreaView } from "react-native";
import ActivityModal from "@/components/modals/ActivityModal";
import { supabase } from "@/components/utils/client";
import StateModal from "@/components/modals/stateModal";
import { View } from "react-native";
import NotesModal from "@/components/modals/notesModal";

export default function SandboxScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#B7B7B7" }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <View style={{ height: 20 }} />
        <StateModal supabase={supabase} />
        <View style={{ height: 20 }} />
        <ActivityModal supabase={supabase} />
        <View style={{ height: 20 }} />
        <NotesModal supabase={supabase} />
      </View>
    </SafeAreaView>
  );
}
