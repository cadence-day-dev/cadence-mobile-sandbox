import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ScheduleGrid = () => {
  const dates = ["1/11", "2/11", "3/11", "4/11", "5/11"];
  const hours = Array.from({ length: 13 }, (_, i) => `${i + 9}h`);
  const colors = [
    "#C4C4C4",
    "#A9A9A9",
    "#8B8B8B",
    "#6E6E6E",
    "#505050",
    "#333333",
    "#FFAA00",
    "#FFAA00",
    "#333333",
    "#505050",
    "#6E6E6E",
    "#8B8B8B",
    "#A9A9A9",
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.grid}>
        {dates.map((date, dateIndex) => (
          <View key={dateIndex} style={styles.column}>
            <Text style={styles.dateHeader}>{date}</Text>
            {hours.map((hour, hourIndex) => (
              <View
                key={hourIndex}
                style={[
                  styles.cell,
                  { backgroundColor: colors[hourIndex % colors.length] },
                ]}
              >
                <Text style={styles.hourText}>{hour}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flexDirection: "row",
  },
  column: {
    marginHorizontal: 5,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 5,
  },
  cell: {
    width: 50,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6646EC",
    marginBottom: 2,
  },
  hourText: {
    fontSize: 12,
    color: "black",
  },
});

export default ScheduleGrid;
