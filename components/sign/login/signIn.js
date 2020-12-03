import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
  PixelRatio,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import axios from "axios";
import qs from "qs";
import * as SecureStore from "expo-secure-store";

const image = require("../../../static/images/background.png");

export default function SignIn({ navigation }) {
  const [formFields, setFormFields] = useState({ email: "", password: "" });

  const onLogin = () => {
    axios({
      method: "post",
      url: "https://pam.cybersnets.com/api/Login/UserAuth",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: qs.stringify({
        Email: formFields.email,
        Password: formFields.password,
      }),
    })
      .then((response) => {
        SecureStore.setItemAsync(
          "token",
          JSON.stringify(response.data.Message)
        );
        console.log(response.data);
        response.data.Status === "SUCCESS" && navigation.navigate("Home");
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
      <ImageBackground source={image} style={styles.image}>
        <ScrollView>
          <Text style={styles.welcomeText}>Telemedicine</Text>
          <View style={styles.signForm}>
            <View style={styles.inputWrapper}>
              <MaterialIcons name="person-outline" size={30} color="#F9FEFC" />
              <TextInput
                style={styles.input}
                placeholder="Email Adress"
                placeholderTextColor="#eeeeee"
                value={formFields.email}
                onChangeText={(email) =>
                  setFormFields({ ...formFields, email })
                }
              />
            </View>
            <View style={styles.inputWrapper}>
              <AntDesign name="lock" size={30} color="#F9FEFC" />
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#eeeeee"
                value={formFields.password}
                secureTextEntry
                onChangeText={(password) =>
                  setFormFields({ ...formFields, password })
                }
              />
            </View>
            <TouchableOpacity
              style={styles.signInBtn}
              onPress={() => onLogin()}
            >
              <Text style={styles.signInText}>Login</Text>
            </TouchableOpacity>
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate("SignUp")}
            >
              Sign Up
            </Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  welcomeText: {
    color: "white",
    fontSize: PixelRatio.get() <= 1.5 ? 28 : 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "30%",
  },
  signForm: {
    marginTop: "20%",
    marginLeft: 25,
    marginRight: 25,
  },
  inputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#CFD8DD",
    borderRadius: 5,
    height: 50,
    padding: 10,
    color: "#F9FEFC",
    marginTop: "10%",
  },
  input: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    paddingLeft: 15,
  },
  signInBtn: {
    backgroundColor: "#FFFFFF",
    marginTop: "15%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  signInText: {
    color: "#07DA5F",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    fontWeight: "bold",
  },
  signUpText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },
});
