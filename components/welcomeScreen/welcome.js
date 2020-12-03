import React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ImageBackground,
  ScrollView,
  PixelRatio,
} from "react-native";

const image = require("../../static/images/background.png");

export default function Welcome({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image}>
        <ScrollView>
          <Text style={styles.welcomeText}>Welcome</Text>
          <Text style={styles.aboutText}>
            Lorem ipsum dolor conse, ctetur adipiscing elit, t. Ut enim ad veni
            am , quis nostrud exercitation ullamco
          </Text>
          <TouchableOpacity
            style={styles.signUpBtn}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.signUpText}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signInBtn}
            onPress={() => navigation.navigate("SignIn")}
          >
            <Text style={styles.signInText}>Login</Text>
          </TouchableOpacity>
          <Text style={styles.urgentText}>URGENT</Text>
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
    marginTop: "35%",
  },
  aboutText: {
    color: "white",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    textAlign: "center",
    lineHeight: 20,
    alignSelf: "center",
    marginTop: "10%",
    paddingLeft: 40,
    paddingRight: 40,
  },
  signUpBtn: {
    backgroundColor: "#FFFFFF",
    marginLeft: "6%",
    marginRight: "6%",
    marginTop: "20%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  signUpText: {
    color: "#07DA5F",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    fontWeight: "bold",
  },
  signInBtn: {
    marginLeft: "6%",
    marginRight: "6%",
    marginTop: "10%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#FFFFFF",
  },
  signInText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    fontWeight: "bold",
  },
  urgentText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: "15%",
    marginBottom: "10%",
  },
});
