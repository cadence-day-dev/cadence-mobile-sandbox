import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

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
            borderTopColor: "red",
          },
        }),
        tabBarLabelStyle: {
          fontSize: 11,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "TODAY",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="reflection"
        options={{
          title: "REFLECTION",
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="play"
        options={{
          title: "PLAY",
          tabBarIcon: () => null,
        }}
      />
      {/* <Tabs.Screen
        name="about"
        options={{
          title: "ABOUT",
          tabBarIcon: () => null,
        }}
      /> */}
      <Tabs.Screen
        name="account"
        options={{
          title: "ACCOUNT",
          tabBarIcon: () => null,
        }}
      />
    </Tabs>
  );
}
