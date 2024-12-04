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
  const hours = Array.from({ length: 24 }, (_, i) => {
    const hour = Math.floor(i / 2) + 9;
    const minutes = i % 2 === 0 ? "00" : "30";
    return `${hour}:${minutes}`;
  });

  const colors = [
    "#141F2C",
    // "#024886",
    // "#6D7D8D",
    "#B4C5D6",
    "#E9942F",
    "#9D8266",
    // "#A5A1A0",
    "#DAEBFD",
  ];

  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <View style={styles.hourColumn}>
          {hours.map((hour, index) => (
            <View
              key={index}
              style={[
                styles.hourCell,
                index % 2 !== 0 && styles.transparentCell, // Apply transparency to every 30-minute increment
              ]}
            >
              <Text style={styles.hourText}>{index % 2 === 0 ? hour : ""}</Text>
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
                    {
                      backgroundColor:
                        colors[Math.floor(Math.random() * colors.length)],
                    },
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
    marginTop: 27,
  },
  hourCell: {
    height: 13,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 2,
  },
  transparentCell: {
    backgroundColor: "transparent", // Make the cell transparent
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
    marginTop: 10,
  },
  cell: {
    width: 48,
    height: 13,
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
