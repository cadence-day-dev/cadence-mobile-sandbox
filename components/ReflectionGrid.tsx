import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ScheduleGrid = () => {
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(1);
    date.setDate(date.getDate() + i);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });
  const hours = Array.from({ length: 20 }, (_, i) => `${i + 9}h`);
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
                {/* <Text style={styles.hourText}>{hour}</Text> */}
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
    marginLeft: 18,
  },
  column: {
    marginHorizontal: 1,
  },
  dateHeader: {
    fontSize: 10,
    textAlign: "left",
    marginBottom: 5,
    marginTop: 5,
  },
  cell: {
    width: 60,
    height: 16,
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
