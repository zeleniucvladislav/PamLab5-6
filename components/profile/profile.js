import React, { useEffect, useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  StatusBar,
  ScrollView,
  PixelRatio,
  ActivityIndicator,
} from "react-native";
import Navbar from "../navbar";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import moment from "moment";
import { Ionicons } from "@expo/vector-icons";
import ProfileData from "./profileData";

export default function Profile({ navigation, navigation: { goBack } }) {
  const [loading, setLoading] = useState(true);
  const [profile, setProfileData] = useState({
    fullName: "",
    birthday: "",
    email: "",
    phone: "",
    address: "",
    userName: "",
    base64Photo: "",
  });
  useEffect(() => {
    fetchProfile();
  }, []);
  const fetchProfile = async () => {
    const token = await SecureStore.getItemAsync("token");
    axios
      .get("https://pam.cybersnets.com/api/Profile/GetProfile", {
        headers: { token: JSON.parse(token) },
      })
      .then((response) => {
        setProfileData({
          fullName: response.data.FullName,
          birthday: response.data.Birthday,
          email: response.data.Email,
          phone: response.data.Phone,
          address: response.data.Address,
          userName: response.data.Username,
          base64Photo: `data:image/png;base64,${response.data.Base64Photo}`,
        });
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const logOut = async () => {
    SecureStore.deleteItemAsync("token");
    navigation.navigate("Welcome");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
          <Ionicons name="md-arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Profile</Text>
      </View>
      <ScrollView style={styles.profileContainer}>
        {loading ? (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator size="large" color="#08DA5F" />
          </View>
        ) : (
          <>
            <Image
              source={{ uri: profile.base64Photo }}
              style={styles.photoImg}
            />
            <View style={styles.profileWrapper}>
              <ProfileData label="Full Name" data={profile.fullName} />
              <ProfileData label="User Name" data={profile.userName} />
              <ProfileData label="Email" data={profile.email} />
              <ProfileData
                label="Birthday"
                data={moment(profile.birthday).format("MMMM Do YYYY")}
              />
              <ProfileData label="Address" data={profile.address} />
              <ProfileData label="Phone" data={profile.phone} />
            </View>
            <TouchableOpacity style={styles.formBtn} onPress={() => logOut()}>
              <Text style={styles.formBtnText}>Log Out</Text>
            </TouchableOpacity>
          </>
        )}
      </ScrollView>
      <Navbar />
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
  loadingWrapper: {
    marginTop: "70%",
  },
  photoImg: {
    alignSelf: "center",
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: "10%",
  },
  profileContainer: {
    marginTop: "10%",
  },
  profileWrapper: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  formBtn: {
    backgroundColor: "#b23b3b",
    marginTop: "10%",
    marginBottom: "10%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginLeft: "10%",
    marginRight: "10%",
  },
  formBtnText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
});
