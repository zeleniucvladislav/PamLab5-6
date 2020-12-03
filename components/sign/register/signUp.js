import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  PixelRatio,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ImageSelector from "./imagePicker";
import FormField from "./formField";
import axios from "axios";
import qs from "qs";

export default function SignUp({ navigation, navigation: { goBack } }) {
  const [formFields, setFormFields] = useState({
    fullName: "",
    birthday: "",
    email: "",
    phone: "",
    address: "",
    userName: "",
    password: "",
  });
  const [base64image, setImage] = useState("");
  const setField = (field, value) => {
    setFormFields({ ...formFields, [field]: value });
  };
  const onRegister = () => {
    axios({
      method: "post",
      url: "https://pam.cybersnets.com/api/Register/UserReg",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        FullName: formFields.fullName,
        Birthday: formFields.birthday,
        Email: formFields.email,
        Phone: formFields.phone,
        Address: formFields.address,
        Username: formFields.userName,
        Password: formFields.password,
        Base64Photo: base64image,
      }),
    })
      .then((response) => {
        console.log(response.data);
        response.data === "SUCCESS" && navigation.navigate("SignIn");
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
        }
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
          <Ionicons name="md-arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Register</Text>
      </View>
      <ScrollView style={styles.signUpWrapper}>
        <ImageSelector setImage={setImage} />
        <View style={styles.form}>
          <FormField
            label="Full Name"
            placeholder="Your Full Name"
            setField={setField}
            value={formFields.fullName}
            field="fullName"
            secureEntry={false}
          />
          <FormField
            label="Username"
            placeholder="Your Username"
            setField={setField}
            value={formFields.userName}
            field="userName"
            secureEntry={false}
          />
          <FormField
            label="Birthday"
            placeholder="yyyy/mm/dd"
            setField={setField}
            value={formFields.birthday}
            field="birthday"
            secureEntry={false}
          />
          <FormField
            label="Email"
            placeholder="Your Email"
            setField={setField}
            value={formFields.email}
            field="email"
            secureEntry={false}
          />
          <FormField
            label="Phone number"
            placeholder="Your Phone number"
            setField={setField}
            value={formFields.phone}
            field="phone"
            secureEntry={false}
          />
          <FormField
            label="Location/Address"
            placeholder="Your Location"
            setField={setField}
            value={formFields.address}
            field="address"
            secureEntry={false}
          />
          <FormField
            label="Password"
            placeholder="Your Password"
            setField={setField}
            value={formFields.password}
            field="password"
            secureEntry={true}
          />
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => onRegister()}
          >
            <Text style={styles.signUpText}>Sign</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#08DA5F",
    width: "100%",
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  backBtn: {
    position: "absolute",
    left: 15,
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  signUpWrapper: {
    marginTop: "5%",
    marginBottom: "3%",
  },
  photoImg: {
    alignSelf: "center",
    width: 150,
    height: 150,
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
  signUpBtn: {
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
  signUpText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
});
