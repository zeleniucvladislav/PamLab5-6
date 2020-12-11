import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  StatusBar,
  ScrollView,
  PixelRatio,
} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import qs from "qs";
import Navbar from "../navbar";
import FormField from "../helpers/formField";

export default function Homepage({ navigation }) {
  const [formFields, setFormFields] = useState({
    name: "",
    disease: "",
    address: "",
    description: "",
  });
  const setField = (field, value) => {
    setFormFields({ ...formFields, [field]: value });
  };
  const onRequest = async () => {
    const token = await SecureStore.getItemAsync("token");
    axios({
      method: "post",
      url: "https://pam.cybersnets.com/api/Doctor/AddConsultation",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        token: JSON.parse(token),
      },
      data: qs.stringify({
        Name: formFields.name,
        Disease: formFields.disease,
        Address: formFields.address,
        Description: formFields.description,
      }),
    })
      .then((response) => {
        SecureStore.setItemAsync("formFields", JSON.stringify(response.data));
        navigation.navigate("RequestedDoctor", { id: response.data.DocId });
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log(error);
      });
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
            label="Disease"
            placeholder="What is your illness"
            setField={setField}
            value={formFields.disease}
            field="disease"
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
