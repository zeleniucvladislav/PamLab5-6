import React from "react";
import { View, StyleSheet, Text, TextInput, PixelRatio } from "react-native";

export default function FormField(props) {
  return (
    <View styles={styles.formField}>
      <Text style={styles.formLabel}>{props.label}</Text>
      <TextInput
        value={props.value}
        style={styles.input}
        onChangeText={(value) => props.setField(props.field, value)}
        placeholder={`${props.placeholder}`}
        placeholderTextColor="#8FA3AC"
        secureTextEntry={props.secureEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formLabel: {
    color: "#37474E",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  input: {
    borderWidth: 1,
    borderColor: "#CFD8DD",
    borderRadius: 5,
    height: 50,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
  },
});
