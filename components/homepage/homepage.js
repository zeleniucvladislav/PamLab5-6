import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  PixelRatio,
} from "react-native";
import Navbar from "../navbar";
import FormField from "../helpers/formField";
import * as SecureStore from "expo-secure-store";

export default function Homepage({ navigation }) {
  const [formFields, setFormFields] = useState({
    name: "",
    desease: "",
    address: "",
    description: "",
  });
  const setField = (field, value) => {
    setFormFields({ ...formFields, [field]: value });
  };
  const onRequest = async () => {
    SecureStore.setItemAsync("formFields", JSON.stringify(formFields));
    navigation.navigate("Doctors");
  };
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
          <FormField
            label="Name"
            placeholder="Your Name"
            setField={setField}
            value={formFields.name}
            field="name"
            secureEntry={false}
            styleInput={true}
          />
          <FormField
            label="Desease"
            placeholder="What is your illness"
            setField={setField}
            value={formFields.desease}
            field="desease"
            secureEntry={false}
            styleInput={true}
          />
          <FormField
            label="Location"
            placeholder="Where is your location"
            setField={setField}
            value={formFields.address}
            field="address"
            secureEntry={false}
            styleInput={true}
          />
          <FormField
            label="Description ( Optional )"
            placeholder="Describe here"
            setField={setField}
            value={formFields.description}
            field="description"
            secureEntry={false}
            styleInput={false}
          />
          <TouchableOpacity style={styles.formBtn} onPress={() => onRequest()}>
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
    marginTop: "7%",
  },
  formLabel: {
    color: "#37474E",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
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
