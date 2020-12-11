import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  PixelRatio,
  StatusBar,
  ActivityIndicator,
} from "react-native";
import axios from "axios";
import * as SecureStore from "expo-secure-store";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../../navbar";
import RequestedDoctorList from "./requestedDoctorList";

export default function RequestedDoctor({
  route,
  navigation,
  navigation: { goBack },
}) {
  const [doctor, setDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = route.params;
  useEffect(() => {
    setLoading(true);
    fetchDoctor();
  }, [id]);

  const fetchDoctor = async () => {
    const token = await SecureStore.getItemAsync("token");
    axios
      .get(`https://pam.cybersnets.com/api/Doctor/GetDoctor/${id}`, {
        headers: { token: JSON.parse(token) },
      })
      .then((response) => {
        setDoctor(response.data);
        setLoading(false);
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
        <Text style={styles.headerText}>Doctor List</Text>
      </View>
      {loading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#08DA5F" />
        </View>
      ) : (
        <RequestedDoctorList navigation={navigation} doctor={doctor} />
      )}
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
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
    flex: 1,
    marginTop: "70%",
  },
});
