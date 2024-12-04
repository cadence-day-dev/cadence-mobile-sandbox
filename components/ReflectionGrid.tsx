import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const ScheduleGrid = () => {
  const dates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(1);
    date.setDate(date.getDate() + i);
    return `${date.getDate()}/${date.getMonth() + 1}`;
  });

  // Generate time in 30-minute increments from 9:00 to 18:30
  const hours = Array.from({ length: 20 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minutes}`;
  });

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
      <View style={styles.container}>
        <View style={styles.hourColumn}>
          {hours.map((hour, index) => (
            <View key={index} style={styles.hourCell}>
              <Text style={styles.hourText}>{hour}</Text>
            </View>
          ))}
        </View>
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
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  hourColumn: {
    marginRight: 0,
    marginTop: 20,
  },
  hourCell: {
    height: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
    fontSize: 10,
  },
  grid: {
    flexDirection: "row",
    marginLeft: 6,
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
    fontSize: 8,
    color: "black",
    marginLeft: 6,
  },
});

export default ScheduleGrid;
