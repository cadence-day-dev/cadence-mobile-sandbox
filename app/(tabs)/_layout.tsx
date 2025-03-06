import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "#585858",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            backgroundColor: "white",
            borderTopWidth: 1,
            borderTopColor: "#ADADAD",
          },
          default: {
            backgroundColor: "white",
            opacity: 1,
            borderTopWidth: 2,
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
          marginTop: -7,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Cadence SANDBOX",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
