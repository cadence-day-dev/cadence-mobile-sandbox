/* eslint-disable react-native/no-unused-styles */
import { View } from "react-native";
import Arrow from "@/components/ui/Arrow";
import { ThemedText } from "@/components/ThemedText";

const Header = ({ title, subTitle }) => {
  return (
    <View
      style={{
        width: "100%",
        height: "10%",
        marginVertical: 0,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 20,
        position: "relative",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <ThemedText
          style={{
            fontSize: 17,
            color: "black",
            marginBottom: 2,
          }}
        >
          {title}
        </ThemedText>
        <Arrow />
      </View>
      <ThemedText
        style={{
          fontSize: 12,
          color: "black",
          textTransform: "uppercase",
          marginBottom: 2,
        }}
      >
        {subTitle}
      </ThemedText>
    </View>
  );
};

export default Header;
