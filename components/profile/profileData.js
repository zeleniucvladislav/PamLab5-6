import React from "react";
import { View, StyleSheet, Text, PixelRatio } from "react-native";

export default function ProfileData(props) {
  return (
    <View style={styles.profileDataWrappper}>
      <Text style={styles.profileLabel}>{props.label}</Text>
      <Text style={styles.profileData}>{props.data}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  profileDataWrappper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: "3%",
  },
  profileLabel: {
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    color: "#92A6B0",
  },
  profileData: {
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
  },
});
