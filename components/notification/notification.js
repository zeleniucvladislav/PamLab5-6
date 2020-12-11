import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  PixelRatio,
  ActivityIndicator,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "../navbar";
import NotificationField from "./notificationField";

import * as SecureStore from "expo-secure-store";
import RatingStars from "../helpers/ratingStars";

const checkmark = require("../../static/images/checkmark.png");

export default function Notification({
  route,
  navigation,
  navigation: { goBack },
}) {
  const [notificationField, setField] = useState({});
  const [error, setError] = useState(false);
  const [doctorData, setDoctorData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setError(false);
    setLoading(true);
    const getFormFields = async () => {
      const formFields = JSON.parse(
        await SecureStore.getItemAsync("formFields")
      );
      formFields !== null ? setField(formFields) : setError(true);
      route.params !== undefined
        ? setDoctorData(route.params.doctorData)
        : setError(true);
      setLoading(false);
    };
    getFormFields();
  }, [route.params]);
  const onPress = async () => {
    SecureStore.deleteItemAsync("formFields");
    navigation.navigate("Home");
  };
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
          <Ionicons name="md-arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      {loading ? (
        <View style={styles.loadingWrapper}>
          <ActivityIndicator size="large" color="#08DA5F" />
        </View>
      ) : (
        <>
          {error ? (
            <View style={styles.errorWrapper}>
              <Text style={styles.error}>An Error has occured</Text>
              <TouchableOpacity
                style={styles.confirmBtn}
                onPress={() => onPress()}
              >
                <Text style={styles.confirmBtnText}>Return</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <ScrollView>
              <View style={styles.checkMark}>
                <Image source={checkmark} style={styles.image} />
              </View>
              <Text style={styles.mainText}>
                Your Request Has Been Approved
              </Text>
              <Text style={styles.secondaryText}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, t. Ut
                enim ad minim venia m. quis nostrud exercitation ullamco
              </Text>
              <View style={styles.content}>
                <View style={styles.requestDetails}>
                  <Text style={styles.detailsTitle}>Request Details</Text>
                  <NotificationField
                    label="Name"
                    value={notificationField.Name}
                  />
                  <NotificationField
                    label="Desease"
                    value={notificationField.Disease}
                  />
                  <NotificationField
                    label="Location"
                    value={notificationField.Address}
                  />
                  {notificationField.Description &&
                    notificationField.Description.length > 0 && (
                      <NotificationField
                        label="Description"
                        value={notificationField.Description}
                      />
                    )}
                </View>
                <View style={styles.doctorDetails}>
                  <Text style={styles.detailsTitle}>Doctor</Text>
                  <View style={styles.doctorInfo}>
                    <Image
                      source={{
                        uri: `data:image/png;base64,${doctorData.Photo}`,
                      }}
                      style={styles.doctorImage}
                    />
                    <View style={styles.listInfo}>
                      <Text style={styles.name}>{doctorData.FullName}</Text>
                      <Text style={styles.speciality}>{doctorData.Specs}</Text>
                      <RatingStars stars={doctorData.Stars} />
                    </View>
                  </View>
                </View>
                <View style={styles.btnWrapper}>
                  <TouchableOpacity
                    style={styles.confirmBtn}
                    onPress={() => onPress()}
                  >
                    <Text style={styles.confirmBtnText}>Confirm</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => onPress()}
                  >
                    <Text style={styles.cancelBtnText}>Cancel Request</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          )}
        </>
      )}
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
  checkMark: {
    marginTop: "8%",
    alignItems: "center",
  },
  image: {
    height: PixelRatio.get() <= 1.5 ? 130 : 150,
    width: PixelRatio.get() <= 1.5 ? 130 : 150,
  },
  mainText: {
    fontSize: PixelRatio.get() <= 1.5 ? 18 : 20,
    fontWeight: "900",
    color: "#37474E",
    paddingLeft: "20%",
    paddingRight: "20%",
    textAlign: "center",
    marginTop: "8%",
  },
  secondaryText: {
    color: "#92A6B0",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginTop: "6%",
    textAlign: "center",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    lineHeight: 22,
  },
  content: {
    paddingLeft: "6%",
    paddingRight: "6%",
  },
  requestDetails: {
    marginTop: "15%",
    marginBottom: "12%",
  },
  detailsTitle: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    color: "#08DA5F",
    fontWeight: "900",
  },
  doctorInfo: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#EBEFF2",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
    marginTop: "6%",
  },
  doctorImage: {
    height: 70,
    width: 70,
    borderRadius: 50,
    alignSelf: "center",
  },
  listInfo: {
    paddingLeft: 20,
  },
  name: {
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    fontWeight: "500",
  },
  speciality: {
    color: "#08DA5F",
    fontStyle: "italic",
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
  },
  btnWrapper: {
    marginTop: "12%",
    marginBottom: "6%",
  },
  confirmBtn: {
    backgroundColor: "#07DA5F",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
  confirmBtnText: {
    color: "#FFFFFF",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  cancelBtn: {
    marginTop: "7%",
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#92A6B0",
  },
  cancelBtnText: {
    color: "#92A6B0",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
  },
  errorWrapper: {
    flex: 1,
    paddingLeft: "6%",
    paddingRight: "6%",
    justifyContent: "center",
  },
  error: {
    alignSelf: "center",
    marginBottom: "5%",
    fontSize: PixelRatio.get() <= 1.5 ? 18 : 20,
  },
  loadingWrapper: {
    flex: 1,
    justifyContent: "center",
  },
});
