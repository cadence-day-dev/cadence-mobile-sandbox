import { SafeAreaView, View, Image } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import Avatar from "@/components/ui/Avatar";

interface LineItemProps {
  title: any;
  value: any;
}

const LineItem: React.FC<LineItemProps> = ({ title, value }) => {
  return (
    <View
      style={{
        width: "90%",
        height: "12%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        borderBottomWidth: 0.5,
        borderColor: "#6646EC",
        marginBottom: 18,
      }}
    >
      <ThemedText style={{ fontSize: 14, color: "#575453" }}>
        {title}
      </ThemedText>
      <ThemedText style={{ fontSize: 14, color: "black" }}>{value}</ThemedText>
    </View>
  );
};

export default function AccountScreen() {
  const sections = {
    Name: "Andrea Lausevic",
    Username: "@anjicabananica",
    Password: "********",
    Phone_number: "+13473244776",
    Email: "Andrea Lausevic",
    Notifications: ">",
    Subscription_plan: "Free >",
    // Two_factor_authentication: "Enabled >",
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#D9D9D9" }}>
      <Avatar />
      <View
        style={{
          top: 60,
          width: "100%",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {Object.entries(sections).map(([title, value]) => {
          return <LineItem title={title} value={value} />;
        })}
        <View
          style={{
            width: "90%",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
          }}
        >
          <ThemedText
            style={{
              fontSize: 11,
              marginTop: 20,
              color: "#575453",
              alignSelf: "flex-start",
              letterSpacing: 2,
            }}
          >
            SECURITY
          </ThemedText>
        </View>
        <LineItem title={"Two factor authentication"} value={"Enabled >"} />
      </View>
    </SafeAreaView>
  );
}
