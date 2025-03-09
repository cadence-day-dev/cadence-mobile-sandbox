/* eslint-disable react-native/no-unused-styles */
import { View } from "react-native";
import Arrow from "@/components/ui/Arrow";
import Start from "@/components/ui/Star";
import { ThemedText } from "@/components/ThemedText";

interface HeaderProps {
  title: any;
  subTitle: any;
}

const Header: React.FC<HeaderProps> = ({ title, subTitle }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        marginTop: 20,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        paddingRight: 20,
        position: "relative",
      }}
    >
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <ThemedText
            style={{
              fontSize: 17,
              color: "#575453",
            }}
          >
            Pattern of your{" "}
          </ThemedText>
          <ThemedText
            style={{
              fontSize: 17,
              color: "black",
            }}
          >
            {title}
          </ThemedText>
          <Arrow />
        </View>
        <Start />
      </View>
      <ThemedText
        style={{
          fontSize: 12,
          color: "black",
        }}
      >
        {subTitle}
      </ThemedText>
    </View>
  );
};

export default Header;
