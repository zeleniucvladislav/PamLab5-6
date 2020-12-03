import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  TextInput,
  StatusBar,
  ScrollView,
  PixelRatio,
} from "react-native";
import Navbar from "../navbar";

export default function Homepage({ navigation }) {
  return (
    <View style={styles.homepageWrapper}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <Text style={styles.headerText}>Home</Text>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.urgentBtn}>
          <Text style={styles.urgentBtnText}>VERY URGENT</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <View styles={styles.formField}>
            <Text style={styles.formLabel}>Name</Text>
            <TextInput
              style={styles.input}
              multiline
              placeholder="Your Name"
              placeholderTextColor="#8FA3AC"
            />
          </View>
          <View styles={styles.formField}>
            <Text style={styles.formLabel}>Desease</Text>
            <TextInput
              style={styles.input}
              placeholder="What is your illness"
              placeholderTextColor="#8FA3AC"
            />
          </View>
          <View styles={styles.formField}>
            <Text style={styles.formLabel}>Location</Text>
            <TextInput
              style={styles.input}
              placeholder="Where your location"
              placeholderTextColor="#8FA3AC"
            />
          </View>
          <View styles={styles.formField}>
            <Text style={styles.formLabel}>Description ( Optional )</Text>
            <TextInput
              style={styles.textBox}
              multiline={true}
              placeholder="Describe here"
              placeholderTextColor="#8FA3AC"
            />
          </View>
          <TouchableOpacity
            style={styles.formBtn}
            onPress={() => navigation.navigate("Doctors")}
          >
            <Text style={styles.formBtnText}>Request</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  homepageWrapper: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    backgroundColor: "#08DA5F",
    width: "100%",
    height: 45,
    alignItems: "center",
  },
  headerText: {
    paddingTop: 5,
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  urgentBtn: {
    marginLeft: "23%",
    marginRight: "23%",
    marginTop: "10%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#08DA5F",
  },
  urgentBtnText: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    color: "#08DA5F",
  },
  form: {
    marginLeft: 25,
    marginRight: 25,
    marginTop: "5%",
    marginTop: "4%",
  },
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
  textBox: {
    borderWidth: 1,
    borderColor: "#CFD8DD",
    borderRadius: 5,
    height: 100,
    padding: 10,
    marginTop: "5%",
    marginBottom: "5%",
    textAlignVertical: "top",
  },
  formBtn: {
    backgroundColor: "#07DA5F",
    marginTop: "5%",
    marginBottom: "5%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: 10,
    marginRight: 10,
  },
  formBtnText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
});
