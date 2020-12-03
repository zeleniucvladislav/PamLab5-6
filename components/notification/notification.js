import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ScrollView,
  StatusBar,
  Image,
  PixelRatio,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "../navbar";

const checkmark = require("../../static/images/checkmark.png");

export default function Notification({ navigation, navigation: { goBack } }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#08DA5F" />
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => goBack()}>
          <Ionicons name="md-arrow-back" size={25} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Notification</Text>
      </View>
      <ScrollView>
        <View style={styles.checkMark}>
          <Image source={checkmark} style={styles.image} />
        </View>
        <Text style={styles.mainText}>Your Request Has Been Approved</Text>
        <Text style={styles.secondaryText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, t. Ut enim ad
          minim venia m. quis nostrud exercitation ullamco
        </Text>
        <View style={styles.content}>
          <View style={styles.requestDetails}>
            <Text style={styles.detailsTitle}>Request Details</Text>
            <Text style={styles.detailsLabel}>Name</Text>
            <Text style={styles.detailsData}>Jojon Suehndra</Text>
            <Text style={styles.detailsLabel}>Desease</Text>
            <Text style={styles.detailsData}>Sore Eyes</Text>
            <Text style={styles.detailsLabel}>Location</Text>
            <Text style={styles.detailsData}>St. Bronxlyn 212</Text>
            <Text style={styles.detailsLabel}>Description</Text>
            <Text style={styles.detailsData}>
              Aku ingin menjadi setitik awan kecil di langint bersama menati
              yaga hah
            </Text>
          </View>
          <View style={styles.doctorDetails}>
            <Text style={styles.detailsTitle}>Doctor</Text>
            <View style={styles.doctorInfo}>
              <Image
                source={{
                  uri: "https://i.ibb.co/XLSV9C1/file-20191203-66986-im7o5.jpg",
                }}
                style={styles.doctorImage}
              />
              <View style={styles.listInfo}>
                <Text style={styles.name}>Dudung Sokhmati</Text>
                <Text style={styles.speciality}>Eye Specialist</Text>
                <View style={styles.ratingWrapper}>
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name="star"
                    size={PixelRatio.get() <= 1.5 ? 18 : 20}
                    color="#FED500"
                  />
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name="star"
                    size={PixelRatio.get() <= 1.5 ? 18 : 20}
                    color="#FED500"
                  />
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name="star"
                    size={PixelRatio.get() <= 1.5 ? 18 : 20}
                    color="#FED500"
                  />
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name="star"
                    size={PixelRatio.get() <= 1.5 ? 18 : 20}
                    color="#FED500"
                  />
                  <AntDesign
                    style={{ marginRight: 5 }}
                    name="star"
                    size={PixelRatio.get() <= 1.5 ? 18 : 20}
                    color="#FED500"
                  />

                  <Text style={styles.rating}>4.9</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.btnWrapper}>
            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.confirmBtnText}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.cancelBtn}
              onPress={() => navigation.navigate("Home")}
            >
              <Text style={styles.cancelBtnText}>Cancel Request</Text>
            </TouchableOpacity>
          </View>
        </View>
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
  detailsLabel: {
    color: "#37474E",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    fontWeight: "900",
    paddingTop: "7%",
  },
  detailsData: {
    color: "#92A6B0",
    lineHeight: 22,
    paddingTop: "2%",
    fontSize: PixelRatio.get() <= 1.5 ? 16 : 18,
    textAlign: "justify",
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
  ratingWrapper: {
    flexDirection: "row",
    paddingTop: 5,
    alignItems: "center",
  },
  rating: {
    fontSize: PixelRatio.get() <= 1.5 ? 14 : 16,
    color: "#92A6B0",
    paddingLeft: 5,
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
});
