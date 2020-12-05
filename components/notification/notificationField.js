import React from "react";
import { StyleSheet, Text, PixelRatio } from "react-native";

export default function NotificationField(props) {
  return (
    <>
      <Text style={styles.detailsLabel}>{props.label}</Text>
      <Text style={styles.detailsData}>{props.value}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  detailsLabel: {
    color: "#37474E",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    fontWeight: "900",
    paddingTop: "7%",
  },
  detailsData: {
    color: "#92A6B0",
    lineHeight: 22,
    paddingTop: "2%",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    textAlign: "justify",
  },
});
